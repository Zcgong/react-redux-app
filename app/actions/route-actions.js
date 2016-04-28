/**
 * Created by kenny on 16/4/28.
 */
'use strict';
import * as types from './action-types';

export function Focus(scene) {
    return {type: types.FOCUS_ACTION, scene};
}