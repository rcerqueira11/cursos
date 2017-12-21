// This file is going to hold our course-related actions creatos
// creates actions 
// convenience function, returns an action
// only requirement of an actions is that it has a type property

import * as types from './actionTypes';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course};
}