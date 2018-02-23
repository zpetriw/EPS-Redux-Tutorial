import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// Add all new reducers to this root reducer!
const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;