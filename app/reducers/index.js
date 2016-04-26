/**
 * Created by kenny on 16/4/26.
 */
'use strict';

import {combineReducers} from 'redux';
import routes from './routes';

let rootReducer = combineReducers({
    routes
});

export default rootReducer;