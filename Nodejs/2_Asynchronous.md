## CallStack and EventLoop  

### Call Stack

- keeps track of program execution 
    - functions
    - statements that are fired

- you can add somthing to the top or remove something from the top

- first run the main function

- once the statement is done is removed

- when the programs return, it takes out the main function from the callstack and the program has finish

- when you call a functions it gets added at the top of the call stack 
- when you return from a function it gets remove from the call stack 
- return from a function goes to the callstack

- setTimeout is added to the node APIs, taked out from the callstack a start counting in the node Apis

- when it finish in the node APIs, it will sen the callback to the callback queue

### Event loop

- check if the callstack is empty and the can move thing from the callback queue

- add the callback to the callstack and start proccesing it

## Callback

- Is a function that get pass as an argument to another function and it gets executed after some event happend

```js 

setTimeout(()=> {
    console.log('Isit')
},2000)

setTimeout(()=> {},event)

```

- event can be a data base query, http request, etc
- you want a call back function to do somthing with that data

- la funcion es definida por mi y en la otra funcion simplemente llamo a esa funcion con los parametros necesario pero no es definida por mi 


```js
//callback: nombre generico de la funcion
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };
    callback(user);//llamo a la funcion generica
};

// la funcion es definida por mi
getUser(31, (userObject)=>{
    console.log(userObject);
});
```

- url: `https://maps.googleapis.com/maps/api/geocode/json?address=30%20lomabard%20street%20philadelphia`
> JSON VIEW to see the json in  browser better


### **request**
- to make http requests

```js
const request = require('request');

request(options, callback(error, response, body))
```

- options:
    - url
    - json: true = convert the response to js object

- body
    - part of http
    - data that comes back after a request to a website 
    - core data that comes back from the server

- error 
    - what metters most is the `code` which is the error code from the server

> over query limit `https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/questions/2956062`

### Pretty printing objects

- `JSON.stringify(body, undefined, 2)`
- the 3rd argument specify how many spaces you want to use for indentation

- going in json fields ` body.results[0].geometry.location.lng`

### Encoding user input
- npm install yargs
- use yargs.options
    - string: true tell that parse the input as an string even if its a number
    - .argv: takes all the configuration runs it throught our arguments, and store the result in the argv variable
    - .alias set an alias take two argunments the one that you want to make an alias for and the alias 
    `.alias('help','h')`

### Encode Decode

#### Encode

`encodeURIComponent()`
- takes one argument the one we are gonna encode and set the special encode characters

`decodeURIComponent()`
- takes one argument the one we are gonna decode and returns the special encode characters to the original values

## Handle Errors

- Unable to connect to the api
- Does not have a result for the api (will be in the response object in the body)

```js
 (error, response, body) => {
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

```

## Abstracting Callbacks

- the error handler should not be in app.js
- the logic of the http request should not be in app.js

```js
const geocode = require('./geocode/geocode')
geocode.geocodeAddress(argv.address);
```

- callback logic 
- in app.js
```js
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results,undefined,2))
    }
});

```
- gecode.js
```js
var geocodeAddress = (address, callback) => {
    let encodeAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${apiKey}`,
        json: true
    }, (error, response, body) => {
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
```
- we specify `undefined` to the field that we are not getting

## Intro to Promises

- solve problem with multiple async functions

- the callback funtions get two arguments resolve and reject

- resolve get the actual data that the user wanted
    - u can pass just one argument to the resolve, if needed more use an object

- to do something we need to call `.then()` and you can define a callback funciton for both success cases and error cases

- the first function is gonna get call ONLY if the promise is fullfiled, and it will be called with the value pass to resolve

- the second argument let us handle errors in our promise

```js
somePromise.then(callbackResolver(){}, callbackReject(){})
```

- you can either resolve or reject you CANT do both of them at the same time, either twice or change later their value

```js
//promise example

var somePromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        // resolve('It worked')
        reject('Unable to fulfill promise');
    }, 2500);
})

somePromise.then((message)=>{
    console.log(message);
}, (errorMessage)=>{
    console.log('error:', errorMessage)
})

```

- when a promise is waiting to be resolve o rejected is on an state called `pending`

- and when the promise finish is state is `settle`

- with promises you dont have to worry about calling a callback twice 


## Advance Promises

### **Pass Arguments**
- to the promise using a function

```js
var asyncAdd = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject("Both parameters must be numbers");
            }
        }, 1500);
    })
}

asyncAdd(5,7).then((res)=>{
    //resolve case
    console.log(res);
},(errorMessage)=>{
    // reject case
    console.log(errorMessage);
})
```

### **Chain promises**

- we can return in the resolve case a new promise
- and the new `.then()` will be called afte the close parentesis of our previous then

```js
asyncAdd(5,'7').then((res)=>{
    //resolve case
    console.log(res);
    return asyncAdd(res,33);
},(errorMessage)=>{
    // reject case
    console.log(errorMessage);
}).then((res)=>{
    console.log('result',res);
},(errorMessage)=>{
    console.log('second',errorMessage);
})

```

- this have a problem when the first promise fails

- so we change the error handler to a catch

```js
asyncAdd(5,'7').then((res)=>{
    //resolve case
    console.log(res);
    return asyncAdd(res,33);
}).then((res)=>{
    console.log('result',res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
})

```

### Promises with request

```js

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
```

### Promises with AXIOS library

- [DOCS](https://www.npmjs.com/package/axios)
- axios can implement promises 
- instead of callback implement promises
- we do not have to wrap our calls in another function

```js
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

```