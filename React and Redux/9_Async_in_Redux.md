## Intro

- Why a mock API?
- Async libraries
- Implement Thunks

## Why a mock API?


- Start before the API existm,
    - First, this pattern allows you to start development immediately, even if the APIs that you need to comsume haven't been created yet.
    - as long as you can agree with the API team on the shape of the data that the final API will return

- Independence
    - helps move independently when a separate team is handling the web APIs
    - not related to the developers developing code in order to build the UI 
    - if i'm also building the APIs, then i get to decide when to do so.
     its effectively the rule of coding to an interface rather than an implementation

- Backup Plan
    - dont have to stop development
    - can just point  to the mock API and keep working

- Ultra-fast
    - can count on all responses being instantaneous if you like
    - not hampered by slow or unreliable API calls in the early stages of development

- Test slowness
    - allows you to control the speed of responses 
    - can get a feel how the app performs really slow or really quick 

- Aids testing
    - jandy tool for automated testing
    - since the data is local its both fast and realiable. dont have to mock calls since your mok api is already mock
    - since the data is deterministic you can even write test that utilize the data, and the wont be slow since the tests are local.    
    - All data is sitting in memory 

- Poin to the real API later
    - point to the real API by changing the import at the top of your file
    - you could even check a centrilzed config that allow yu to toggle between the mock and real APISs via single setting

## Async Library Options

### Async
Redux
- actionsare synchronous and must return an object

|Flux|Redux|
|--|--|
|Handed in action|?|

### Redux Async Libraries

#### redux-thunk
- allow return funtions from you action creators intead of object

#### redux-promise
- new alternative middleware library that uses Flux standard actions to bring clear conventions to async calls
- least popular of the three

#### redux-saga
- uses ES6 generators and offers an impressive amount of power with what's bassically a rich domain-specific lenguage for dealing with asynchrony.


### Comparasion

|Thunks|Sagas|
|--|--|
|functions: return functions instead of objects, wraps an asynchronous operation in a function|generators: functions that can be paused and resumed later|
|Clunky to test:have to mock api calls, not easy hooks for observin and testing individual steps in the asynchronous flow|Easy to test: assert on their effectcs because they simply return data, dont mock anything, test are generally more readable and clear|
|Easy to learn|Hard to learn: generators and a rather large API|

#### Generators

- functions that can be paused and resumed later
- contain multiple yield statments
- at each yield, the generator will pause

## Thunk Overview

- normally we only return objects from our action creators
- with redux-thunk  we can return a function
- thunk is a computer science term
- thunk is a function that wraps an expression in order to delay its evaluation

### Example
- deleteAuthor function is wrapping our dispatch function so that dispatch can run later
```js   
export function deleteAuthor(authorId)
{
    //return function
    return dispatch => {
        return AuthorApi.deleteAuthor(authorId).then(()=>{
            //calling regular action creator called delteAuthor
            dispatch(deleteAuthor(authorId));
        }).catch(handleError); 
    }
}
```

## Mock API Setup

- create api folder with the code in it



## Add Thunk to Store

- "How we handle asynchronous calls like AJAX calls to an API?"
- add thunk to our configure file
```js
import thunk from 'redux-thunk';
applyMiddleware(thunk,reduxImmutableStateInvariant())
```

> there are other middlewares for loggin, scheduling actions and sending crash reports when issues occur

## Create Load Courses Thunk

### Load courses when the app initially loads

- a thunk always return a function that accepts a  dispatch
- this return a promise so i can handle it here
- return couldBeAnAjaxCall.then(courses => {
- handling errors could be by a dedicated action creator
- with this approach we only have to change the import to the real api

```js
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}
```

## Action Naming Conventions

- suffix of success: this action does NOT fire until all authors have been successfully returned
- people often create a corresponding failure action type called loadCoursesFailure or loadCoursesError

## Load Courses in Reducer

```js
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
    
        default:
            return state;
    }
}
```

## Dispatch Action on Page Load

- go to the entry point
- once the store is configure we can go ahead and dispatch actions agains the store

```js
store.dispatch(loadCourses());
```

## Create Course List Component

- create two presentational components

```js
//CourseList.js
// presentational component
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

// const CourseList = ({courses, deleteCourse}) => {
const CourseList = ({courses}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
            {courses.map(course => 
                <CourseListRow key={course.id} course={course} />
            )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
```
- this could be done online 
```js
//CourseRow.js
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;
```

```js
//coursePage.js
class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
}
```

## Summary

- Thunks, Redux-Promise, and Sagas
- Naming async acitons
    - Consider SUCCESS and ERROR
- First Thunk Complete

//https://github.com/coryhouse/pluralsight-redux-starter