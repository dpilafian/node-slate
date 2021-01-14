# Banks

## Get All Banks
```javascript
const brydgeSandboxURL = "https://register.brydge.com.br";
const api = axios. axios.create({
    baseURL: brydgeSandboxURL,
});

const response = await axios.get(
  `/banks`, {
    headers: {
      api_key: <API_KEY_FROM_YOUR_COMPANY>
   }
});
```

> The above command returns JSON structured like this:

```json
{
  "success": true,
  "banks": [
    {    
      "id_bank": 1,
      "code": "341",
      "name": "Itaú",
    },
    ...
  ]
}
```

This endpoint takes information from all Banks.

#### HTTP Request

**Sandbox**
`GET https://register.brydge.com.br/banks`

**Production**
`GET https://register.brydge.io/banks`

#### Query Parameters

None.