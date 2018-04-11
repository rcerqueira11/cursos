const apiKeys = require('../const/apiKeys');
const request = require('request');

const apiKey = apiKeys.geoApiKey

var geocodeAdress = (address) => {
    return new Promise((resolve, reject) => {
        let encodeAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${apiKey}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else if (body.status === 'OK') {
                resolve(results = {
                    'address': body.results[0].formatted_address,
                    'latitude': body.results[0].geometry.location.lat,
                    'longitude': body.results[0].geometry.location.lng,
                })
            }
        });
    })
}

geocodeAdress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));

}, (errorMessage) => {
    console.log(errorMessage);
})