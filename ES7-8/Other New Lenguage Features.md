## Introduction

- Object.values  : iterate over objects
- Object.entries : iterate over objects
- Object.getOwnPropertyDescriptor(s) : get metadata of a property of an object
- string.prototype.padStart :allows u to pad one or more charactes before the string
- string.prototype.padEnd :allows u to pad one or more charactes after the string
- Trailing commas: know are in many cases legal in literals and parameter list


## Object.values

- Find out is an object have certain properties or functions, before to pull a value or execute the function for example
- when you iterates over an object it will iterates over all names that are members of an object

```javascript
let ride = {
    name: "The Simpsons",
    excitementLevel:100,
    capacity: 20,
    get go(){
        console.log("go");
    }
};

for (let key in ride){
    console.log(key);
}
// return the name of the propertys and functions
//name
//excitementLevel
//capacity
//go

//to get the value of the members you can access them as an array

for (let key in ride){
    console.log(key);
    console.log(ride[key]);
}
//will count any member of a prototype you might not want


//to get the objects keys without the prototype you can use a function from es5 return array of values 

console.log(Object.keys(ride));
[ 'name', 'excitementLevel', 'capacity', 'go' ]

// And you can get the values as an array as well
console.log(Object.values(ride));
go
[ 'The Simpsons', 100, 20, undefined ]

```

## Objects.entries

- obtain the keys and the values of one go

```javascript

let ride = {
    name: "The Simpsons",
    excitementLevel:100,
    capacity: 20,
    get go(){
        console.log("go");
    }
};


console.log(Object.entries(ride));

// return array of an array 
[[key,value],[key,value],[key,value],[key,value]]

for (let keyvalue of Object.entries(ride)){
    console.log(keyValue);
}

//return
[ 'name', 'The Simpsons' ]
[ 'excitementLevel', 100 ]
[ 'capacity', 20 ]
[ 'go', undefined ]

//template literal

for (let [key,value] of Object.entries(ride)){
    console.log(`key: ${key}  va;ue: ${value}`);
}

//return

key: name   value: The Simpsons
key: excitementLevel   value: 100
key: capacity   value: 20
key: go   value: undefined

//Easier with map

var map = new Map(Object.entries(ride))
map.forEach((value,key) => {
    console.log(`key: ${key}  va;ue: ${value}`);
});

```

## Object.getOwnPropertyDescriptors

- get descriptor objects for each of the own properties 
- own means not objects prototype  
- other way to do reflection on objects
- some cases enable you to write more generic code

```javascript
let ride = {
    name: "The Simpsons",
    excitementLevel:100,
    capacity: 20,
    get go(){
        console.log("go");
    }
};


let descriptors = Object.getOwnPropertyDescriptor(ride);
console.log(descriptors);

// response
{ name: 
   { value: 'The Simpsons',
     writable: true,
     enumerable: true,
     configurable: true },
  excitementLevel: 
   { value: 100,
     writable: true,
     enumerable: true,
     configurable: true },
  capacity: 
   { value: 20,
     writable: true,
     enumerable: true,
     configurable: true },
  go: 
   { get: [Function: get go],
     set: undefined,
     enumerable: true,
     configurable: true } }
```

### Metadata

#### Field
```js
capacity{
    configurable: true
    enumerable: true
    value: 20
    writable: true
}
```


- value: the value
- writable: true if we can change the value
- configurable: true means both the ride object can be change and the capacity property can be deleted if needed.
- enumerable: true to show the property when i iterate over the object ride

#### Function

- Does not have a value but have a set function that can be called directly
```javascript
go{
    configurable:
    enumerable:
    get: function get go(){ ... }
    set: undefined
}
```
- configurable:
- enumerable:
- get: 
- set: if undefined, meaning this is a getter function only

```js
//call the getter function
descriptors.go.get();

// and get the value of capacity by writing
console.log(descriptors.capacity.value);

//response
go
20
```

## Object.getOwnPropertyDescriptor

- allows you to get the metadata of just one property
- an use case could be to copy properties to another object.

```js
let descriptor = Object.getOwnPropertyDescriptor(ride, "go")
```

### CopyProperties

```js
let ride = {
    name: "The Simpsons",
    excitementLevel:100,
    capacity: 20,
    get go(){
        console.log("go");
    }
};

let copy = {};
//copy ride object to empty object called copy
Object.assign(copy,ride);
// getting descriptor of the go getter 
let descriptors = Object.getOwnPropertyDescriptor(copy, 'go');
```

- does not work well becouse the result object of getOwenPropertyDescriptor doesn't have a get 
- we can use getOwnPropertyDescriptors with defineProperties

```js

let aBetterCopy = {};
Object.defineProperties(aBetterCopy, 
    Object.getOwnPropertyDescriptors(ride));

let betterDescriptor =
    Object.getOwnPropertyDescriptor(aBetterCopy, 'go');

```

### Clone objects

- getOwnPropertyDescriptors can be used with Object.create
- create(PrototypeToUse,getOwnPropertyDescriptorsReturns)
- the second one will give the properties to the new object

```js
let clone = Object.create(Object.getPrototypeOf(ride),
    Object.getOwnPropertyDescriptors(ride))
```

##  string.prototype.padStart and padEnd

- to tabular string thst use monospace font
- aling console outputs, or the content in a file text

### padStart
- .padStart(numberOfPad,paddingChar) 

```js
let rideName = "Scooby Doo"

let startPaddedName = rideName.padStart(15);

console.log(startPaddedName);
//return 
//Scooby Doo with 5 spaces in front of it
     Scooby Doo

```

- default char is space but you can especify any char as a second parameter
- if necesary only a part of the phrase will be used to finish up the padding.
- if the numberOfPad is less than the string lenght, nothing will happen

```js
let startPaddedName = rideName.padStart(15, 'xo');

//return 
xoxoxScooby Doo
```

### padEnd

- add the characters behind the string 

```js
let endPaddedName = rideName.padEnd(15,"x");
console.log(endPaddedName);

//returns
Scooby Dooxxxxx
```

## Trailing Commas in Parameter Definitions

- is allowed in functions at the end of the parameters
- and allowed when calling the funtions
- will pass test like JSlint on the code
- legal in object
- legal in literals

```js
function draw(position, height,) {};
draw(0,100, );

let bar = {
    position: 0,
    height: 100,
}

let colors = ["red", "green", "blue", ]; 
```

### Benefits of Trailing Commas

- Rearrangement of items is easier
- Helps version controls systems (when a trailing comas is left intact)

### Trailing Commas and Version Control Systems

```js
let colors = [
    "red",
    "green"  <- change
];

let colors = [
    "red",
    "green", //<- change becouse of the comma
    "blue"
];
```

## Summary

- Use Objects.keys, Object values and Object.entries to iterate over objects.
- Object.getOwnPropertyDescriptors gets metadaata information about the properties of an object.
- Calling padStart and padEnd now lets you pad a string with characters of your choice
- Trailing commas are now legal syntax which is great for xopy and pasting as well as source control systems

