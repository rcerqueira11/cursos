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