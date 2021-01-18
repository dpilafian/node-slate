# Payments

## Credit Card

### Value of Installments Plan

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios.axios.create({
  baseURL: brydgeSandboxURL,
});

const response = await axios.get(
    `/v1/network/${networkToken}/payment/credit-card/installments/plan`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "installments_plan": {
    "final_amount": 104.69,
    "installments": 2,
    "amount_per_installment": 52.34
  }
}
```

#### HTTP Request

**Sandbox**
`GET https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card/installments/plan`

**Production**
`GET https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card/installments/plan`

#### Query Parameters

None.

### Payment by Tokens

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
    `/v1/network/${networkToken}/payment/credit-card`, {
    Payment: {
		Card: {
		    token: "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e"
		},
		amount: 25,
		currency: "BRL",
		description: "Pagamento de ticket: { number: 123456 }"
 	},
	Customer: {
		token: "6e790424-9ccb-46d5-a438-da224048c895"
  	},
  	Seller: {
		token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59"
	},
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
  "payment": {
    "amount": 25,
    "fees": 1,
    "installments": 1,
    "transaction_id": "4a9b7105acb64761b7167b085372451e",
    "transaction_status": "succeeded",
    "description": "Pagamento de ticket: { number: 123456 }",
    "client_statement_description": "BRASIL PARK PAULISTA",
    "receivers": [
      {
        "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
        "type": "seller",
        "amount": 20,
        "percentage": 0,
        "finalAmount": 19.2
      },
      {
        "token": "9460246d-3c0e-4318-8874-5f7acca63efb",
        "type": "company_network",
        "amount": 5,
        "percentage": 0,
        "finalAmount": 4.8
      }
    ],
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

Every entity created by Brydge API generates a token. It's safer to work with tokens instead of ids. In this endpoint, we use the tokens from the entities generated previously by the client to **make payments**.

#### HTTP Request

**Sandbox**
`POST https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card`

**Production**
`POST https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card`

#### Query Parameters

None.

### Checkout Payment

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
    `/v1/network/${networkToken}/payment/checkout`, {
    Payment: {
		Card: {
		  holder_name: "Testing Name",
		  expiration_month "02",
		  expiration_year: "2028",
		  card_numbe: "123412341234",
		  security_code: "022",
		},
		amount: 25,
		currency: "BRL",
		description: "Pagamento de ticket: { number: 123456 }"
 	},
	Customer: {
    cpf: "41235235214",
    first_name: "Rafael",
    last_name: "Silva",
    email: "teste@gmail.com",
    birthdate: "1985-03-21T00:00:00.000Z",
    phone: {
        area_code: 13,
        country_code:55,
        number: "2583564"
    },
    address: {
        line1: "Av Americas, 500",
        line2: "Citta América",
        neighborhood: "Barra da Tijuca",
        city: "Rio de Janeiro",
        state: "RJ",
        zip_code: "22845046",
        country_code: "BR"
    }
  	},
  	Seller: {
		  token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59"
	  },
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
  "payment": {
    "amount": 25,
    "fees": 1,
    "installments": 1,
    "transaction_id": "4a9b7105acb64761b7167b085372451e",
    "transaction_status": "succeeded",
    "description": "Pagamento de ticket: { number: 123456 }",
    "client_statement_description": "BRASIL PARK PAULISTA",
    "receivers": [
      {
        "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
        "type": "seller",
        "amount": 20,
        "percentage": 0,
        "finalAmount": 19.2
      },
      {
        "token": "9460246d-3c0e-4318-8874-5f7acca63efb",
        "type": "company_network",
        "amount": 5,
        "percentage": 0,
        "finalAmount": 4.8
      }
    ],
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

This endpoint makes a payment with a Credit Card and it doesn't require a Customer Token or Card Token, it requests all the data from both entities at the same endpoint.

<aside class=notice>
Don't forget that we need a Seller Token. That means that the Seller that will receive the payment should have passed through our KYC process, especially to avoid legal problems and money laundry.
</aside>

#### HTTP Request

**Sandbox**
`POST https://cashin.brydge.com.br/v1/network/:networkToken/payment/checkout`

**Production**
`POST https://cashin.brydge.io/v1/network/:networkToken/payment/checkout`

#### Query Parameters

None.

### Payment with Split - Amount

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
    `/v1/network/${networkToken}/payment/credit-card`, {
    Payment: {
		Card: {
		    token: "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e"
		},
		amount: 25,
		currency: "BRL",
		description: "Pagamento de ticket: { number: 123456 }"
 	},
	Customer: {
		token: "6e790424-9ccb-46d5-a438-da224048c895"
  	},
  	Seller: {
		token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59"
    },
    Receivers: [
        {
		  token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
          type: seller,
          amount: 20
        },
        {
          token: "9460246d-3c0e-4318-8874-5f7acca63efb",
          type: company_network,
          amount: 5
        }
    ]
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
  "payment": {
    "amount": 25,
    "fees": 1,
    "installments": 1,
    "transaction_id": "4a9b7105acb64761b7167b085372451e",
    "transaction_status": "succeeded",
    "description": "Pagamento de ticket: { number: 123456 }",
    "client_statement_description": "BRASIL PARK PAULISTA",
    "receivers": [
      {
        "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
        "type": "seller",
        "amount": 20,
        "percentage": 0,
        "finalAmount": 19.2
      },
      {
        "token": "9460246d-3c0e-4318-8874-5f7acca63efb",
        "type": "company_network",
        "amount": 5,
        "percentage": 0,
        "finalAmount": 4.8
      }
    ],
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

This endpoint makes a payment and split the money to multiple digital accounts like multiple sellers and networks.

<aside class=notice>
Brydge will charge fees for every payment that has been made on Brydge API. However, Brydge API calculates the proper amounts that should be split right after Brydge has charged the fees.

Ex: 25 R$ split to two Sellers. Brydge got R$ 1. Now we have R$ 24. But, the split rules say:

Receivers: [
{
token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
type: seller,
amount: 20
},
{
token: "9460246d-3c0e-4318-8874-5f7acca63efb",
type: company_network,
amount: 5
}
]

Here, we cannot split R$ 20 to Seller 1 and R$ 5 to Seller 2. Then, Brydge API gets the percentages from amounts and split properly. The final split is:

Seller 1 -> R$ 19.20
Seller 2 -> R$ 4.80
= R$ 24

</aside>

<aside class=warning>
To not split the paid amount, just remove the attribute "Receivers"
</aside>

#### HTTP Request

**Sandbox**
`POST https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card`

**Production**
`POST https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card`

#### Query Parameters

None.

### Payment with Split - Percentage

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
    `/v1/network/${networkToken}/payment/credit-card`, {
    Payment: {
		Card: {
		    token: "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e"
		},
		amount: 25,
		currency: "BRL",
		description: "Pagamento de ticket: { number: 123456 }"
 	},
	Customer: {
		token: "6e790424-9ccb-46d5-a438-da224048c895"
  	},
  	Seller: {
		token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59"
    },
    Receivers: [
        {
		  token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
          type: seller,
          percentage: 80
        },
        {
          token: "9460246d-3c0e-4318-8874-5f7acca63efb",
          type: company_network,
          percentage: 20
        }
    ]
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
  "payment": {
    "amount": 25,
    "fees": 1,
    "installments": 1,
    "transaction_id": "4a9b7105acb64761b7167b085372451e",
    "transaction_status": "succeeded",
    "description": "Pagamento de ticket: { number: 123456 }",
    "client_statement_description": "BRASIL PARK PAULISTA",
    "receivers": [
      {
        "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
        "type": "seller",
        "amount": 0,
        "percentage": 80,
        "finalAmount": 19.2
      },
      {
        "token": "9460246d-3c0e-4318-8874-5f7acca63efb",
        "type": "company_network",
        "amount": 0,
        "percentage": 20,
        "finalAmount": 4.8
      }
    ],
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

This endpoint makes a payment and split the money to multiple digital accounts like multiple sellers and networks. In this endpoint we can use percentages instead of amounts.

#### HTTP Request

**Sandbox**
`POST https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card`

**Production**
`POST https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card`

#### Query Parameters

None.

### Payment with Installments

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
    `/v1/network/${networkToken}/payment/credit-card`, {
    Payment: {
		Card: {
		    token: "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e"
		},
		amount: 25,
		currency: "BRL",
        description: "Pagamento de ticket: { number: 123456 }",
        installments: 12,
 	},
	Customer: {
		token: "6e790424-9ccb-46d5-a438-da224048c895"
  	},
  Seller: {
		token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59"
	},
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
  "payment": {
    "amount": 25,
    "fees": 1,
    "installments": 12,
    "transaction_id": "4a9b7105acb64761b7167b085372451e",
    "transaction_status": "succeeded",
    "description": "Pagamento de ticket: { number: 123456 }",
    "client_statement_description": "BRASIL PARK PAULISTA",
    "receivers": [
      {
        "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
        "type": "seller",
        "amount": 20,
        "percentage": 0,
        "finalAmount": 19.2
      },
      {
        "token": "9460246d-3c0e-4318-8874-5f7acca63efb",
        "type": "company_network",
        "amount": 5,
        "percentage": 0,
        "finalAmount": 4.8
      }
    ],
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

You can make payments with installments. It's easy!

#### HTTP Request

**Sandbox**
`POST https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card`

**Production**
`POST https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card`

#### Query Parameters

None.

### Payment with Subscriptions

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
    `/v1/network/${networkToken}/payment/credit-card`, {
    Payment: {
		Card: {
		    token: "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e"
		},
		amount: 25,
		currency: "BRL",
		description: "Pagamento de ticket: { number: 123456 }",
        subscription: "Weekly"
 	},
	Customer: {
		token: "6e790424-9ccb-46d5-a438-da224048c895"
  	},
  	Seller: {
		token: "e84ad069-ff20-4952-bf8d-40e9da9e1d59"
	},
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
  "payment": {
    "amount": 25,
    "fees": 1,
    "installments": 1,
    "Subscription": {
      "token": "4820807c-d0ac-4176-ac08-dc8ea16c6e3f",
      "description": "Weekly",
      "next_billing_date": "2021-01-25"
    },
    "transaction_id": "4a9b7105acb64761b7167b085372451e",
    "transaction_status": "succeeded",
    "description": "Pagamento de ticket: { number: 123456 }",
    "client_statement_description": "BRASIL PARK PAULISTA",
    "receivers": [
      {
        "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
        "type": "seller",
        "amount": 20,
        "percentage": 0,
        "finalAmount": 19.2
      },
      {
        "token": "9460246d-3c0e-4318-8874-5f7acca63efb",
        "type": "company_network",
        "amount": 5,
        "percentage": 0,
        "finalAmount": 4.8
      }
    ],
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

You can create subscriptions. To do that, it's pretty easy! When we set a subscription, recurrently the client will be charged the same amount for the same service in the next period.

| Subscription Periods | Description            |
| -------------------- | ---------------------- |
| Weekly               | Payment date + 7 days  |
| Monthly              | Payment date + 1 month |
| Anually              | Payment date + 1 year  |

#### HTTP Request

**Sandbox**
`POST https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card`

**Production**
`POST https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card`

#### Query Parameters

None.

### Get Subscription

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const subscriptionToken = "7246623f-4c38-461c-bb8f-230e9eb57a43";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios.axios.create({
  baseURL: brydgeSandboxURL,
});

const response = await axios.get(
    `/v1/network/${networkToken}/payment/credit-card/subscription/${subscriptionToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "sucess": true,
  "subscription": {
    "token": "7246623f-4c38-461c-bb8f-230e9eb57a43",
    "first_billing_date": "2020-12-17",
    "next_billing_date": "2020-12-25",
    "amount": 3,
    "description": "Weekly plan",
    "finished_at": null,
    "active": true,
    "createdAt": "2020-12-25T03:00:00.000Z",
    "updatedAt": null
  }
}
```

#### HTTP Request

**Sandbox**
`GET https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card/subscription/:subscriptionToken`

**Production**
`GET https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card/subscription/:subscriptionToken`

#### Query Parameters

None.

### Cancel Subscription

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const subscriptionToken = "7246623f-4c38-461c-bb8f-230e9eb57a43";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});
const response = await axios.delete(`/v1/network/${networkToken}/credit-card/subscription/${subscriptionToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "message": "Canceled Subscription"
}
```

This endpoint cancels a specific subscription.

#### HTTP Request

**Sandbox**
`DELETE https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card/subscription/:subscriptionToken`

**Production**
`DELETE https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card/subscription/:subscriptionToken`

#### Query Parameters

None.

## Company Network

### Get All Subscriptions

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashin.brydge.com.br";
const api = axios.axios.create({
  baseURL: brydgeSandboxURL,
});

const response = await axios.get(
    `/v1/network/${networkToken}/payment/credit-card/subscriptions`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "sucess": true,
  "subscription": [
    {
      "token": "7246623f-4c38-461c-bb8f-230e9eb57a43",
      "first_billing_date": "2020-12-17",
      "next_billing_date": "2020-12-25",
      "amount": 3,
      "description": "Weekly Plan",
      "finished_at": null,
      "active": true,
      "createdAt": "2020-12-25T03:00:00.000Z",
      "updatedAt": null
    },
    {
      "token": "1286623f-4c38-461c-bb8f-230e9eb57275",
      "first_billing_date": "2020-12-12",
      "next_billing_date": "2021-01-12",
      "amount": 12,
      "description": "Monthly Plan",
      "finished_at": null,
      "active": true,
      "createdAt": "2020-12-25T03:00:00.000Z",
      "updatedAt": null
    }
  ]
}
```

#### HTTP Request

**Sandbox**
`GET https://cashin.brydge.com.br/v1/network/:networkToken/payment/credit-card/subscriptions`

**Production**
`GET https://cashin.brydge.io/v1/network/:networkToken/payment/credit-card/subscriptions`

#### Query Parameters

None.
