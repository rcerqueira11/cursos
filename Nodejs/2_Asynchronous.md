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


> over query limit `https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/questions/2956062`

### Pretty printing objects

- `JSON.stringify(body, undefined, 2)`
- the 3rd argument specify how many spaces you want to use for indentation