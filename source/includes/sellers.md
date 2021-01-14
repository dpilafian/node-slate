# Sellers

## Basic
To get a seller allowed to receive and make payments, we should:

1. Create the seller with Basic Information
2. Provide all necessary information like Phones, Addresses, Owners and Documents
3. Then, request the approval of KYC process

Only approved Sellers could receive and make payments on Brydge Ecosystem. Here, we are dealing with the step 1.

<aside class=warning>
This KYC process is very important to protect us against money laundry and some legal processes.
</aside>

### Create a Seller
```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/seller`, {
  seller: {
		cnpj:"90787484000153",
		name:"Brydge IO LTDA",
	  email:"teste@brydge.io",
		business_name: "Brydge IO",
		mcc: "26",
		type:"business",
		revenue:"50.000",
		establishment_format: "LTDA",
		establishment_date:"2020-10-01"
	}
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "seller": {
    "token": "c48494f1-65e0-4d17-bc36-5abc7f874a2c",
    "cnpj": "90787484000153",
    "name": "Brydge IO",
    "email": "teste@brydge.io",
    "business_name": "Brydge IO LTDA",
    "mcc": "26",
    "type": "business",
    "revenue": 50,
    "establishment_format": "LTDA",
    "establishment_date": "2020-10-01T00:00:00.000Z",
    "updatedAt": "2020-11-23T21:38:59.709Z",
    "createdAt": "2020-11-23T21:38:59.709Z"
  }
}
```

This endpoint creates a new seller with the basic information.

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/seller`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/seller`

#### Query Parameters

None.

### Get a Seller by CNPJ

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const cnpj = "01394674000180";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/seller/${cnpj}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "seller": {
    "token": "c48494f1-65e0-4d17-bc36-5abc7f874a2c",
    "cnpj": "90787484000153",
    "name": "Brydge IO",
    "email": "teste@brydge.io",
    "business_name": "Brydge IO LTDA",
    "mcc": "26",
    "type": "business",
    "revenue": 50,
    "establishment_format": "LTDA",
    "establishment_date": "2020-10-01T00:00:00.000Z",
    "updatedAt": "2020-11-23T21:38:59.709Z",
    "createdAt": "2020-11-23T21:38:59.709Z"
  }
}
```

This endpoint takes information from a specific seller by CNPJ.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/seller/:cnpj`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/seller/:cnpj`

#### Query Parameters

None.

### Get a Seller by Token

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/seller/${sellerToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "seller": {
    "token": "c48494f1-65e0-4d17-bc36-5abc7f874a2c",
    "cnpj": "90787484000153",
    "name": "Brydge IO",
    "email": "teste@brydge.io",
    "business_name": "Brydge IO LTDA",
    "mcc": "26",
    "type": "business",
    "revenue": 50,
    "establishment_format": "LTDA",
    "establishment_date": "2020-10-01T00:00:00.000Z",
    "updatedAt": "2020-11-23T21:38:59.709Z",
    "createdAt": "2020-11-23T21:38:59.709Z"
  }
}
```

This endpoint takes information from a specific seller by Token.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken`

#### Query Parameters

None.

### Update a Seller

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.update(`/v1/network/${networkToken}/seller/${sellerToken}`, {
	seller: {
		cnpj:"90787484000153",
		name:"Brydge IO LTDA",
	  email:"teste@brydge.io",
		business_name: "Brydge IO",
		mcc: "26",
		type:"business",
		revenue:"50.000",
		establishment_format: "LTDA",
		establishment_date:"2020-10-01"
	}
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "msg": "Seller was updated"
}
```

This endpoint updates the information for a specific seller.

#### HTTP Request

**Sandbox**
`PUT https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken`

**Production**
`PUT https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken`

#### Query Parameters

None.

### Delete a Seller

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.delete(`/v1/network/${networkToken}/seller/${sellerToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "msg": "Seller deleted"
}
```

This endpoint deletes a specific seller.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken`

#### Query Parameters

None.

## Phones

### Create a Phone

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/seller/${sellerToken}/phone`, {
	phone:{
		 area_code: 13,
		 country_code:55,
		 number: "2583564"
	 }
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "phone": {
    "token": "d881ba21-92ad-4837-a672-4821ffc83b5c",
    "CompanyNetwork": {
      "token": "9460246d-3c0e-4318-8874-5f7acca63efc"
    },
    "active": true,
    "area_code": 13,
    "country_code": 55,
    "number": "2583564",
    "updatedAt": "2020-11-27T19:11:44.091Z",
    "createdAt": "2020-11-27T19:11:44.091Z"
  }
}
```

This endpoint creates a new seller's phone.

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1//network/:networkToken/seller/:sellerToken/phone`

**Production**
`POST https://register.brydge.io/v1//network/:networkToken/seller/:sellerToken/phone`

#### Query Parameters

None.

### Get a Phone

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const phoneToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/seller/${sellerToken}/phone/${phoneToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "phone": {
    "token": "d881ba21-92ad-4837-a672-4821ffc83b5c",
    "CompanyNetwork": {
      "token": "9460246d-3c0e-4318-8874-5f7acca63efc"
    },
    "active": true,
    "area_code": 13,
    "country_code": 55,
    "number": "2583564",
    "updatedAt": "2020-11-27T19:11:44.091Z",
    "createdAt": "2020-11-27T19:11:44.091Z"
  }
}
```

This endpoint takes information from a specific seller.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1//network/:networkToken/seller/:sellerToken/phone/:phoneToken`

**Production**
`GET https://register.brydge.io/v1//network/:networkToken/seller/:sellerToken/phone/:phoneToken`

#### Query Parameters

None.

### Update a Phone

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const phoneToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.update(`/v1/network/${networkToken}/seller/${sellerToken}/phone/${phoneToken}`, {
	phone:{
		 area_code: 13,
		 country_code:55,
		 number: "23456789"
	 }
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "status": "success",
  "msg": "Seller's phone was updated"
}
```

This endpoint updates information for a specific seller's phone.

#### HTTP Request

**Sandbox**
`PUT https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/phone/:phoneToken`

**Production**
`PUT https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/phone/:phoneToken`

#### Query Parameters

None.

### Delete a Phone

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const phoneToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.delete(`/v1/network/${networkToken}/seller/${sellerToken}/phone/${phoneToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "status": "success",
  "msg": "Seller's was phone deleted"
}
```

This endpoint delete a specific seller's phone.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1//network/:networkToken/seller/:sellerToken/phone/:phoneToken`

**Production**
`GET https://register.brydge.io/v1//network/:networkToken/seller/:sellerToken/phone/:phoneToken`

#### Query Parameters

None.

## Addresses

### Create a Address

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/seller/${sellerToken}/address`, {
	address:{
			line1:"Av Americas, 500",
			line2:"Citta América",
      city:"Rio de Janeiro",
			neighborhood:"Barra da Tijuca",
			state:"RJ",
			zip_code:"22845046",
			country_code:"BR"
		}
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "seller": {
    "token": "10ab9f3d-7523-48da-b580-4ca09ff92d53",
    "CompanyNetwork": {
      "token": "9460246d-3c0e-4318-8874-5f7acca63efc"
    },
    "street": "Av Americas, 500  Citta América",
    "city": "Rio de Janeiro",
    "neighborhood": "Barra da Tijuca",
    "state": "RJ",
    "zip_code": "22845046",
    "country_code": "BR",
    "updatedAt": "2020-11-27T19:10:37.198Z",
    "createdAt": "2020-11-27T19:10:37.198Z"
  }
}
```

This endpoint creates a new seller's address.

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/address`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/address`

#### Query Parameters

None.

### Get a Address

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const addressToken = "10ab9f3d-7523-48da-b580-4ca09ff92d53";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/seller/${sellerToken}/address/${addressToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "seller": {
    "token": "10ab9f3d-7523-48da-b580-4ca09ff92d53",
    "CompanyNetwork": {
      "token": "9460246d-3c0e-4318-8874-5f7acca63efc"
    },
    "street": "Av Americas, 500  Citta América",
    "city": "Rio de Janeiro",
    "neighborhood": "Barra da Tijuca",
    "state": "RJ",
    "zip_code": "22845046",
    "country_code": "BR",
    "updatedAt": "2020-11-27T19:10:37.198Z",
    "createdAt": "2020-11-27T19:10:37.198Z"
  }
}
```

This endpoint takes information from a specific seller's address.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/address/:addressToken`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/address/:addressToken`

#### Query Parameters

None.

### Update a Address

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const addressToken = "10ab9f3d-7523-48da-b580-4ca09ff92d53";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.update(`/v1/network/${networkToken}/seller/${sellerToken}/address/${addressToken}`, {
	address:{
			line1:"Av Americas, 200",
			line2:"Citta América",
			city:"Rio de Janeiro",
			state:"RJ",
		  neighborhood:"Barra da Tijuca",
			zip_code:"22845046",
			country_code:"BR"
		}
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "status": "success",
  "msg": "Seller's address was updated"
}
```

This endpoint updates information for a specific seller's address.

#### HTTP Request

**Sandbox**
`PUT https://register.brydge.com.br/v1//network/:networkToken/seller/:sellerToken/address/:addressToken`

**Production**
`PUT https://register.brydge.io/v1//network/:networkToken/seller/:sellerToken/address/:addressToken`

#### Query Parameters

None.

## Owner
The Seller's owner.

### Create a Owner

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/seller/${sellerToken}/owner`, {
	owner: {
		first_name: "Maria",
		last_name: "Adil",
		email: "brianbusiness3@gmail.com",
		phone_number: "3082892282",
		cpf: "94492195084",
		birthdate: "1980-12-30"
	}
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "owner": {
    "token": "10ab9f3d-7523-48da-b580-4ca09ff92d53",
    "CompanyNetwork": {
      "token": "9460246d-3c0e-4318-8874-5f7acca63efc"
    },
    "first_name": "Maria",
    "last_name": "Adil",
    "email": "brianbusiness3@gmail.com",
    "phone_number": "3082892282",
    "cpf": "94492195084",
    "birthdate": "1980-12-30T00:00:00.000Z",
    "updatedAt": "2020-11-24T14:54:12.410Z",
    "createdAt": "2020-11-24T14:54:12.410Z"
  }
}
```

This endpoint creates a new seller's owner.

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/owner`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/owner`

#### Query Parameters

None.

### Get a Owner

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const ownerToken = "10ab9f3d-7523-48da-b580-4ca09ff92d53";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/seller/${sellerToken}/owner/${ownerToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "owner": {
    "token": "10ab9f3d-7523-48da-b580-4ca09ff92d53",
    "CompanyNetwork": {
      "token": "9460246d-3c0e-4318-8874-5f7acca63efc"
    },
    "first_name": "Maria",
    "last_name": "Adil",
    "email": "brianbusiness3@gmail.com",
    "phone_number": "3082892282",
    "cpf": "94492195084",
    "birthdate": "1980-12-30T00:00:00.000Z",
    "updatedAt": "2020-11-24T14:54:12.410Z",
    "createdAt": "2020-11-24T14:54:12.410Z"
  }
}
```

This endpoint takes information from a specific seller's owner.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/owner/:ownerToken`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/owner/:ownerToken`

#### Query Parameters

None.

### Update a Owner

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const ownerToken = "10ab9f3d-7523-48da-b580-4ca09ff92d53";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.update(`/v1/network/${networkToken}/seller/${sellerToken}/owner/${ownerToken}`, {
	owner: {
			first_name: "Joao",
			last_name: "Adil",
			email: "brianbusiness3@gmail.com",
			phone_number: "3082892282",
			cpf: "94492195084",
			birthdate: "1980-12-30"
			}
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "status": "success",
  "msg": "Seller's owner was updated"
}
```

This endpoint updates information for a specific seller's owner.

#### HTTP Request

**Sandbox**
`PUT https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/owner/:ownerToken`

**Production**
`PUT https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/owner/:ownerToken`

#### Query Parameters

None.

## Documents

### Upload a Document

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "382184a-382d-hsa3-4882-849c932jduw";
const documentType = "CNPJ";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
  `/v1/network/${networkToken}/seller/${sellerToken}/document/${documentType}`, 
  {
	  file: <UPLOADED_FILE>
  }, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
    }
  }
);
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "msg": "Upload has been made",
  "url": "https://brydge-register-upload.s3.amazonaws.com/seller/83281jnds8231nb"
}
```

This endpoints uploads a document to a Seller. This process is important for KYC. Only approved Sellers can receive and make payments.

<aside class=notice>
Use enctype="multipart/form-data"
</aside>

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/document/:documentType`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/document/:documentType`

#### Query Parameters

None.

## Approval

### Create an Approval Request
```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/seller/${sellerToken}/approval`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "message": "Seller has been approved",
  "approval": {
    "status": "pending",
    "created_at": "2020-11-27T19:12:04+00:00",
    "updated_at": "2020-11-27T19:12:04+00:00"
  }
}
```

Only approved sellers can receive and make payments on Brydge API. For a seller to be approved, the following information must be sent:

1. Seller's Data
2. Seller's Phone
3. Seller's Address
4. Seller's Owner
5. Seller's Documents
6. Seller's Owner Documents

Only with this information is it possible for a seller to be approved.

This endpoint requests the approval from KYC process for a new seller.

<aside class=notice>
This KYC process is very important to protect us against money laundry and some legal processes.
</aside>

<aside class=warning>
This process is <strong>asynchronous</strong> and it could take until <strong>3 business days to be approved or rejected</strong>.
</aside>

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/approval`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/approval`

#### Query Parameters

None.

## Bank Accounts
Sellers can withdrawal money since they receive payments. For that, they need to create bank accounts.

<aside class=warning>
The Seller must be approved to use this endpoint.
</aside>

### Create a Bank Account

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/seller/${sellerToken}/bank-account`, {
	bank_account: {
    token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
    id_bank: 1,
    agency_number: "1234",
    account_number: "254421-2",
    type: "checking",
	}
}, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "bank_account": {    
    "token": "cf157c3d-5295-4251-ba9d-04ffceeba971",
    "id_bank": 1,
    "agency_number": "1234",
    "account_number": "254421-2",
    "type": "checking",
    "active": true,
    "createdAt": "2020-01-30T13:28:47.000Z",
    "updatedAt": "2020-01-30T13:28:47.000Z"
  }
}
```

This endpoint creates a new Seller's bank account.

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/bank-account`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/bank-account`

#### Query Parameters

None.

### Get all Bank Accounts

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const bankAccountToken = "cf157c3d-5295-4251-ba9d-04ffceeba971";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
  `/v1/network/${networkToken}/seller/${sellerToken}/bank-accounts`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "bank_accounts": [
    {    
      "token": "cf157c3d-5295-4251-ba9d-04ffceeba971",
      "id_bank": 1,
      "agency_number": "1234",
      "account_number": "254421-2",
      "type": "checking",
      "active": true,
      "createdAt": "2020-01-30T13:28:47.000Z",
      "updatedAt": "2020-01-30T13:28:47.000Z"
    },
    ...
  ]
}
```

This endpoint takes information from all Seller's bank accounts.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/bank-accounts`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/bank-accounts`

### Delete Bank Account

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "7fc5e37f-5760-4848-bb9f-6a3e40977903";
const bankAccountToken = "cf157c3d-5295-4251-ba9d-04ffceeba971";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
  `/v1/network/${networkToken}/seller/${sellerToken}/bank-account/${bankAccountToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "msg": "Seller's bank account was deleted"
}
```

This endpoint deletes a Seller's bank account.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/bank-account/:bankAccountToken`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/seller/:sellerToken/bank-account/:bankAccountToken`