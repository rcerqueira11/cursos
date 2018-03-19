const apiKeys = require('../const/apiKeys');
const request = require('request');

let key= apiKeys.forecastApiKey;

var getWeather = (latitude, longitude, callback) => {

    request({
        url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
            })
        } else {
            callback("Unable to fetch weather");
        }
    })
} 

module.exports = {
    getWeather,
}