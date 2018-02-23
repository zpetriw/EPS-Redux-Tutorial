import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return function(dispatch) {
        // This is used to track whether an ajax call is in progress so we can display a loading symbol. 
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}