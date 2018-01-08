// This file is going to hold our course-related actions creatos
// creates actions 
// convenience function, returns an action
// only requirement of an actions is that it has a type property

import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';
// export function createCourse(course) {
//     return { type: types.CREATE_COURSE, course};
// }

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses(){
    // a thunk always return a function that accepts a  dispatch
    return function (dispatch) {
        dispatch(beginAjaxCall());
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

//saveCourse action

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)):
            dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
           throw(error); 
        });
    };
}