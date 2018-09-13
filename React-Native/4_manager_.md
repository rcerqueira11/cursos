## Login in redux

Redux will take care of the all logic

ciclo

- User types something
- -> Call Action Creator with text
- -> Action Creator returns an action
- -> Action sent to all reducers
- -> Reducers calculates new app state
- -> State sent to all components
- -> Components rerender with new state
- --> Wait for new changes
- --> User Types some action

### Create a types.js file
- hold the constants of the application to avoid typos

```js
//auth

export const EMAIL_CHANGED = "email_changed";
export const PASSWORD_CHANGED = "password_changed";
```

## AuthReduces

We must return a new object with the change

```js
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: ''
}

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state
  }
}
```

