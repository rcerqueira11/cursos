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
    - onClick, onChange, onSubmit, others