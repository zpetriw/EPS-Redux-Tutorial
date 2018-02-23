import courseApi from '../api/mockCourseApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
    return function (dispatch) {
        // This is used to track whether an ajax call is in progress so we can display a loading symbol. 
        dispatch(beginAjaxCall());
        // This return a promise. 
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

// If an ID is passed in, you will update a course. 
// Otherwise you will create a new one. 
export function saveCourse(course) {
    return function (dispatch, getState) {
        // This is used to track whether an ajax call is in progress so we can display a loading symbol. 
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}