export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            // [WRONG] immutable state
            // state.push(action.course);
            // return state;
            // [CORRECT] Spread operator
            debugger;
            return [...state,
                Object.assign({}, action.course)
            ];
    
        default:
            return state;
    }
}