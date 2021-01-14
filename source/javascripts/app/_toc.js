//= require ../lib/_jquery.tocify
(function(global) {
   'use strict';
   function makeToc() {
      var options = {
         selectors:       'h1, h2, h3',
         extendPage:      false,
         theme:           'none',
         smoothScroll:    false,
         showEffectSpeed: 0,
         hideEffectSpeed: 180,
         ignoreSelector:  '.toc-ignore',
         highlightOffset: 60,
         scrollTo:        -1,
         scrollHistory:   true,
         hashGenerator:   function(text, element) { return element.prop('id'); }
         };
      global.toc = $('#toc').tocify(options).data('toc-tocify');
      function openNavButton() {
         $('.tocify-wrapper').toggleClass('open');
         $('#nav-button').toggleClass('open');
         return false;
         }
      function closeToc() {
         $('.tocify-wrapper').removeClass('open');
         $('#nav-button').removeClass('open');
         }
      $('#nav-button').on({ click: openNavButton });
      $('.page-wrapper').on({ click: closeToc });
      $('.tocify-item').on({ click: closeToc });
      }
   // Hack to make already open sections to start opened, instead of displaying an ugly animation.
   function animate() {
      setTimeout(function() { global.toc.setOption('showEffectSpeed', 180); }, 50);
      }
   function setupToc() {
      makeToc();
      animate();
      global.setupLanguages($('body').data('languages'));
      $('.content').imagesLoaded(function() { global.toc.calculateHeights(); });
      }
   $(setupToc);
})(window);
