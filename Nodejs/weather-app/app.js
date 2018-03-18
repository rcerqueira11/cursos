const request = require('request')

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=30%20lomabard%20street%20philadelphia',
    json: true
}, (error, response, body)=>{
    console.log(JSON.stringify(body, undefined, 2));
});