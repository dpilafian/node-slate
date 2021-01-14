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
    `/v1/network/${networkToken}/withdrawal/bank-account`, { 
    BankAccount: {
        token: bankAccountToken
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
    "token": "58e80bde-91f6-4441-a41f-7269a8b1ec09",
    "status": "pending",
    "amount": 25,
    "BankAccount": {
        "token": "df23c22d-8147-488c-b511-e67bf15e5655"
    },
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
`POST https://cashout.brydge.com.br/v1/network/:networkToken/withdrawal/bank-account`

**Production**
`POST https://cashout.brydge.io/v1/network/:networkToken/payment/bank-account`

#### Query Parameters

None.

### Get a Bank Transfer
This endpoints gets the bank transfer request.

```javascript
const networkToken = "9460246d-3c0e-4318-8874-5f7acca63efc";
const bankTransferToken = "df23c22d-8147-488c-b511-e67bf15e5655";
const brydgeSandboxURL = "https://cashout.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
    `/v1/network/${networkToken}/withdrawal/bank-account/${bankTransferToken}`, {
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
    "token": "58e80bde-91f6-4441-a41f-7269a8b1ec09",
    "status": "succeeded",
    "amount": 25,
    "BankAccount": {
        "token": "df23c22d-8147-488c-b511-e67bf15e5655"
    },
    "updatedAt": "2020-11-26T15:41:48.966Z",
    "createdAt": "2020-11-26T15:41:48.966Z"
  }
}
```

#### HTTP Request

**Sandbox**
`GET https://cashout.brydge.com.br/v1/network/:networkToken/withdrawal/bank-account/:withdrawalToken`

**Production**
`GET https://cashout.brydge.io/v1/network/:networkToken/payment/bank-account/:withdrawalToken`

#### Query Parameters

None.