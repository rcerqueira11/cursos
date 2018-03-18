const request = require('request');
const yargs = require('yargs');
const apiKeys = require('./const/apiKeys');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);
let encodeAddress = encodeURIComponent(argv.address);
const apiKey = apiKeys.apiKey

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${apiKey}`,
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(error, undefined, 2));
    if (error) {
        console.log('Unable to connect to google servers');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address');
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lat: ${body.results[0].geometry.location.lat}`);
        console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }
});