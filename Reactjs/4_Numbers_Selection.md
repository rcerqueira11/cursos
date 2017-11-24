## The State of Selected Numbers

- we need to re-render multiple componens
- objects for arrays because they are faster for lookups

```css
    .mountNode {
    color: #333;
    }

    .fa-star{
        margin: 0.5em;
    font-size: 24px;
    }

    span {
        display: inline-block;
    margin: 0.5em;
    text-align: center;
    background-color: #ccc;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;
    }

    .selected{
        background-color: #eee;
    color: #ddd;
    cursor: not-allowed;
    }
    .used{
        background-color: #aaddaa;
    color: #99bb99;
    cursor: not-allowed;
    }

```

```js
const Answer = (props) => {
	return (
  	<div className="col-5">
    	{ props.selectedNumbers.map((number,i)=>
      	<span key={i} >{number}</span>
      )}
    </div>
  )

}

const Numbers = (props) => {
	const numberClassName = (number) => {
  	if(props.selectedNumbers.includes(number)){
    	return 'selected';
    }
  }
 	return (
  	<div className="card text-center">
  	  <div>
  	    {Numbers.list.map((number,i)=>
        	
        	<span key={i} className={numberClassName(number)}>{number}</span>
        )}
  	  </div>
  	</div>
  )
}

Numbers.list = _.range(1,10);


class Game extends React.Component {
//will manage all states of a single game
	state = {
  	selectedNumbers: [2,4],
  }
	render() {
  	return(
    	<div className="container">
    	  <h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Stars />
        	<Button />
        	<Answer selectedNumbers={this.state.selectedNumbers}/>
        </div>
        <br />
				<Numbers selectedNumbers={this.state.selectedNumbers}/>
    	</div>
    )
  }
}


```

definimos un onClick handler, pero no se le puede pasar la llamada de funcion directamente necesitan una referencia a una funcion
- the easiest way is to wrap what we have to do in a inline function 
```js
onClick={() => props.selectNumber(number) } 

```
- remember that this fuction will be created every time is rendered so this should be changed

### Re-renders childrens
- react re-renders the game component and because of that re-render all his childrens
- to avoid this we move the numberOfStarts to one level up and maintain it in the game component
    - make part of state in the component and send it to the stars component as argument of props


### Avoid multiple select of numbers
```js

selectNumber = (clickedNumber)=> {
  		if(this.state.selectedNumbers.includes(clickedNumber)) {return;}  <--
      this.setState(prevState => ({
			selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    	})	);
  }
```

## Changed their answer

### remove a number with the filter function

```js
    selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)

```


```js
const Answer = (props) => {
	return (
  	<div className="col-5">
    	{ props.selectedNumbers.map((number,i)=>
      	<span key={i} onClick={() => props.unselectNumber(number)}>
        {number}
        </span>
      )}
    </div>
  )
}


class Game extends React.Component {
//will manage all states of a single game
	state = {
  	selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
  };
  
  selectNumber = (clickedNumber)=> {
  		if(this.state.selectedNumbers.includes(clickedNumber)) {return;}
      this.setState(prevState => ({
				selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    	})	);
  };
  unselectNumber = (clickedNumber)=> {
  		if(!this.state.selectedNumbers.includes(clickedNumber)) {return;}
      this.setState(prevState => ({
      	selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
      }));
  };
	render() {
  	return(
    	<div className="container">
    	  <h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Stars numberOfStars={this.state.randomNumberOfStars} />
        	<Button />
        	<Answer selectedNumbers={this.state.selectedNumbers}
          				unselectNumber={this.unselectNumber}/>
        </div>
        <br />
				<Numbers selectedNumbers={this.state.selectedNumbers}
        				 selectNumber={this.selectNumber}/>
    	</div>
    )
  }
}
```


## Enhancing the UI

### define constant to avoid this.state
```js
const { selectedNumbers, randomNumberOfStars } = this.state;
  	return(
    	<div className="container">
    	  <h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
        	<Button selectedNumbers={selectedNumbers}/>
        	<Answer selectedNumbers={selectedNumbers}
          				unselectNumber={this.unselectNumber}/>
        </div>
        <br />
				<Numbers selectedNumbers={selectedNumbers}
        				 selectNumber={this.selectNumber}/>
    	</div>
    )
```

### disable the = button
```js
<Button selectedNumbers={selectedNumbers}/>

<button className="btn" disabled={props.selectedNumbers.length === 0} >
	=
</button>

```

## Summary

- Interacting with numbers
- Selecting an answer
- Changing an answer
- UI behavior

