//Dynamic import arent supporte by ES6,
// so using require instead of import
if (process.env.NODE_ENV === 'production'){
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}