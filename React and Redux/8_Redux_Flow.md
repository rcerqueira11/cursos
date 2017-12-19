## Intro

- Simple create course form
- Actions
- Action Creators
- Store
- Reducers
- Container Components

## Create Simple Add Course Form

- Update our state effectively every time that somebody presses a key when their focused on our title input field

```js
import React from 'react';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: "" // populate it with something else than null
            }
        };
        
    }

    onTitleChange(event){
        const course = this.state.course; 
        // our function is inheriting the `this` context of the caller, which in this case is the change chandler
        // this needs to be bound to the instance of our component

        course.title = event.target.value;
        this.setState({course: course});
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {};

export default CoursesPage;

```

## Binding in ES6


1. binding them to the this of our course page component in the constructor [BEST] 
    ```js
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);]
    ```

2. binding it in the render
    ```js
    onChange = {thisn.onTitleChange.bind(this)}
    ```
    - down side in performance
    - causes a new function to be created on each render


## Actions

- This file is going to hold our course-related actions creatos
- creates actions 
- convenience function, returns an action
- only requirement of an actions is that it has a type property
```js
export function createCourse(course) {
    return { type: 'CREATE_COURSE', course};
}
```
- in ES6 we can omit the right-hand side if it matches the left-hand side
    -  ```js 
        { type: 'CREATE_COURSE', course:courses} 
        ```
    -  ```js 
        { type: 'CREATE_COURSE', course} 
        ```


## Reducers

- accepts a state and a action and returns a new state 

```js
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            // [WRONG] immutable state
            // state.push(action.course);
            // return state;
            // [CORRECT] Spread operator
            return [
                ...state, // representng our existing array and expoloding ir out, taken all the values in it and defined them here inline
                // return a new instance of our state array
                Object.assign({}, action.course)
            ];
    
        default:
            return state;
    }
}

```
- other choices instead of a big switch
    - if statements
    - lookup table of functions
    - create function that completely abstact this away
- point each reducers handles an specific slice of state 
- reducers let you slice up the management of your store's state changes into a number of separate functions 
- for this specific actionTypes, i wan to peform some functions.


## Root Reducer

- since it is export a default you can alias it however you want
```js

// root reducer
import {combineReducers} from 'redux';
//since it is export a default you can alias it however you want
import courses from './courseReducer';

const rootReducer = combineReducers({
    // the property/name supplied here will impact the way i access the state thorughtout my application
    courses // short hand property name
    // courses: courses
}); 

export default rootReducer;

```

- the property/name supplied here will impact the way i access the state thorughtout my application
- in the container component will be saying state.courses


## Store

- initialState: good for server side rendering

```js
import {createStore} from 'redux';
import rootReducer from '../reducers';

//accepts the initial state for your app

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}

```

### Enhancing store with a middleware

```js
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

//accepts the initial state for your app

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        // third parameter accepts applyMiddleware function here we
        // can pass in all the middleware we would like to utilize in our application
        // we want to apply reduxImmutableStateInvariant
        applyMiddleware(reduxImmutableStateInvariant(),othermiddleware) 

        //reduxImmutableStateInvariant() make sure it have the () so it invoke within reduxImmutableStateInvariant our applyMiddleware fuction 

        //react Slingshot for example of how configure other pieces of middleware 
    );
}

```

## Instatiate Store and Provider

### Store
- Currenty, our reducer already sets its initial state using an ES6 default parameter

    ```js 
    index.js
    import configureStore from './store/configureStore';
    ```

- we create a instance of our store
- initial state is an optional parameter
- if you are creating a server render app you might choose to do so
- if we passed we will overriding the default parameter we specify in our reducer
    ```js 
    const store = configureStore();
    ```
- When we should pass it?
    - if you're wanting to rehydrate your store using some separate state that's passed down from the server or stored in local storage


### Provider

- higher order component that attaches our store to our React container components
    ```js
    import Provider from 'react-redux';
    ```

- set it on the render
- provider just take a props which is the store
    ```js
    render (
        <Provider store={store} >
            <Router history={browserHistory} routes={routes} />
        </Provider>,
        document.getElementById('app')
    );
    ```

- provider component accept store as props and just wraps our Router component
- provider component is wrapping our entire application so that it can be connected to our Redux store
- becouse our app is now wrapped in the Provider component, we'll be able to acces our Redux store in our components

## Connect Container

- import connect function

    ```js
    import {connect} from 'react-redux';
    ```

- instead of export a plain component we export a component that is decorated by the React-Redux connect function.
- the connect function is what we use to create components that can interact with Redux (container components)
- connect is higher-order component that's going to wrap our CoursePage
    ```js
    //export default CoursesPage;
    export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
    // alternative set up
    const connectedStateAndProps = connect (mapStateToProps, mapDispatchToProps);
    export default connectedStateAndProps(CoursePage);

    ```
- the two function calls is: connect function here returns a function and that functions immediately calls our container component

### mapStateToProps

- own props lets us access props that are being attached to this component, reference to component owns props
- define an object that returns the property we would like to see expose in our component
```js
function mapStateToProps(state,ownProps) {
    return {
        courses: state.courses
        //now im accesing the course data in our redux store 
    };
}

```
- .courses this is determinated by the choise we do in or reducer

### dispatch

```js
import * as courseActions from '../../actions/courseActions';
onClickSave() {
    // alert(`Saving ${this.state.course.title}`);
    this.props.dispatch(courseActions.createCourse(this.state.course));
}
```


```js

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };
        //binding them to the this of our course page component

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        // alert(`Saving ${this.state.course.title}`);
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps) {
    // own props lets us access props that are being attached to this component
    // define an object that returns the property we would like to see expose in our component
    return {
        courses: state.courses
        //now im accesing the course data in our redux store 
        // .courses this is determinated by the choise we do in or reducer
    };
}

// export default CoursesPage;
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps)(CoursesPage);

```
## Step Through Redux Flow

### Some errors
-  'dispatch' is missing in props validation     react/prop-types
-  'courses' is missing in props validation      react/prop-types
-  'courses.map' is missing in props validation 

- you can set some validations 

```js

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

```
Action       -> Reducers ->     React
actionCreator ->
createCourse -> courseReducer -> mapStateToProps (inject data) -> render

## mapDispatchToProps Manual M
