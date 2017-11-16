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
```

