/**
 * Created by kenny on 16/4/26.
 */
//http://camsong.github.io/redux-in-chinese/docs/basics/Reducers.html

'use strict';

import * as types from '../actions/action-types';

let initialState = {
    scene: {}
};

export default function routes(state = initialState, action) {
    switch (action.type) {
        case types.FOCUS_ACTION:
            return Object.assign({}, state, {scene: action.scene});
        default:
            return state;
    }
}