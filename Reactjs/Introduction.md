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

> to test things [jscomplete](https:://jscomplete.com/repl)
 