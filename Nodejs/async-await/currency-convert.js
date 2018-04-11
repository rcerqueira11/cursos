//USD CAD 23
// 23 USD worth 28 CAD, You can spend these in the following countries: 
// https://fixer.io/
//http://restcountries.eu/#api-endpoints-currency
const apiKeys = require('./const/apiKeys')
const axios = require('axios');
const fixerApikey = apiKeys.fixerApiKey
let baseSymbol = 'USD';
let currencyCode = 'cad';
let urlFixer = `https://data.fixer.io/api/latest?access_key=${fixerApikey}&base=${baseSymbol}`
let urlCurrency = `https://restcountries.eu/rest/v2/currency/${currencyCode}`


const getExchangeRate = (from, to) => {
    return axios.get(`https://data.fixer.io/api/latest?base=${from}&access_key=ffd934ce249b66bb1b5c0896212d3117`).then((response) => {
        return response.data.rates[to];
    })
}

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
        return response.data.map((country) => country.name)
    })
}
// getExchangeRate('EUR','CAD').then(rate=>console.log(rate));
// getCountries('CAD').then(countries=>console.log(countries));

const converCurrency = (from, to, amount) => {
    let countries;
    return getCountries(to).then((tempCountries) => {
        countries = tempCountries;
        return getExchangeRate(from, to);

    }).then((rate) => {
        const exchangeAmount = amount * rate;
        `${amount} ${from} worth ${exchangeAmount} ${to}, You can spend these in the following countries ${to} can be used in the following countries: ${countries.join(',')}`
    })
}
const converCurrencyAlt = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    const exchangeAmount = amount * rate;
    return `${amount} ${from} worth ${exchangeAmount} ${to}, You can spend these in the following countries ${to} can be used in the following countries: ${countries.join(',')}`
}


converCurrencyAlt('CAD', 'USD', 28).then(status=>{
    console.log(status)
});
