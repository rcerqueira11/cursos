import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
//let us configure a muck store
import configureMockStore from 'redux-mock-store';

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

//test for thunks

//only middleware we need is thunk
const middleware = [thunk]; 
// configureMockStore takes and array of middleware
const mockStore = configureMockStore(middleware);


describe('Async Actions', () => {
    // important with nock that after each call
    // we call cleanAll()
    // performs a clean up after each one of out tests is run 
    afterEach(() => {
        nock.cleanAll();
    });

    // note we pass a callback function called done to mocha
    // Call this function when async work is complete

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        // Here's an example call to nock.
        // here we should define the precise url for this test  
        // nock('https://example.com')
            // .get('/courses')
            // .reply(200,{body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});
            // will return this fake response instead
            // so i can hard-code in the response that i'd like to receive 
            // instead of making an actual HTTP call to the address that i specify
       
        // declare array of actions that we are expecting
        const expectedAction = [
            {type: types.BEGIN_AJAX_CALL},
            //expect this payload (body) to be part of load courses success
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];

        //put our mock store to use
        const store = mockStore({courses: []}, expectedAction); 

        //dispatch our store
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            //calls back that we define above 
            //that tells mocha async work is complete
            done();
        });

    });
});