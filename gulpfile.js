// node-slate

// Imports
const cleanCss =      require('gulp-clean-css');
const concat =        require('gulp-concat');
const del =           require('del');
const ejs =           require('gulp-ejs');
const fs =            require('fs');
const gls =           require('gulp-live-server');
const gulp =          require('gulp');
const gulpIf =        require('gulp-if');
const log =           require('fancy-log');
const highlight =     require('highlight.js');
const htmlHint =      require('gulp-htmlhint');
const htmlValidator = require('gulp-w3c-html-validator');
const jsHint =        require('gulp-jshint');
const marked =        require('marked');
const mergeStream =   require('merge-stream');
const open =          require('gulp-open');
const path =          require('path');
const prettify =      require('gulp-prettify');
const rename =        require('gulp-rename');
const sass =          require('gulp-sass');
const uglify =        require('gulp-uglify');
const yaml =          require('js-yaml');

// Setup
const pkg = require('./package.json');
const port = 4567;
const htmlHintConfig = { 'attr-value-double-quotes': false };
const jsHintConfig = {
   jquery:  true,
   browser: true,
   undef:   true,
   unused:  true,
   };
const settings = {
   compress: true
   };
const jsFiles = {
   libs: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jquery-ui-dist/jquery-ui.js', //not ideal: https://stackoverflow.com/q/34219046
      'source/javascripts/lib/_jquery.tocify.js',
      'node_modules/tocbot/dist/tocbot.js',  //see: https://github.com/center-key/node-slate/issues/8
      'node_modules/imagesloaded/imagesloaded.pkgd.js'
      ],
   scripts: [
      'source/javascripts/app/_lang.js',
      'source/javascripts/app/_toc.js',
      ],
   search: [
      'source/javascripts/lib/_lunr.js',   //see: https://github.com/center-key/node-slate/issues/9
      // 'node_modules/lunr/lunr.js',
      'source/javascripts/lib/_jquery.highlight.js',
      // 'node_modules/jquery-highlight/jquery.highlight.js',
      'source/javascripts/app/_search.js',
      ]
   };

// Helper functions
const renderer = new marked.Renderer();
renderer.code = (code, language) => {
   const highlighted = language ? highlight.highlight(language, code).value :
      highlight.highlightAuto(code).value;
   return `<pre class="highlight ${language}"><code>${highlighted}</code></pre>`;
   };
const readIndexYml = () => yaml.safeLoad(fs.readFileSync('source/index.yml', 'utf8'));
const getPageData = () => {
   const config = readIndexYml();
   const includes = config.includes
      .map(include => `source/includes/${include}.md`)
      .map(include => fs.readFileSync(include, 'utf8'))
      .map(include => marked(include, { renderer: renderer }));
   const getPageData = {
      current_page: { data: config },
      page_classes: '',
      includes: includes,
      image_tag: (filename) => {
         const code = filename.split('.')[0];
         return `<img alt=${code} class=image-${code} src=images/${filename}>`;
         },
      javascript_include_tag: (name) =>
         `<script src=javascripts/${name}.js type=text/javascript></script>\n`,
      stylesheet_link_tag: (name, media) =>
         `<link href=stylesheets/${name}.css rel=stylesheet media=${media}>`,
      langs: (config.language_tabs || []).map(
         lang => typeof lang === 'string' ? lang : lang.keys.first)
      };
   return getPageData;
   };

// Tasks
const task = {
   clean: () => {
      console.log(pkg.name, 'v' + pkg.version);
      return del(['build/*', '**/.DS_Store']);
      },
   runStaticAnalysis: () => {
      const ignoreDuplicateIds = (type, message) => !/^Duplicate ID/.test(message);
      return mergeStream(
         gulp.src('build/index.html')
            .pipe(htmlHint(htmlHintConfig))
            .pipe(htmlHint.reporter())
            .pipe(htmlValidator({ verifyMessage: ignoreDuplicateIds }))
            .pipe(htmlValidator.reporter()),
         gulp.src(jsFiles.scripts)
            .pipe(jsHint(jsHintConfig))
            .pipe(jsHint.reporter())
         );
      },
   buildFonts: () => {
      return gulp.src('source/fonts/**/*')
         .pipe(gulp.dest('build/fonts'));
      },
   buildImages: () => {
      return gulp.src('source/images/**/*')
         .pipe(gulp.dest('build/images'));
      },
   buildJs: () => {
      const config = readIndexYml();
      return gulp.src(jsFiles.libs.concat(config.search ? jsFiles.search : [], jsFiles.scripts))
         .pipe(concat('all.js'))
         .pipe(gulpIf(settings.compress, uglify()))
         .pipe(gulp.dest('build/javascripts'));
      },
   buildCss: () => {
      return gulp.src('source/stylesheets/*.css.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(rename({ extname: '' }))
         .pipe(gulpIf(settings.compress, cleanCss()))
         .pipe(gulp.dest('build/stylesheets'));
      },
   addHighlightStyle: () => {
      const config = readIndexYml();
      const cssPath = 'node_modules/highlight.js/styles/' + config.highlight_theme + '.css';
      return gulp.src(cssPath)
         .pipe(rename({ prefix: 'highlight-' }))
         .pipe(gulpIf(settings.compress, cleanCss()))
         .pipe(gulp.dest('build/stylesheets'));
      },
   buildHtml: () => {
      const data = getPageData();
      return gulp.src('source/*.html')
         .pipe(ejs(data).on('error', log.error))
         .pipe(gulpIf(settings.compress, prettify({ indent_size: 3 })))
         .pipe(gulp.dest('build'));
      },
    buildCNAME: () => {
      return gulp.src('source/CNAME', { allowEmpty: true })
         .pipe(gulp.dest('build'));
      },
   build: () => {
      return mergeStream(
         task.buildCNAME(),
         task.buildFonts(),
         task.buildImages(),
         task.buildJs(),
         task.buildCss(),
         task.addHighlightStyle(),
         task.buildHtml()
         );
      },
   buildUncompressed: () => {
      settings.compress = false;
      return task.build();
      },
   runServer: () => {
      gulp.watch('source/*.html',           gulp.parallel('build-html'));
      gulp.watch('source/includes/**/*',    gulp.parallel('build-html'));
      gulp.watch('source/javascripts/**/*', gulp.parallel('build-js'));
      gulp.watch('source/stylesheets/**/*', gulp.parallel('build-css'));
      gulp.watch('source/index.yml',        gulp.parallel('build-highlightjs', 'build-js', 'build-html'));
      const server = gls.static('build', port);
      server.start();
      const notifyServer = (file) => server.notify.apply(server, [file]);
      gulp.watch('build/**/*', notifyServer);
      gulp.src(__filename).pipe(open({ uri: 'http://localhost:' + port }));
      console.log('Slate markdown source:');
      console.log(path.resolve('source'));
      },
   publishToDocs: () => {
      // fs.mkdirSync('docs');
      // fs.writeFileSync('docs/CNAME', 'node-slate.js.org\n');
      return gulp.src('build/**/*')
         .pipe(gulp.dest('docs'));
      }
   };

// Gulp
gulp.task('clean',              task.clean);
gulp.task('lint',               task.runStaticAnalysis);
gulp.task('build-js',           task.buildJs);
gulp.task('build-css',          task.buildCss);
gulp.task('build-html',         task.buildHtml);
gulp.task('build-highlightjs',  task.addHighlightStyle);
gulp.task('build-static-site',  task.build);
gulp.task('build-uncompressed', task.buildUncompressed);
gulp.task('serve',              task.runServer);
gulp.task('publish',            task.publishToDocs);
