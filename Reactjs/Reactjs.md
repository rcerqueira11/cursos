# ReactJS

## Table Of Content
  - [Introduction](#introduction)
      - [Components](#components)
      - [Reactive updates](#reactive-updates)
      - [Virtual views in memory](#virtual-views-in-memory)
  - [Your First Component](#your-first-component)
      - [React Components](#react-components)
          - [Function components](#function-components)
          - [Class components](#class-components)
  - [Virtual DOM and JSX](#virtual-dom-and-jsx)
          - [JSX](#jsx)
          - [Pure Javascript](#pure-javascript)
      - [RenderComponent](#rendercomponent)
          - [With props](#with-props)
          - [Class](#class)
          - [handleClick = () => {](#handleclick----)
          - [Race conditions and prevState](#race-conditions-and-prevstate)
  - [Reusable Components](#reusable-components)
          - [Reusable components with argunments and clouseres](#reusable-components-with-argunments-and-clouseres)
          - [Important:](#important)
  - [Summary](#summary)
  - [Build a Github Card Component](#build-a-github-card-component)
      - [First and Advices](#first-and-advices)
      - [Styling react components](#styling-react-components)
  - [Taking Input from the user](#taking-input-from-the-user)
      - [ref](#ref)
      - [react state controller onChange](#react-state-controller-onchange)
      - [finish code](#finish-code)
  - [Summary](#summary)
      - [Render starts](#render-starts)
  - [Summary](#summary)
  - [The State of Selected Numbers](#the-state-of-selected-numbers)
      - [Re-renders childrens](#re-renders-childrens)
      - [Avoid multiple select of numbers](#avoid-multiple-select-of-numbers)
  - [Changed their answer](#changed-their-answer)
      - [remove a number with the filter function](#remove-a-number-with-the-filter-function)
  - [Enhancing the UI](#enhancing-the-ui)
      - [define constant to avoid this.state](#define-constant-to-avoid-thisstate)
      - [disable the = button](#disable-the--button)
  - [Summary](#summary)
  - [Introduction](#introduction)
  - [Verifying an Answer](#verifying-an-answer)
      - [Changing the button](#changing-the-button)
  - [Accepting an Answer](#accepting-an-answer)
  - [Redraws](#redraws)
  - [The Done Status](#the-done-status)
  - [Winning and Losing the Game](#winning-and-losing-the-game)
  - [Finish Code](#finish-code)
  - [Summary](#summary)
      - [Whats next?](#whats-next)
          - [GraphQL working with data !Important](#graphql-working-with-data-important)
          - [Advanced Node.js](#advanced-nodejs)

## Introduction

- Javascript Library not a Framework
- Use for Building User Interface
- Describe web user interfaces
- use ReactDOM library
- We tell what we want and not how to do it 

### Components

- we describe user interfaces using components
- like functions
    - call their input properties and state
    - output is a description of a user interface
- reusable and composable
- components can contain other componets
- can manage a private state that hold data that may change over time.

### Reactive updates

- react will react: when the state of a component, the input, changes, the user interface it represents, the output, changes as well
- Take update to the browser: automaticaly updates the DOM when needed

### Virtual views in memory

- Write HTML in JavaScript: we depends of how fast the javascript can generate the html
- Using javascript as representation of the html allows to have a virtual representation of the dom in memory, which is known as the virtual DOM.
- Tree reconciliation: React will write the differece between before and after tree. instead of rewriting the whole tree

## Your First Component

### React Components

- can be a function component or a class component (stateless and statful)

#### Function components

- simplest form of a React component
- recive an object of properties
- returns what looks like HTML but is a special js syntax called JSX    

```js
const MyComponent = (props) => {
    return (
        <elementOrComponent ../>
    );
}

```

#### Class components

- recive props 
- considers private internal state, controls the returned JSX
- this private internal state give react its reactive nature
- when the state of a class component changes, react will automatically re-render that component
- state can be change
- props ar all fixed values
- class components can only change their internal state, not their properties

```js
class MyComponent extends React.Component {
    render() {
        return (
            <elementOrComponent ../>
        );
    }
}
```

## Virtual DOM and JSX
#### JSX
```js
class Hello extends React.Component {
    render () {
        return (
            <div className="container">
                <h1> Getting Started </h1>
            </div>
        );
    }
}

ReactDOM.render(<Hello />, mountNode);
```


#### Pure Javascript
```js
class Hello extends React.Component {
    render () {
        return (
            React.createElement("div",
                { className: "container"},
                React.createElement("h1", null, "Getting Started")
            )

        );
    }
}

ReactDOM.render(React.createElement(Hello, null), mountNode);
```

> to test things [jscomplete](https://jscomplete.com/repl)
 

### RenderComponent

- const in Mayust first is a requirement in react
- recives props: this argument make the component more reusable

> ReactDOM.render(<Component />, element this component should render)

```js
const Button = function () {
    return (
        <button>Go</button>
    );
};

ReactDOM.render(<Button />, mountNode)
```

#### With props
```js
const Button = (props) => {
    return (
        <button>{props.label}</button>
    );
};

ReactDOM.render(<Button label="Do"/>, mountNode)
```

#### Class
- function does not have state so we must use a class
- we define a render function wich return the JSX component

```js

class Button extends React.Component{
    //using a state object
    constructor(props){
        //to honor the inheritance of this component
        super(props);
        // the properties of this state object are the various elements of the state 
        this.state = { counter: 0};

    }

    // other way to use this is to use a class property like 
    state = {counter: 0};
    //render () {
      //  return (
       //     <button onClick={anyFunction}>
         //       {this.state.counter}
          //  </button>
        //);
    //}
}

ReactDOM.render(<Button />, mountNode)

```

- Handlers can be used instead of an string, react event handlres use an actual javascript funtion.  

```js
// global function 
<button onClick={anyFunction}>
// or inline function
<button onClick={() => doSomething()}>
//the standart is to define this function in the class component
handleClick = () => { ... }
<button onClick={this.handleClick}>

```


#### handleClick = () => {
- act as a prototype
- this === component instance we're sending to the DOM
- job it to read the state counter with this.state.counter++
- we can use the react set state wich is available in every class component instance to update a component state
```js

class Button extends React.Component{
    state = {counter: 0};

    handleClick = () => {
        // act as a prototype
        // this === component instance we're sending to the DOM
        // job it to read the state counter with this.state.counter++
        // we can use the react set state wich is available in every class component instance to update a component state

        this.setState({
            counter: this.state.counter +1
        })

    };

    render () {
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

ReactDOM.render(<Button />, mountNode)

```

#### Race conditions and prevState
- to not worry about race conditions
- if your update dependson the current state use this sentence

```js

handleClick = () => {
    this.setState((prevState) => {
        return {
            counter: prevState.counter + 1
        }
    });
};   

//since we return an object we can use the arrow function we need to wrap the object in ()
handleClick = () => {
    this.setState((prevState) => ({
        counter: prevState.counter + 1
    }));
};   

```

## Reusable Components

- when a component does not have state you can use a funtion component instead of a class component 

```js
// does not show up until we included
const Result = (props) =>  {
	return(
  	<div>...</div>
  );
};


// lets included
class App extends React.Component{
	render() {
  	return(
    	<div>
    	  <Button />
          <Result />    	    
    	</div>
    );
  }
}
```

- the parent div is not optional
- react components can only return one element
- to return siblings elements you have to wrap them in one parent element 

```js
//we change the render to app 
ReactDOM.render(<App />, mountNode)
```

- we need to move the state class property to App so it can be access by the Button and Result components
- the properties of a component can only be access to by the component itself

- to pass a component to another of a level down we make a reference and in the -1 component we call it as the reference by the this.props.componentReference

```js

class Button extends React.Component{
    render () {
        return (
            <button onClick={this.props.onClickFunction}>
                +1
            </button>
        );
    }
}

const Result = (props) =>  {
	return(
  	<div>{props.counter}</div>
  );
};

class App extends React.Component{
	state = {counter: 0};

	incrementCounter = () => {
      this.setState((prevState) => ({
           counter: prevState.counter + 1
      }));
  }
	render() {
  	return(
    	<div>
    	    <Button onClickFunction={this.incrementCounter}/>
		    <Result counter={this.state.counter}/>      	    
    	</div>
    );
  }
}
```

#### Reusable components with argunments and clouseres

```js

//this way create a funtion every time so its no recomended 
class Button extends React.Component{
    render () {
        return (
            <button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

//instead define the handleClick as the function

class Button extends React.Component{
    handleClick = () =>{
        this.props.onClickFunction(this.props.incrementValue);
    };


    render () {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}


const Result = (props) =>  {
	return(
  	<div>{props.counter}</div>
  );
};


class App extends React.Component{
	state = {counter: 0};

	incrementCounter = (incremetValue) => {
      this.setState((prevState) => ({
           counter: prevState.counter + incremetValue
      }));
  }
	render() {
  	return(
    	<div>
    	  <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
    	  <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
    	  <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
    	  <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
				<Result counter={this.state.counter}/>    	    
    	</div>
    );
  }
}
ReactDOM.render(<App />, mountNode)
```

#### Important:
- the need to invoke a function handler that uses a prop on the component is enough reason to use the class component syntax over the function component syntax.

## Summary

- jsComplete Playground [Link](https://jscomplete.com/repl)
- Components (Functions and Classes)
    - props
    - state (just in class components)
        - the state can be change with the setState method and everytime a component change its state the React re-renders it.
    - the props of a component cannot be changed by the component
    - but the whole component can be re-rendered with differents props by the component's parent. 
- JSX and the Virtual DOM
- Functions and class components
    - functions recive a props objects and return a React element
    - class defined by extending the react.component class and defined a render funtion inside of that render fuctions return an react element.
- ReactDOM.render(...,mountNode)
    - param1: the component to render
    - param2: the HTML element to hold the React-rendered markup
- React Events
    - react comes with normalized events that work across all browsers in a standard way.
    - onClick, onChange, onSubmit, others## Introduction
- work with api
- render multiple cards 
- inputs
- [react dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)
## Build a Github Card Component

### First and Advices
   - Component Struncture
   - How many componets to use
   - What each component should describe 
   - good to start from bottom to top
   - top to botto when you know most of the components in the tree.
   - if components will not have any interact with the user (not clicking) and not a top level component where a state needs to be managed, stard that component as a function component.
   - function components have more advantage that class components
   - Only use class-based components when:
        - you need to manage a state object, which is usually done on a top-level component
        - need to personalized event handlers
    - test the smallest increment that you can find
```js
  const Card = (props) => {
	return (
  	<div>
  	  <img src="http://placehold.it/75" />
      <div>
        <div>Name here...</div>
        <div>Company Name here ...</div>
      </div>
  	</div>
  );
};


ReactDOM.render(<Card />,mountNode)

```

### Styling react components
- we can include a css file as normal and use the element class to select and style any element
    - need to use className instead of class property

```js
<div className="info" >Name here...</div>
```

- but as we can write HTML with javascript we can write CSS with javascript as well

```js
const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img src="http://placehold.it/75" />
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>Name here...</div>
        <div>Company Name here ...</div>
      </div>
  	</div>
  );
};

```
- feels like inline style but is different
    - this is javaScript, not strings
    - so we can generate it and reuse it
- its okay to use a mix of js styles and global styles    

```js
const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img width="75" src={props.avatar_url} />
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>
        	{props.company}
        </div>
      </div>
  	</div>
  );
};

let data = [
	{
  	name:"Paul O’Shannessy",
    avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
    company:"Facebook",
  },
	{
  	name:"Ben Alpert",
    avatar_url:"https://avatars.githubusercontent.com/u/6820?v=4",
    company:"Facebook",
  },
	{
  	name:"Paul O’Shannessy",
    avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
    company:"Facebook",
  },
]

const CardList = (props) => {
	return (
  	<div>
    	//map array of objects into an array of Card components
  	  {props.cards.map(card => <Card {...card}/>)}
  	</div>
  );
};
ReactDOM.render(<CardList cards={data}/>,mountNode)


```

- we can use the spread operator: spread the card object with these three dots
- this makes all the properties of the card object available as props in the Card component, and our data will render exactly as we want it.

```js
const CardList = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card {...card}/>)}
  	</div>
  );
};
```



## Taking Input from the user

- since we want to the data be rendered every time is updated we need to put it on the state of a component 

```js
class App extends React.Component {
	state= {
  	cards: [
      {
        name:"Paul O’Shannessy",
        avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
        company:"Facebook",
      },
      {
        name:"Ben Alpert",
        avatar_url:"https://avatars.githubusercontent.com/u/6822",
        company:"Facebook",
      },
      {
        name:"Paul O’Shannessy",
        avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
        company:"Facebook",
      },
    ]
  }
	render () {
  	return (
    	<div>
	    	<Form />
 	      <CardList cards={this.state.cards}/>
    	</div>
    )
  }
}
```

- Every react event function receives an event argument
    - this event wrapper is around the native JavaScript event object, all methods are available here.

```js
// so the page do not refresh and loose the code of the page
handleSubmit = (event) => {
  	//
    event.preventDefault();
  };
```


### ref 
- this property takes in a function that will be executed when the input element is mounted to the dom
    - receives a reference to the element so we can store the reference in the component istance

```js
<input type="text" 
ref={(input) => this.userNameInput = input} placeholder="Github username" required/>
```

### react state controller onChange

- this way when we type into the text box, React will be aware of this element state change and it will reflect that change back to the element itself because it's a regular React state change.

```js
class Form extends React.Component {

	state = { userName: '' }
  
	handleSubmit = (event) => {
    event.preventDefault();
    console.log('Evente: form submit', this.userNameInput.value);
  };
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" 
        	value={this.state.userName}
          onChange= {(event) => this.setState({ userName: event.target.value})}
          placeholder="Github username" required/>
        <button type="submit"> Add Card </button>
    	</form>
    );
  }
}
```

- axios library excelent for AJAX requests

- if the app component passes a funtion reference to the Form component, we can change the state of the App component in that function and the Form component will e able to invoke that function becouse it will be part of its props object 


```js
class App extends React.Component {
	state= {
  	cards: [
      {
        name:"Paul O’Shannessy",
        avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
        company:"Facebook",
      },
      {
        name:"Ben Alpert",
        avatar_url:"https://avatars.githubusercontent.com/u/6822",
        company:"Facebook",
      },
      {
        name:"Paul O’Shannessy",
        avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
        company:"Facebook",
      },
    ]
  }
  
  addNewCard = (cardInfo) => {
  	console.log(cardInfo);
  }; 
  
	render () {
  	return (
    	<div>
	    	<Form onSubmit={this.addNewCard}/>
 	      <CardList cards={this.state.cards}/>
    	</div>
    )
  }
} 

```

### finish code

```javascript
const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img width="75" src={props.avatar_url} />
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>
        	{props.company}
        </div>
      </div>
  	</div>
  );
};


const CardList = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card key={card.id} {...card}/>)}
  	</div>
  );
};

class Form extends React.Component {

	state = { userName: '' }
  
	handleSubmit = (event) => {
    event.preventDefault();
    //axio give us a promisethat we can now use to see the response coming from github
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    	.then(resp => {
      	this.props.onSubmit(resp.data);
      	this.setState({ userName: '' });
      });
  };
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
    	  <input type="text" 
        	value={this.state.userName}
          onChange= {(event) => this.setState({ userName: event.target.value})}
          placeholder="Github username" required/>
        <button type="submit"> Add Card </button>
    	</form>
    );
  }
}

class App extends React.Component {
	state= {
  	cards: []
  }
  
  addNewCard = (cardInfo) => {
		this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }))
	}; 
  
	render () {
  	return (
    	<div>
	    	<Form onSubmit={this.addNewCard}/>
 	      <CardList cards={this.state.cards}/>
    	</div>
    )
  }
}
ReactDOM.render(<App />,mountNode)
```


## Summary

- Components
    - <Card />: to render information
    - <CardList />: to convert an array of records into an array of card components
    - <Form />: to read input from the user
    - <App />: to manage the relation between all the other components

- state.cards => [<Card />,<Card />,...]
- Refs and controlled components
- Passing functions to child components
    - can be regular primitive values 
    - or functions references that the child can invoke up the chain on the parent component itself## The Main Game 
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

## Introduction

- Check an answer
- Accept an answer
- No possible solutuion
- Redraws
- Win/Lose

## Verifying an Answer 

- Difference between randomNumbersOfStars and Sum of selectedNumbers array
- Sums of the array could be done with the reduce operation, and start it with 0 in case the array is false

```js

<Button selectedNumbers={selectedNumbers}
          				checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect}/>

checkAnswer = () => {
  	//answerIsCorrect
    this.setState(prevState => ({
    	answerIsCorrect: prevState.randomNumberOfStars ===
      	prevState.selectedNumbers.reduce((acc, n)=> acc + n, 0)
    	
    }));
  }

```

### Changing the button

```js
const Button = (props) => {
	let button;
  switch (props.answerIsCorrect){
  	case true:
    	button=
      <button className="btn btn-success">
      	<i className="fa fa-check"></i>
      </button>;
    break;
    case false:
    	button=
      <button className="btn btn-danger">
      	<i className="fa fa-times"></i>
      </button>;
    break;
    default:
    	button=
      <button className="btn" 
      				onClick={props.checkAnswer}
      				disabled={props.selectedNumbers.length === 0} >
      	=
      </button>;
      	
    break;
  }
	return (
  	<div className="col-2">
      {button}
    </div>
  )

}

```

## Accepting an Answer

- usedNumbers should be marked as used
```js
acceptAnswer = ()=> {
  	this.setState(prevState => ({
    	usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect:null,
      randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    }));
  };

  case true:
    	button=
      <button className="btn btn-success" onClick={props.acceptAnswer}>
      	<i className="fa fa-check"></i>
      </button>;
    break; 
```

## Redraws

```js
redraw = ()=>{
  	if (this.state.redraws === 0) {return;}
  	this.setState(prevState => ({
    	
    	randomNumberOfStars: 1 + Math.floor(Math.random()*9),
      selectedNumbers: [],
      answerIsCorrect:null,
      redraws : prevState.redraws - 1,
    }));
  };


  <Button selectedNumbers={selectedNumbers}
          				checkAnswer={this.checkAnswer}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
                  redraws={redraws}
                  answerIsCorrect={answerIsCorrect}/>

const Button = (props) => {
	let button;
  switch (props.answerIsCorrect){
  	case true:
    	button=
      <button className="btn btn-success" onClick={props.acceptAnswer}>
      	<i className="fa fa-check"></i>
      </button>;
    break;
    case false:
    	button=
      <button className="btn btn-danger">
      	<i className="fa fa-times"></i>
      </button>;
    break;
    default:
    	button=
      <button className="btn" 
      				onClick={props.checkAnswer}
      				disabled={props.selectedNumbers.length === 0} >
      	=
      </button>;
      	
    break;
  }
	return (
  	<div className="col-2 text-center">
      {button}
      <br/>
      <br/>
      <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws===0}>
        <i className="fa fa-refresh" ></i> {props.redraws}
      </button>
    </div>
  )

}
```

## The Done Status

```js

//use ternari statment
{ doneStatus ? 
    <DoneFrame doneStatus={doneStatus}/> :
            <Numbers selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
            usedNumbers={usedNumbers}/>
}

const DoneFrame = (props) => {
	return(
  	<div className="text-center">
  	  <h2>{props.doneStatus}</h2>
  	</div>
  );
};
```

## Winning and Losing the Game

- this.setState(first argument, ~second argument)
- this second argument is a call back function that will execute once the setState function have ended 


## Finish Code

```js
var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

const Stars = (props) => {
	//const numberOfStars = 1 + Math.floor(Math.random()*9);
  
	return (
  	<div className="col-5">
    {_.range(props.numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
    )}
		</div>
  )

}

const Button = (props) => {
	let button;
  switch (props.answerIsCorrect){
  	case true:
    	button=
      <button className="btn btn-success" onClick={props.acceptAnswer}>
      	<i className="fa fa-check"></i>
      </button>;
    break;
    case false:
    	button=
      <button className="btn btn-danger">
      	<i className="fa fa-times"></i>
      </button>;
    break;
    default:
    	button=
      <button className="btn" 
      				onClick={props.checkAnswer}
      				disabled={props.selectedNumbers.length === 0} >
      	=
      </button>;
      	
    break;
  }
	return (
  	<div className="col-2 text-center">
      {button}
      <br/>
      <br/>
      <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws===0}>
        <i className="fa fa-refresh" ></i> {props.redraws}
      </button>
    </div>
  )

}

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

const Numbers = (props) => {
	const numberClassName = (number) => {
  	if(props.usedNumbers.includes(number)){
    	return 'used';
    }
  	if(props.selectedNumbers.includes(number)){
    	return 'selected';
    }
  }
 	return (
  	<div className="card text-center">
  	  <div>
  	    {Numbers.list.map((number,i)=>
        <span key={i} className={numberClassName(number)}
          onClick={() => props.selectNumber(number)}>
          {number}
        </span>
        )}
  	  </div>
  	</div>
  )
}

Numbers.list = _.range(1,10);

const DoneFrame = (props) => {
	return(
  	<div className="text-center">
  	  <h2>{props.doneStatus}</h2>
      <button className="btn btn-primary" onClick={props.resetGame}>
      	Play Again
      </button>
  	</div>
  );
};

class Game extends React.Component {
//will manage all states of a single game
	static randomNumber = () => 1 + Math.floor(Math.random()*9);
  
  static initialState = () => ({
  	selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null,
  });
  
	state = Game.initialState();
  
  selectNumber = (clickedNumber)=> {
  		if(this.state.selectedNumbers.includes(clickedNumber)) {return;}
  		if(this.state.usedNumbers.includes(clickedNumber)) {return;}
      this.setState(prevState => ({
      	answerIsCorrect: null,
				selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    	})	);
  };
  unselectNumber = (clickedNumber)=> {
  		if(!this.state.selectedNumbers.includes(clickedNumber)) {return;}
      this.setState(prevState => ({
     		answerIsCorrect: null,
      	selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
      }));
  };
  checkAnswer = () => {
  	//answerIsCorrect
    this.setState(prevState => ({
    	answerIsCorrect: prevState.randomNumberOfStars ===
      	prevState.selectedNumbers.reduce((acc, n)=> acc + n, 0)
    	
    }));
  };
  acceptAnswer = ()=> {
  	this.setState(prevState => ({
    	usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect:null,
      randomNumberOfStars: Game.randomNumber(),
    }),this.updateDoneStatus);
  };
  
  redraw = ()=>{
  	if (this.state.redraws === 0) {return;}
  	this.setState(prevState => ({
    	
    	randomNumberOfStars: Game.randomNumber(),
      selectedNumbers: [],
      answerIsCorrect:null,
      redraws : prevState.redraws - 1,
    }),this.updateDoneStatus);
  };
  possibleSolutions = ({randomNumberOfStars,usedNumbers}) => {
  	const possibleNumbers =_.range(1,10).filter(number => 
    	!usedNumbers.includes(number)
    );
    
    return possibleCombinationSum(possibleNumbers, randomNumberOfStars)
  };
  updateDoneStatus = () =>{
  	this.setState(prevState => {
    	if(prevState.usedNumbers.length === 9){
      	return {doneStatus: 'Done. Nice!'};
      }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)){
      	return {doneStatus: 'Game Over!'};
      	
      }
    })
  };
  resetGame = () => this.setState(Game.initialState());
  
	render() {
  	const { 
    	selectedNumbers, 
    	randomNumberOfStars, 
      usedNumbers,
      answerIsCorrect,
      redraws,
      doneStatus
    } = this.state;
  	return(
    	<div className="container">
    	  <h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
        	<Button selectedNumbers={selectedNumbers}
          				checkAnswer={this.checkAnswer}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
                  redraws={redraws}
                  resetGame={this.resetGame}
                  answerIsCorrect={answerIsCorrect}/>
        	<Answer selectedNumbers={selectedNumbers}
          				unselectNumber={this.unselectNumber}/>
        </div>
        <br />
        { doneStatus ? 
        	<DoneFrame doneStatus={doneStatus}/> :
					<Numbers selectedNumbers={selectedNumbers}
        				 selectNumber={this.selectNumber}
                 usedNumbers={usedNumbers}/>
        }
        
    	</div>
    )
  }
}


class App extends React.Component {
	render() {
  	return(
    	<div>
    	  <Game />
      </div>
    )
  }
}



ReactDOM.render(<App />,mountNode); 

```


## Summary

- Verfiy and accept answer
- 5 redraws to balance the level
- No possible solutions
- Done status (win/lose)

### Whats next?
- [React Page](https://facebook.github.io/react/)
- Add play timer to the game
- Get players information and stored somewhere else
- Create leader board
#### GraphQL working with data !Important
- [Building Scalable APIs with GraphQL](https://app.pluralsight.com/player?course=graphql-scalable-apis&author=samer-buna&name=graphql-scalable-apis-m1&clip=0&mode=live)
#### Advanced Node.js
- Easiest option to render server-side HTML from the same React applications tat you write for yout clients
