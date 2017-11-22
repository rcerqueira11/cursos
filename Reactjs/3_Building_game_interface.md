## The Main Game 
- to test the state of the game is isolate you might render two copies of the same component is especially useful when you start working with a third-party state container like Redux for example.
- Having a top-level component like app component, when we need to completely reset the game. the easiest way to do so is to u  n-mount and re-mount it. The app component can help us there.


### Render starts 

- in curly brackets, reacti will render every number in a text node
> random numbers could be from 0 to 8.9999 so we can floor the number and since we dont want any 0 we add 1 

> 1 + Math.floor(Math.random()*9);
```js
const Stars = (props) => {
	const numberOfStars = 5;
  
  let stars = []; 
  for (i=0;i<numberOfStars;i++){
  	stars.push(<i key={i} className="fa fa-star" ></i>)
  }
	return (
  	<div className="col-5">
				{stars}
		</div>
  )

}
```

- Lodash library to create array with a range 
```js
const arrayOfNumbers = _.range(1,10);
```
- we can use the map function and is shorter than forloop

```js
{arrayOfNumbers.map((number,i)=>
    <span key={i}>{number}</span>
)}

//and the star will be

<div className="col-5">
    {_.range(numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
    )}
</div>

```


- Array constant numbersOfStarts not something i want to create every time the number module is created, as it will not change is a good candidate to become a property on the Numbers object/
- Every function is an object, and we can store data on that object to be used by all instances of that object


```js
Numbers.list = _.range(1,10);
```

- and can be used in the object

```js
const Numbers = (props) => {
 	return (
  	<div className="card text-center">
  	  <div>
  	    {Numbers.list.map((number,i)=>
        	<span key={i}>{number}</span>
        )}
  	  </div>
  	</div>
  )
}
```

- Do this whenever the veriable that you're defining will be shared exactly as is with all instances of the component, and it's not related to any logic inside that component.

## Summary

- Bootstap, Font Awesome, and some CSS
- Rendering random stars
- Button and Answer components
- Availabel numbers, 1-9
