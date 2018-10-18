## Axios ways

### Axios Global
```js
/// axiosGlobal
const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: remote.getGlobal('url_reference'),

})
module.exports = axiosInstance;
/// axiosGlobal


var axiosInstance = require('../js/axiosGlobal');
var headers = { 'Content-Type': 'application/x-www-form-urlencoded'}
var loginURL = '/api/login'

  axiosInstance({
    method:'POST',
    url: loginURL,
    params: data,
    headers: headers
    })
    .then(...)


```

### axios require

```js
var axios = require('axios')
var loginURL = remote.getGlobal('url_reference') + '/api/login'
var headers = { 'Content-Type': 'application/x-www-form-urlencoded'}

axios.post(loginURL, data, headers).
  then(...)
```