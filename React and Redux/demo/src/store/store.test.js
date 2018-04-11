import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

 describe('Store', () => {
     // test that our action creators, our store and eour reducers
     // work together as expected to create course
     // 
     it('Should handle creating courses', () => {
        // arrange 
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Clean Code"
        };

        // act
        const action = courseActions.createCourseSuccess(course);
        // with this we a referece to the action creator 
        // so we can call our dispatch function in our store
        // and pass it the action that we just set up
        store.dispatch(action);
        //here we could dispatch multiple actions and assert on result
        // updateCourseSuccess action and then assert that the store has 
        // two courses with the expected value

        // assert
        //gonna use the getState method so we can write our assertions 
        // we're going to store is the actual result of what is 
        // now stored in our store
        const actual = store.getState().courses[0];  
        const expected = {
            title: "Clean Code"
        };

        expect(actual).toEqual(expected);
         
          
     });
 });