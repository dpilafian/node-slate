# Balance

## Networks
Since the Networks could receive money from a Payment Split, Networks should have a balance and their statements.

### Get Balance

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://balance.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/balance/company-network`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "balance": 0
}
```

This endpoint retrieves the balance from the Network.

#### HTTP Request

**Sandbox**
`GET https://balance.brydge.com.br/v1/network/${networkToken}/balance/company-network`

**Production**
`GET https://balance.brydge.io/v1/network/${networkToken}/balance/company-network`

#### Query Parameters

None.

### Get Statements

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://balance.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/statements/company-network`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "statements": [
    {
      "amount": 4.8,
      "created_at": "2020-11-19T20:31:54.000Z",
      "Source": {
        "name": "Credit Card"
      },
      "Sender": {
        "name": "Michelle Silva"
      },
      "Receiver": {
        "name": "Brydge"
      }
    },
    ...
  ]
}
```

This endpoint gets the statements from the Network.

#### HTTP Request

**Sandbox**
`GET https://balance.brydge.com.br/v1/network/${networkToken}/statements/company-network`

**Production**
`GET https://balance.brydge.io/v1/network/${networkToken}/statements/company-network`

#### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
page | 1 | The current page that you want from the Statements List
limit | 20 | How many statements' rows you want to receive per page

### Get Detailed Statements

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://balance.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/statements/company-network/detailed`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "statements": [
    {
      "amount": 4.8,
      "created_at": "2020-11-19T20:31:54.000Z",
      "Source": {
        "name": "Credit Card"
      },
      "Sender": {
        "name": "Michelle Silva"
      },
      "Receiver": {
        "name": "Brydge"
      },
      "Payment": {
        "amount": 25,
        "transaction_id": "b2d8a8f52e0847168bde818632a0aba2",
        "transaction_status": "succeeded",
        "receivers": [
          {
            "type": "seller",
            "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
            "amount": 20,
            "percentage": 0,
            "finalAmount": 19.2
          },
          {
            "type": "company_network",
            "token": "9460246d-3c0e-4318-8874-5f7acca63efb",
            "amount": 5,
            "percentage": 0,
            "finalAmount": 4.8
          }
        ],
        "created_at": "2020-11-19T20:31:54.000Z",
        "updated_at": "2020-11-19T20:31:54.000Z",
        "Customer": {
          "token": "6e790424-9ccb-46d5-a438-da224048c895",
          "first_name": "Michelle",
          "last_name": "Silva",
          "email": "michelle.zooper@zoop.com.br"
        },
        "Seller": {
          "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
          "name": "Brdyge LTDA",
          "business_name": "Brydge Paulista",
          "email": "paulista@brydge.com.br"
        },
        "Card": {
          "last4_digits": "************3308",
          "token": "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e",
          "card_brand": "MasterCard"
        },
        "fees": 1
      }
    },
    ...
  ]
}
```

This endpoint gets the detailed statements from the Network.

#### HTTP Request

**Sandbox**
`GET https://balance.brydge.com.br/v1/network/${networkToken}/statements/company-network`

**Production**
`GET https://balance.brydge.io/v1/network/${networkToken}/statements/company-network`

#### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
page | 1 | The current page that you want from the Statements List
limit | 20 | How many statements' rows you want to receive per page

## Sellers
Since the Sellers will receive payments or could receive money from a Payment Split, Sellers should have a balance and their statements.

### Get Balance

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "e3eebad7-882f-4ae3-86e0-60a679ea7e0b";
const brydgeSandboxURL = "https://balance.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/balance/seller/${sellerToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "balance": 0
}
```

This endpoint retrieves the balance from the Seller.

#### HTTP Request

**Sandbox**
`GET https://balance.brydge.com.br/v1/network/${networkToken}/balance/seller/${sellerToken}`

**Production**
`GET https://balance.brydge.io/v1/network/${networkToken}/balance/seller/${sellerToken}`

#### Query Parameters

None.

### Get Statements

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "e3eebad7-882f-4ae3-86e0-60a679ea7e0b";
const brydgeSandboxURL = "https://balance.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/statements/seller/${sellerToken}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "statements": [
    {
      "amount": 4.8,
      "created_at": "2020-11-19T20:31:54.000Z",
      "Source": {
        "name": "Credit Card"
      },
      "Sender": {
        "name": "Michelle Silva"
      },
      "Receiver": {
        "name": "Brydge"
      }
    },
    ...
  ]
}
```

This endpoint gets the statements from the Seller.

#### HTTP Request

**Sandbox**
`GET https://balance.brydge.com.br/v1/network/:networkToken/statements/seller/:sellerToken`

**Production**
`GET https://balance.brydge.io/v1/network/:networkToken/statements/seller/:sellerToken`

#### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
page | 1 | The current page that you want from the Statements List
limit | 20 | How many statements' rows you want to receive per page

### Get Detailed Statements

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "e3eebad7-882f-4ae3-86e0-60a679ea7e0b";
const brydgeSandboxURL = "https://balance.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(`/v1/network/${networkToken}/statements/seller/${sellerToken}/detailed`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "statements": [
    {
      "amount": 4.8,
      "created_at": "2020-11-19T20:31:54.000Z",
      "Source": {
        "name": "Credit Card"
      },
      "Sender": {
        "name": "Michelle Silva"
      },
      "Receiver": {
        "name": "Brydge"
      },
      "Payment": {
        "amount": 25,
        "transaction_id": "b2d8a8f52e0847168bde818632a0aba2",
        "transaction_status": "succeeded",
        "receivers": [
          {
            "type": "seller",
            "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
            "amount": 20,
            "percentage": 0,
            "finalAmount": 19.2
          },
          {
            "type": "company_network",
            "token": "9460246d-3c0e-4318-8874-5f7acca63efb",
            "amount": 5,
            "percentage": 0,
            "finalAmount": 4.8
          }
        ],
        "created_at": "2020-11-19T20:31:54.000Z",
        "updated_at": "2020-11-19T20:31:54.000Z",
        "Customer": {
          "token": "6e790424-9ccb-46d5-a438-da224048c895",
          "first_name": "Michelle",
          "last_name": "Silva",
          "email": "michelle.zooper@zoop.com.br"
        },
        "Seller": {
          "token": "e84ad069-ff20-4952-bf8d-40e9da9e1d59",
          "name": "Brdyge LTDA",
          "business_name": "Brydge Paulista",
          "email": "paulista@brydge.com.br"
        },
        "Card": {
          "last4_digits": "************3308",
          "token": "b44a8cd6-dd42-491e-9f52-671ef5d1ac2e",
          "card_brand": "MasterCard"
        },
        "fees": 1
      }
    },
    ...
  ]
}
```

This endpoint gets the detailed statements from the Seller.

#### HTTP Request

**Sandbox**
`GET https://balance.brydge.com.br/v1/network/:networkToken/statements/seller/:sellerToken/detailed`

**Production**
`GET https://balance.brydge.io/v1/network/:networkToken/statements/seller/:sellerToken/detailed`

#### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
page | 1 | The current page that you want from the Statements List
limit | 20 | How many statements' rows you want to receive per page