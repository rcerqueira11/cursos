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

## Syncronous vs Asyncronous Action Creators

- actually we have syncronous actions
- we have to wait to the ajax in the action
- we use `Redux Thunk`

`Redux Thunk`: used to handle any asynchornous action creators

### **Action creators rules**

|Normal Action| Action with Thunk|
---|----|
| Action creators are functions | Action creators are functions |
| Must return an action | Must return an function |
| An action is an object with a 'type' property | This function will be called with 'dispatch' |


### createStore

createStore(
  reducers,
  {}, if you want an initial state
  applyMiddleware(ReduxThunk) store enchancer
  )


##

action creator ->
actions creator returns a function ->
redux thunk sees that we return a function and calls it with dispatch ->
we do our login request ->
...wait ->
...wait ->
request complete, user logged in ->
.then runs ->
deispatch our action

- inside of our .then() we will manually dispatch our action

- here we send in the dispatch the action after the promise resolve

```js
export const loginUser = ({email, password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: user
            })
        })
    }
}
```

- now we wired to login form

1. we import it `import { emailChanged, passwordChanged, loginUser } from "../actions";`

2. we added to the export

    ```js
    export default connect(mapStateToProps, {
      emailChanged,
      passwordChanged,
      loginUser
      })(LoginForm);
    ```
3. add the function to the button
    ```js
      <CardSection>
          <Buttom
          functionOnPress={this.onButtonPress.bind(this)}
          buttomName={"Log in"}
          />
      </CardSection>
    ```

4. create the function
    ```js
      class LoginForm extends Component {
        ...

        onButtonPress(){
          const { email, password } = this.props;

          this.props.loginUser({ email, password})
        }
    ```

- we can dispatch AS MANY ACTIONS we like from a SINGLE ACTION CREATOR

Error:
```js
case LOGIN_USER_SUCCESS:
  asdasd;
  return { ...state, user: action.payload, error: '' };

```

- throws errors fail and is catched and go to the next .catch or next section of the program and we can see this kind o error with getting and console log the error

```js
catch((error) => {
  console.log(error)
  firebase.auth().createUserWithEmailAndPassword(email, password)
  ...
```

## To delete the sign up input values you can

```js
 case LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.payload,
        error: '',
        loading: false,
        email: '',
        password: '',
      };
```

but its like the same state that we have in the initial state so we could just set it like

```js
  return { ...state, ...INITIAL_STATE, user: action.payload  };
```

##  Dealing with navigation

- react-native-router-flux
- `npm install --save react-native-router-flux`

this library works with Scenes, son for login , employee, employeeCreate will be 3 scenes

- `key`: call actions.login() to show this screen
- `component`: show the component '{componentName}'
- `titile`: make a navbar and give it a title of '"titleInBrackets"'
- `initial`: thisi is the first screen to show

```js
<Scene
  key="login"
  component={LoginForm}
  title="Login"
  initial
/>

```