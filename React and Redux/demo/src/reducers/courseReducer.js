
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // [WRONG] immutable state
            // state.push(action.course);
            // return state;
            // [CORRECT] Spread operator
            return [...state,
                Object.assign({}, action.course)
            ];
    
        default:
            return state;
    }
}