# Customers

## Basic
To get a customer allowed to make payments, we should:

1. Create the customer with Basic Information
2. Provide all necessary information like Phones, Addresses
3. Then, request the approval of KYC process (synchronously)

Only approved Customers could make payments on Brydge Ecosystem. Here, we are dealing with the step 1.

### Create a Customer

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/customer`, {
	customer: {
        cpf: "41235235214",
        first_name: "Rafael",
        last_name: "Silva",
        email: "teste@gmail.com",
        birthdate: "1985-03-21"
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
  "customer": {
    "cpf": "41235235214",
    "token": "cf157c3d-5295-4251-ba9d-04ffceeba971",
    "first_name": "Rafael",
    "last_name": "Silva",
    "email": "teste@gmail.com",
    "birthdate": "1985-03-21T00:00:00.000Z",
    "createdAt": "2020-01-30T13:28:47.000Z",
    "updatedAt": "2020-01-30T13:28:47.000Z"
  }
}
```

This endpoint creates a new customer with the basic information.

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/customer`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/customer`

#### Query Parameters

None.

### Get a Customer by CPF

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const cpf = "41235235213";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/customer/${cpf}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "customer": {
    "cpf": "41235235214",
    "token": "cf157c3d-5295-4251-ba9d-04ffceeba971",
    "first_name": "Rafael",
    "last_name": "Silva",
    "email": "teste@gmail.com",
    "birthdate": "1985-03-21T00:00:00.000Z",
    "createdAt": "2020-01-30T13:28:47.000Z",
    "updatedAt": "2020-01-30T13:28:47.000Z"
  }
}
```

This endpoint takes information from a specific customer by CPF.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/customer/:cpf`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/customer/:cpf`

#### Query Parameters

None.

### Get a Customer by Token

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/customer/${customerToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "customer": {
    "cpf": "41235235214",
    "token": "cf157c3d-5295-4251-ba9d-04ffceeba971",
    "first_name": "Rafael",
    "last_name": "Silva",
    "email": "teste@gmail.com",
    "birthdate": "1985-03-21T00:00:00.000Z",
    "createdAt": "2020-01-30T13:28:47.000Z",
    "updatedAt": "2020-01-30T13:28:47.000Z"
  }
}
```

This endpoint takes information from a specific customer by Token.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1/network/:networkToken/customer/:customerToken`

**Production**
`GET https://register.brydge.io/v1/network/:networkToken/customer/:customerToken`

#### Query Parameters

None.

### Update a Customer

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.update(`/v1/network/${networkToken}/customer/${customerToken}`, {
	customer: {
        cpf: "41235235214",
        first_name: "Rafael",
        last_name: "Silva",
        email: "teste@gmail.com",
        birthdate: "1985-03-21"
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
  "msg": "Customer was updated"
}
```

This endpoint updates information for a specific customer.

#### HTTP Request

**Sandbox**
`PUT https://register.brydge.com.br/v1/network/:networkToken/customer/:customerToken`

**Production**
`PUT https://register.brydge.io/v1/network/:networkToken/customer/:customerToken`

#### Query Parameters

None.

### Delete a Customer

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.delete(`/v1/network/${networkToken}/customer/${customerToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "msg": "Customer was deleted"
}
```

This endpoint delete a specific customer.

#### HTTP Request

**Sandbox**
`DELETE https://register.brydge.com.br/v1/network/:networkToken/customer/:customerToken`

**Production**
`DELET https://register.brydge.io/v1/network/:networkToken/customer/:customerToken`

#### Query Parameters

None.

## Phones

### Create a Phone

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
  `/v1/network/${networkToken}/customer/${customerToken}/phone`, 
  {
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

This endpoint creates a new customer's phone.

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1//network/:networkToken/customer/:customerToken/phone`

**Production**
`POST https://register.brydge.io/v1//network/:networkToken/customer/:customerToken/phone`

#### Query Parameters

None.

### Get a Phone

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const phoneToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
  `/v1/network/${networkToken}/customer/${customerToken}/phone/${phoneToken}`, 
  {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "customer": {
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

This endpoint gets the customer's phone by Phone's Token.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1//network/:networkToken/customer/:customerToken/phone/:phoneToken`

**Production**
`GET https://register.brydge.io/v1//network/:networkToken/customer/:customerToken/phone/:phoneToken`

#### Query Parameters

None.

### Update a Phone

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const phoneToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.update(
  `/v1/network/${networkToken}/customer/${customerToken}/phone/${phoneToken}`, 
  {
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
  "success": true,
  "msg": "Customer's phone was updated"
}
```

This endpoint updates information for a specific customer's phone.

#### HTTP Request

**Sandbox**
`PUT https://register.brydge.com.br/v1/network/:networkToken/customer/:customerToken/phone/:phoneToken`

**Production**
`PUT https://register.brydge.io/v1/network/:networkToken/customer/:customerToken/phone/:phoneToken`

#### Query Parameters

None.

### Delete a Phone

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const phoneToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.delete(
  `/v1/network/${networkToken}/customer/${customerToken}/phone/${phoneToken}`, 
  {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "msg": "Customer's phone was deleted"
}
```

This endpoint deletes a specific customer's phone.

#### HTTP Request

**Sandbox**
`DELETE https://register.brydge.com.br/v1//network/:networkToken/customer/:customerToken/phone/:phoneToken`

**Production**
`DELETE https://register.brydge.io/v1//network/:networkToken/customer/:customerToken/phone/:phoneToken`

#### Query Parameters

None.

## Addresses

### Create a Address

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/customer/${customerToken}/address`, {
	address:{
			line1:"Av Americas, 500",
			line2:"Citta América",
			neighborhood:"Barra da Tijuca",
			city:"Rio de Janeiro",
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
  "customer": {
    "token": "d881ba21-92ad-4837-a672-4821ffc83b5c",
    "CompanyNetwork": {
      "token": "9460246d-3c0e-4318-8874-5f7acca63efc"
    },
    "street": "Av Americas, 500  Citta América",
    "neighborhood": "Barra da Tijuca",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "zip_code": "22845046",
    "country_code": "BR",
    "updatedAt": "2020-11-27T19:10:37.198Z",
    "createdAt": "2020-11-27T19:10:37.198Z"
  }
}
```

This endpoint creates a new customer's address.

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/customer/:customerToken/address`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/customer/:customerToken/address`

#### Query Parameters

None.

### Get a Address

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const addressToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/customer/${customerToken}/address/${addressToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "customer": {
    "token": "d881ba21-92ad-4837-a672-4821ffc83b5c",
    "CompanyNetwork": {
      "token": "9460246d-3c0e-4318-8874-5f7acca63efc"
    },
    "street": "Av Americas, 500  Citta América",
    "neighborhood": "Barra da Tijuca",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "zip_code": "22845046",
    "country_code": "BR",
    "updatedAt": "2020-11-27T19:10:37.198Z",
    "createdAt": "2020-11-27T19:10:37.198Z"
  }
}
```

This endpoint takes information from a specific customer's address.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1//network/:networkToken/customer/:customerToken/address/:addressToken`

**Production**
`GET https://register.brydge.io/v1//network/:networkToken/customer/:customerToken/address/:addressToken`

#### Query Parameters

None.

### Update a Address

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const addressToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.update(`/v1/network/${networkToken}/customer/${customerToken}/address/${addressToken}`, {
	address:{
			line1:"AAv Americas, 200",
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
  "msg": "Customer's address was updated"
}
```

This endpoint updates information for a specific customer's address.

#### HTTP Request

**Sandbox**
`PUT https://register.brydge.com.br/v1//network/:networkToken/customer/:customerToken/address/:addressToken`

**Production**
`PUT https://register.brydge.io/v1//network/:networkToken/customer/:customerToken/address/:addressToken`

#### Query Parameters

None.

## Approval

### Create an Approval Request
```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "d881ba21-92ad-4837-a672-4821ffc83b5c";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(`/v1/network/${networkToken}/customer/${customerToken}/approval`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "message": "Customer has been approved",
  "approval": {
    "status": "active",
    "created_at": "2020-11-27T19:12:04+00:00",
    "updated_at": "2020-11-27T19:12:04+00:00"
  }
}
```

Only approved customers can make payments on Brydge API. For a customer to be approved, the following information must be sent:

1. Customer's data
2. Phones
3. Address

Only with this information is it possible for a customer to be approved.

This endpoint requests the approval from KYC process for a new customer.

<aside class=notice>
This KYC process is very important to protect us against money laundry and some legal processes.
</aside>

<aside class=warning>
This process is <strong>synchronous</strong> and it's been rare to see an unapproved customer.
</aside>

#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/customer/:customerToken/approval`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/customer/:customerToken/approval`

#### Query Parameters

None.

## Credit Cards
Customers can make payments through their credit cards. We have the option to save the Credit Card information and use Card tokens. It's faster and safer.

<aside class=warning>
We follow all security protocols like PCI-DDS.
</aside>

### Create a Credit Card
This endpoint creates a new customer's credit card.

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
  `/v1/network/${networkToken}/customer/${customerToken}/credit-card`, 
  {
	  card: {
		  holder_name: "Test Name",
		  expiration_month: "02",
	  	expiration_year: "2028",
		  card_number: "123412341234",
		  security_code: "022"
    }
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
  "card": {
    "last4_digits": "************3308",
    "token": "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e",
    "card_brand": "MasterCard",
    "updatedAt": "2020-11-27T19:10:37.198Z",
    "createdAt": "2020-11-27T19:10:37.198Z"
  }
}
```

<aside class=warning>
The Customer must be approved to use this endpoint.
</aside>


#### HTTP Request

**Sandbox**
`POST https://register.brydge.com.br/v1/network/:networkToken/customer/:customerToken/credit-card`

**Production**
`POST https://register.brydge.io/v1/network/:networkToken/customer/:customerToken/credit-card`

#### Query Parameters

None.

### Get a Credit Card
```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const creditCardToken = "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
  `/v1/network/${networkToken}/customer/${customerToken}/credit-card/${creditCardToken}`, 
  {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "card": {
    "last4_digits": "************3308",
    "token": "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e",
    "card_brand": "MasterCard",
    "updatedAt": "2020-11-27T19:10:37.198Z",
    "createdAt": "2020-11-27T19:10:37.198Z"
  }
}
```

This endpoint takes a specific customer's credit card.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1//network/:networkToken/customer/:customerToken/credit-card/:creditCardToken`

**Production**
`GET https://register.brydge.io/v1//network/:networkToken/customer/:customerToken/credit-card/:creditCardToken`

#### Query Parameters

None.

### Get all Credit Cards

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/customer/${customerToken}/credit-cards/`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "cards": [
    {
      "last4_digits": "************3308",
      "token": "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e",
      "card_brand": "MasterCard",
      "updatedAt": "2020-11-27T19:10:37.198Z",
      "createdAt": "2020-11-27T19:10:37.198Z"
    },
    ...
  ]
}
```

This endpoint takes all customer's credit cards.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/v1//network/:networkToken/customer/:customerToken/credit-cards`

**Production**
`GET https://register.brydge.io/v1//network/:networkToken/customer/:customerToken/credit-cards`

#### Query Parameters

None.

### Delete a Credit Card
This endpoint deletes a specific customer's credit card.

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const customerToken = "382184a-382d-hsa3-4882-849c932jduw";
const creditCardToken = "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e";
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.delete(
  `/v1/network/${networkToken}/customer/${customerToken}/credit-card/${creditCardToken}`, 
  {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "msg": "Customer's credit card was deleted"
}
```

<aside class=warning>
The Customer must be approved to use this endpoint.
</aside>

#### HTTP Request

**Sandbox**
`DELETE https://register.brydge.com.br/v1//network/:networkToken/customer/:customerToken/credit-card/:creditCardToken`

**Production**
`DELETE https://register.brydge.io/v1//network/:networkToken/customer/:customerToken/credit-card/:creditCardToken`

#### Query Parameters

None.