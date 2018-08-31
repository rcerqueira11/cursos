const reducer = (state = [], action ) => {
  if (action.type === 'split_string'){
    return action.payload.split('');
  } else if (action.type === 'add_char'){

    return [ ...state, action.payload ]
  }

  return state;
};
const store = Redux.createStore(reducer);

store.getState();

const action = {
  type: 'split_string',
  payload: 'asdf'
}
const action2 = {
  type: 'add_char',
  payload: 'a'
}

// to run the action

store.dispatch(action);

store.getState();

store.dispatch(action2);

store.getState();