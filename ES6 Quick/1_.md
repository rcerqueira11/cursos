## Arrow function

- we can leave the return () => 5.99
- if we define a block we need the return () => {return 5.99}
- if we use => this will be set to the context of the content running `Window {}`
- cant bind arrow functions 

## Default Function Parameters

- can usa a function in default
- if you pass `func(undefine)` takes the defaul param if there is any
- you can pass operations as default `func(tax, asd = tax * 0.07)`
- you can pass operations as default and use other `vars qwe = 3; func(tax, asd = tax * qwe)`
- arguments ignores default parameters 
- works with dynamic functions 

## Rest

- passing the ...var in a function all the parameters in function() will be set in an array in var
```js
function hola(par1, ...params){}

hola("ja","je","ji")

par1 = ja
params = ["je","ji"]

```

- arguments.length = 3

## Spread Operators

- will breake out the `string` into his individuals caracters
- arr = ["qwe"]; arr_new = ["a",...arr] = ["a","q","w","e"]


## ObjectLiterals

- print the object with the name {price: 123, cont: 234}
- to set a name [fieldname] : price
- get [name] () {return true}

## For ... of loops

```js
codes =["asd","s","d"]; 
for (var code of codes){
	console.log(code)
}

res: asd s d
```

## Octal and binary literals

### Octal

- val = 0o10 or 0O10 this is 8 in octal

### Binary

- val = 0b10 or 0B10 this is 2 in binary


## Template literals


```js
let num = 123
console.log("invoice number ${num}")

invoice number 123
```

- template literals with space 
```js
let message = "A
B
C";
console.log(message);
Resp: 
A
B
C

```

- interpretation of ${} takes place first that a call of a function

## Destructuring

- we set the part of an array to new variables 

let salary  = ['3200','50000','270000']
let [low, average, high] = salary
console.log(average) 
resp:	50000

- skip elements a white space between the comas let [low, , high] = salary
	- console.log(high) : 270000

- spread let [low, ...remain] = salary
	- console.log(remain) :  ['50000','270000']

- array in arrays 

```js
let salary  = ['3200','50000',['270000', '12412']]
let [low, average, [high, other]] = salary
console.log(high) 
resp:	270000

```

- can use defaul parameter
	- let [low, average, high= 80000] = salary

- we can take the property and give it a new variable name 
	```js
	let salary = {
		low: '32000',
		average: '50000',
		high: '75000'
	}
	let {low: newLow, average: newAverage, high: newHigh} = salary ;
	console.log(newHigh) return => '75000'
	```

- when distructirng objects we need parentesis when we declare the veriables before
	- `let newLow, newAverage, newHigh;`
	- `({low: newLow, average: newAverage, high: newHigh} = salary);`

## Advance Destructuring

```js
for (let [a,b] of [[5,10]]){
	console.log(`${a} ${b}`);
}
```