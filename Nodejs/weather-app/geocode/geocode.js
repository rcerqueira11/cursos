const apiKeys = require('../const/apiKeys');
const request = require('request');

const apiKey = apiKeys.geoApiKey
var geocodeAddress = (address, callback) => {
    let encodeAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${apiKey}`,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(error, undefined, 2));
        if (error) {
            callback('Unable to connect to google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, results = {
                'address': body.results[0].formatted_address,
                'latitude': body.results[0].geometry.location.lat,
                'longitude': body.results[0].geometry.location.lng,
            })
        }
    });
}

module.exports = {
    geocodeAddress, 
}