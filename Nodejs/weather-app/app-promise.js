const yargs = require('yargs');
const axios = require('axios');
const apiKeys = require('./const/apiKeys');

const geoApiKey = apiKeys.geoApiKey
const forecastApiKey = apiKeys.forecastApiKey;
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


var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${geoApiKey}`;

axios.get(geocodeUrl).then((response)=>{
    if (response.data.status  === 'ZERO_RESULTS'){
        throw new Error ('Unable to find that address');
    }

    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${forecastApiKey}/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log('Its currently',temperature);
    console.log('It feels like',apparentTemperature);
}).catch((e)=>{
    if(e.code === "ENOTFOUND"){
        console.log("Could not connect to API servers")
    } else {
        console.log(e.message);
    }

    if(!e.statusCode === 200){
        console.log("Unable to fetch weather");
    }
    // console.log(JSON.stringify(e,undefined,2));
})

