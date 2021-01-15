# Withdrawals

## Bank Transfer

### Create a Bank Transfer

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const bankAccountToken = "df23c22d-8147-488c-b511-e67bf15e5655";
const brydgeSandboxURL = "https://cashout.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.post(
    `/v1/network/${networkToken}/bank-account/${bankAccountToken}/withdrawal`, {
    withdrawal: {
        amount: 25
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
  "withdrawal": {
    "BankAccount": {
      "token": "df23c22d-8147-488c-b511-e67bf15e5655"
    },
    "token": "58e80bde-91f6-4441-a41f-7269a8b1ec09",
    "status": "pending",
    "amount": 25,
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

This endpoint makes a bank transfer with the amount that has been passed.

<aside class=warning>
The seller or network <strong>must</strong> have balance to make the withdrawal.
</aside>

<aside class=warning>
The request could be totally processed in <strong>3 business days</strong>.
</aside>

#### HTTP Request

**Sandbox**
`POST https://cashout.brydge.com.br/v1/network/:networkToken/bank-account/:bankAccountToken/withdrawal`

**Production**
`POST https://cashout.brydge.io/v1/network/:networkToken/bank-account/:bankAccountToken/withdrawal`

#### Query Parameters

None.

### Get a Bank Transfer

This endpoints gets the bank transfer request.

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const withdrawalToken = "bcb85b17-542b-4d77-bf89-efb9cfb70146";
const brydgeSandboxURL = "https://cashout.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
    `/v1/network/${networkToken}/bank-account/withdrawal/${tokenWithdrawal}`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "withdrawal": {
    "BankAccount": {
      "token": "df23c22d-8147-488c-b511-e67bf15e5655"
    },
    "token": "58e80bde-91f6-4441-a41f-7269a8b1ec09",
    "status": "succeeded",
    "amount": 25,
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

#### HTTP Request

**Sandbox**
`GET https://cashout.brydge.com.br/v1/network/:networkToken/bank-account/withdrawal/:tokenWithdrawal`

**Production**
`GET https://cashout.brydge.io/v1/network/:networkToken/bank-account/withdrawal/:tokenWithdrawal`

#### Query Parameters

None.

## Networks

### Get all Banks Transfers

These endpoints get all bank transfer requests made by a network.

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const brydgeSandboxURL = "https://cashout.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
    `/v1/network/${networkToken}/company-network/bank-account/withdrawals`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "withdrawals": [
    {
      "withdrawal": {
        "BankAccount": {
          "token": "2f83dec532534001be98acf8dfec91d8"
        },
        "token": "f16410e7-8080-41f1-a3ee-dbb66c3dbefc",
        "status": "pending",
        "amount": 0.01,
        "created_at": "2021-01-13T20:05:38.000Z",
        "updated_at": "2021-01-13T20:05:38.000Z",
        "failed_at": null
      }
    },
    {
      "withdrawal": {
        "BankAccount": {
          "token": "267sdec532534001be98acf8dfec91d9"
        },
        "token": "62e77e05-a0aa-4082-86a3-e9404ab0ee5f",
        "status": "pending",
        "amount": 0.01,
        "created_at": "2021-01-15T16:09:13.000Z",
        "updated_at": "2021-01-15T16:09:13.000Z",
        "failed_at": null
      }
    }
  ]
}
```

#### HTTP Request

**Sandbox**
`GET https://cashout.brydge.com.br/v1/network/:networkToken/company-network/bank-account/withdrawals`

**Production**
`GET https://cashout.brydge.io/v1/network/:networkToken/company-network/bank-account/withdrawals`

#### Query Parameters

None.

## Sellers

### Get all Banks Transfers

These endpoints get all bank transfer requests made by a Seller.

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const sellerToken = "c48494f1-65e0-4d17-bc36-5abc7f874a2c";
const brydgeSandboxURL = "https://cashout.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
    `/v1/network/${networkToken}/seller/${sellerToken}/bank-account/withdrawals`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "withdrawals": [
    {
      "withdrawal": {
        "BankAccount": {
          "token": "0e0ce748-d99f-44c2-be5d-df2ce331b8bc"
        },
        "token": "c961c8e9-0fdd-4e5c-9406-3e147ea7ed96",
        "status": "pending",
        "amount": 0.01,
        "created_at": "2021-01-13T20:05:38.000Z",
        "updated_at": "2021-01-13T20:05:38.000Z",
        "failed_at": null
      }
    },
    {
      "withdrawal": {
        "BankAccount": {
          "token": "267sdec532534001be98acf8dfec91d9"
        },
        "token": "5c4a6889-f529-4128-999c-3122665f0293",
        "status": "pending",
        "amount": 0.01,
        "created_at": "2021-01-15T16:09:13.000Z",
        "updated_at": "2021-01-15T16:09:13.000Z",
        "failed_at": null
      }
    }
  ]
}
```

#### HTTP Request

**Sandbox**
`GET https://cashout.brydge.com.br/v1/network/:networkToken/seller/:sellerToken/bank-account/withdrawals`

**Production**
`GET https://cashout.brydge.io/v1/network/:networkToken/seller/:sellerToken/bank-account/withdrawals`

#### Query Parameters

None.
