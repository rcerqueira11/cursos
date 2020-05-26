## React Component Approaches

- React Component creation approaches
- Container vs Presentational Components

## Four+ Ways to Create React Components?!

- ES5 createClass
- ES6 class
- ES5 stateless function
- ES6 stateless function
- Many more...

## ES5 Class Component
```js

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1> Hello World </h1>
        );
    }
});

```

## ES6 Class Component

### React in ES6
- No autobind

    ```html
    //Works fine with ES5 createClass
    <div onClick={this.handleClick}></div>
    ```

    ```html
    //Requires explicit bind with ES6 Class
    <div onClick={this.handleClick.bind(this)}></div>
    ```

    #### Recomended

    - Bind the function to 'this' in the constructor
    ```js
    class Contacts extends React.Component{
        constructor(props){
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
    }
    ```

- PropTypes declared separately

- Default props declared separately

    - If you're willing to utilize experimental class fields and static properties, you can declare them withing your class
    - You have to enable Stage 1 suppor to this in babel

- Set initial state in constructor

## ES5 Stateless Component

```js
var HelloWorld = function(props){
    return(
        <h1> Hello World </h1>
    );
};

```

## ES5 Stateless Functional Component

- const to avoid our component is accidentaly reasigned
```js
const HelloWorld = (props) => {
    return(
        <h1> Hello World </h1>
    );
};

```
### Stateless Functional Components: 9 Benefits

- No class needed
- Avoid 'this' keyword
- Enforce best practices
    - used for dumb presentational components
    - Presentational componets focused on the UI rather than the behavior
    - Avoid use state in presentational components
- High signal-to-noise ratio (less typing)
    - Can use a single line return statement
- Enhance code completion/ intellisense
- Bloated components are obvious
- Easy to understand
    - takes props
    - spit html
- Easy yo test
- Performance

## When Should I Use Each Style?

- Stateless does not actually create a component instance (ref will return null)
- Nested functions in stateless comp can hurt performance, because every render creates a new instance of that function
- If needed a nested funtion in the stateless component you can should convert it to a class-based component

| **Class Components** | **Stateless Components** |
|-------|-------|
|State|Everywehere else :smile:|
|Refs to underlying DOM||
|Lifecycle Methods||
|Child functions (for performance)||

## Other Ways to Create Components

- Object.create
- Mixins
- Parasitic Components
- Stamplt

[More info](bit.ly/react-define-component)

## Container vs Presentation Components

### Container

- Concerned with behavior, marshalling data and actions
- Backend of the frontend
- Concerned with passing data and actions down to their children (presentation components)
- Know abour Redux, have redux-specific code inside for dispatching actions to the store and connecting to the store via connect.
- Often stateful 'couse they need to manage state
### Presentation

- Should not have login inside
- Receives functions and data tha ther need froma container component
- Typically know nothing about redux
    - make them more reusable and easier to understand
    - just rely on props to display UI
    - have no dependencies on the rest of the app (redux, actions, stores)
    - Does NOT specify how the data is loaded or mutated
- Typically functional components have no need for state

| **Container Components** | **Presentation Components** |
|---|---|
|Little to no markup|Nearly all markup|
|Pass data and actions down|Receive data and actios via props|
|Knows about Redux|Doesn't know about Redux|
|Often stateful|Typically functional components|

- Most Components should be Presentation Components

### Alternatve Jargon

| **Container Components** | **Presentation Components** |
|---|---|
|Smart|Dumb|
|Stateful|Stateless|
|Controller View|View|

> ` "When you notice that some components don't use props they receive but merely forward them down.. it's a good time to introduce some container components." - Dan Abramov`


## Summary

- ES5 createClass
- ES6 Class
- ES5 Stateless Function
- ES6 Stateless Function
- Many more!
- Container vs Presentation Components