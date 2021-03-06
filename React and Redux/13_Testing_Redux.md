## Intro

### We'll Test
- Connected components
- Redux
    - Action creatir
    - Thunks
    - Reducers
    - Store

## Testing Connected React Components

### Two goals
1. Test markup 
    - given a certain set of props, do we get the expected output? (presentational component)
2. Test behavior
    - given a click, scroll, drag, change, what happens? do we get the expected behavior 

### Testing Container Components

- Trick
    - they are all wrappend in a call to connect
    - connect function assumes that our app is ultimately wrapped in a Provider component
    - so our container components don't export the component we wrote
    - instead, they export the component wrapped in a call to connect

- They're wrappend in a call to connect! What do i do?
1. Wrap with <Provider>
    - U reference the store, ppas it to the Provider and compose your component under test inside
    - `<Provider store={store}>MyComponent</Provider>`
    - can create a custom store for the test
    - this approach is useful if you want to test the Redux-related portions of your component.
2. Add named export for unconnected component
    - insteareste in testing the component's rendering and local state-related behaviors 

### Testing Connected Components

1. Add the neccesary imports
    ```js
    import React from 'react';
    import expect from 'expect';
    import { mount, shallow } from 'enzyme';
    import ManageCoursePage from './ManageCoursePage';
    ````

2. create the test 
    ```js
    describe('Manage Course Page', () => {
        it('sets error message when trying to save empty title', () => {
            const wrapper = mount(<ManageCoursePage/>);
        });
    });
    ```
    - `const wrapper = mount(<ManageCoursePage/>);`
    - here we need to test this components interactions 
    - with its child components
    - thats why we use mount 
    - we need to use mount so our full DOM is created in memory 
    
    ### we get an error, solution are:

    #### wrap the root component in a `<Provider>`
    
    - `const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);`
           
    - useful to test redux connect-related code like mapStateToProps
        
    #### Update our component to export the raw unconneted version
    - allows to test it directly without the complexity of setting up Redux's provider and store
    - does not brake any existing import statements

3. change in the `ManageCoursePage.js` to export the class 
    ```js
    export class ManageCoursePage extends React.Component{
    ```
    - so you can export it

4. export it with curly braces
    ```js
    import {ManageCoursePage} from './ManageCoursePage';
    ```

5. pass `authors={[]}` becouse of the error handle by the mapStateToProps
    - `TypeError: Cannot read property 'map' of undefined`

6. add test of the button
    ```js
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    ```

7. we simulate the saveButton click but we have this error 
    - `TypeError: Cannot read property 'saveCourse' of undefined`
    - we can add an empty course the on from `mapStateToProps`
    - and use the spread operator on props new defined  object
    ```js
    const props = {
        authors: [],
        course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    ```

8. we have a problem with the saveCourse action so we add in the props as a empty function that just resolve the promise
    ```js
    const props = {
        authors: [],
        actions: { saveCourse: () => {return Promise.resolve();}},
        course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
    };
    ```
9. set the expect to the errors title
    - `expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');`
    - we have an error so we must define the validation in the saveCourse

10. define validation in the saveCourse and define the function
    ```js
    courseFormValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.course.title.length < 5){
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors:errors});
        return formIsValid;
    }

    saveCourse(event){
        event.preventDefault();
        if (!this.courseFormValid()){
            return;
        }
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
            });
        }
    ```

11. test complete code
    ```js
    import React from 'react';
    import expect from 'expect';
    import { mount, shallow } from 'enzyme';
    import {ManageCoursePage} from './ManageCoursePage';


    describe('Manage Course Page', () => {
        it('sets error message when trying to save empty title', () => {
            const props = {
                authors: [],
                actions: { saveCourse: () => {return Promise.resolve();}},
                course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
            };
            const wrapper = mount(<ManageCoursePage {...props}/>);
            // the save button is the last input
            // we could grab it by class or id as well if it have any
            const saveButton = wrapper.find('input').last();
            //confirmar que es el button
            expect(saveButton.prop('type')).toBe('submit');
            saveButton.simulate('click');
            expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
        });

        
    });
    ```

## Testing mapStateToProps

- Testing mapStateToProps via extraction

1. take out the `authorsFormattedForDropdown` function form the ManageCoursePage.js mapStateToProps

2. create a folder calle `selectors`
    - good for complicate data manipulation 
    - good for manipulating code 

3. create a file called `selectors.js` 
    - we can create authorsSelectors and courseSelectors files if the one file gets to big
4. paste the function as it can be exported
    ```js
    export function authorsFormattedForDropdown(authors){
        return authors.map(author => {
            return {
                value: author.id,
                text: author.firstName + ' ' + author.lastName
            };
        });
    }
    ```

> Reselect to mimalize functions recommends placing your selectors in a folder caller selectors as well, if we use relect this functions only will rerun when it gets new parameters 

5. import it in the `ManageCoursePage.js` and use it pass the parameters
    ```js
    import {authorsFormattedForDropdown} from '../../selectors/selectors';

    return{
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    };
    ```


- consider just extract the complicated pieces into separate selectors
- which is really just a name for plain pure functions that are easy to test.
- consider use reselect if the functios is expensive to run

## Testing Action Creators

- pretty straigth forward
- create the test file `courseAction.test.js`
```js
import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

// Test a sync action
describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_CORUSE_SUCCESS action', () =>{
            //arrange
            const course = {id:'clean-code', title:'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };

            //act
            const action = courseActions.createCourseSuccess(course);
            
            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});
```

## Testing Reducers

> people who neves wrote unit tests for front-end apps started writting them becauseit is just so easy to test reducers

- dont need to mock any dependencies or simulate ajax
- you can just call the reducer with a state and an action and assert that irs output matches exactly what you expect
- esay as given this input, assert this output
- reducer have no side effect (easy to understand and test)
- so simple that you can even automate the creation of reducer tests using a library called `redux test recorder`

```js
//courseReducer.test.js
import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        //arrange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ]; 
        
        const newCourse = {title: 'C'};
        
        const action = actions.createCourseSuccess(newCourse);
        
        //act 
        const newState = courseReducer(initialState, action);
        
        // assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        
        //arrange
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ]; 
        
        const course = { id: 'B', title: 'New Title' };
        const action = actions.updateCourseSuccess(course);
        
        //act 
        const newState = courseReducer(initialState, action);
        //find the object with id.B
        const updatedCourse = newState.find(a => a.id == course.id);
        //find the object with id.A to check later its title didnt change
        const untouchedCourse = newState.find(a => a.id == 'A');

        // assert
        expect(updatedCourse.title).toEqual('New Title');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });
});
```

## Testing Thunks

- handle asynchrony
- often dispatch multiple actions
- often interact with web API 

- Need to Mock two things:  
    - Store: with `redux-mock-store`
    - HTTP calls with `nock` which stands for Node mock.


1. import the necessaries things
    ```js
    import thunk from 'redux-thunk';
    import nock from 'nock';
    //let us configure a muck store
    import configureMockStore from 'redux-mock-store';
    ```

2. configure middleware
    ```js
    //only middleware we need is thunk
    const middleware = [thunk]; 
    // configureMockStore takes and array of middleware
    const mockStore = configureMockStore(middleware);
    ```
3. set the async
    -important with nock that after each call, we call cleanAll(), performs a clean up after each one of out tests is run 
    ```js    
    describe('Async Actions', () => {
        afterEach(() => {
            nock.cleanAll();
        });
    ```
4. set the it in mocha with the done
    - note we pass a callback function called done to mocha
    - Call this function when async work is complete
    ```js
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {...}
    ```

5. using nock to simulete a ajax call
    - here `nock('https://example.com')` we should define the precise url for this test  
        ```js
        nock('https://example.com')
            .get('/courses')
            .reply(200,{body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});
        ```
        - will return this fake response instead
        - so i can hard-code in the response that i'd like to receive instead of making an actual HTTP call to the address that i specify
        - carefull with the delay when no using nock

6. declare array of actions that we are expecting
    ```js
        const expectedAction = [
            {type: types.BEGIN_AJAX_CALL},
            //expect this payload (body) to be part of load courses success
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];
    ```

7. put our mock store to use
    ```js
    const store = mockStore({courses: []}, expectedAction); 
    ```

8. dispatch our store
    ```js 
    store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            //calls back that we define above 
            //that tells mocha async work is complete
            done();
        });
    ```

    - end with `done()` the calls back that we define above that tells mocha async work is complete

9. complete test in `courseAction.test.js` inside `describe('Course Actions', ()`
    ```js
    //test for thunks

    //only middleware we need is thunk
    const middleware = [thunk]; 
    // configureMockStore takes and array of middleware
    const mockStore = configureMockStore(middleware);


    describe('Async Actions', () => {
        afterEach(() => {
            nock.cleanAll();
        });


    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        // Here's an example call to nock.
        // nock('https://example.com')
            // .get('/courses')
            // .reply(200,{body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});
       
        // declare array of actions that we are expecting
        const expectedAction = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];

        //put our mock store to use
        const store = mockStore({courses: []}, expectedAction); 

        //dispatch our store
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });

    });

    ```

- advantage of using mock api: we can run our test tha utilize the mock data, and the willrun extremely fast and reliably becouse the data is static and will be held in memory.

## Testing the Redux Store

### Writing an automated test of the Redux store

- when testing the store we're really writing an integration test rather than a unit test 
- our goal is to assure that our actions, the store, and our reducers are interacting together as expected

### Integration Testing the Store

1. import necessary dependencies
    ```js
    import expect from 'expect';
    import {createStore} from 'redux';
    import rootReducer from '../reducers';
    import initialState from '../reducers/initialState';
    import * as courseActions from '../actions/courseActions';
    ```


2. test that our action creators, our store and our reducers work together as expected to create course

    ```js
     describe('Store', () => {
         it('Should handle creating courses', () => {...}
     }
    ```

3. make the arrange
    ```js
    const store = createStore(rootReducer, initialState);
    const course = {
        title: "Clean Code"
    };
    ```

4. create the action 
    - `const action = courseActions.createCourseSuccess(course);` with this we a referece to the action creator  so we can call our dispatch function in our store and pass it the action that we just set up 
    ```js
    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);
    ```
    - here we could dispatch multiple actions and assert on result updateCourseSuccess action and then assert that the store has two courses with the expected value

5. create the assert
    ```js
    // assert
    const actual = store.getState().courses[0];  
    const expected = {
        title: "Clean Code"
    };

    expect(actual).toEqual(expected);
    ```
    - gonna use the getState method so we can write our assertions 
    - we're going to store is the actual result of what is now stored in our store

6. Complete test code
    ```js
    import expect from 'expect';
    import {createStore} from 'redux';
    import rootReducer from '../reducers';
    import initialState from '../reducers/initialState';
    import * as courseActions from '../actions/courseActions';

    describe('Store', () => {
        it('Should handle creating courses', () => {
            // arrange 
            const store = createStore(rootReducer, initialState);
            const course = {
                title: "Clean Code"
            };

            // act
            const action = courseActions.createCourseSuccess(course);
            store.dispatch(action);

            // assert
            const actual = store.getState().courses[0];  
            const expected = {
                title: "Clean Code"
            };

            expect(actual).toEqual(expected);
        });
    });
    ```

## Summary

### Tested
- Connected React components
- Redux
    - Actions creators
    - Thunks
    - Reducers
    - Store (integration test)