// This file is going to hold our course-related actions creatos
// creates actions 
// convenience function, returns an action
// only requirement of an actions is that it has a type property

import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course};
}

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
    // a thunk always return a function that accepts a  dispatch
    return function (dispatch) {
        // this return a promise so i can handle it here
        // return couldBeAnAjaxCall.then(courses => {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
        // handling errors could be by a dedicated action creator
    };
}
//with this approach we only have to change the import to the real api