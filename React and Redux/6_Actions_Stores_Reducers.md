## Intro

- Actions
- Store
- Immutability
- Reducers (how handle state updates)
 

## Actions

- event happening in the applications are called actions
- actions are just plain objects containing a description of an event
- must have a type propertie 
- should pass any serializable to json NOT functions or promises

### Action Creator

- typically actions creator have the same name as the action type
- Considered convenience functions because they're not required
- by using actions creator to create your actions, the spot where you dispatched the actions does not nedd to know the action creator structure.
- Whean actions are disparched, it ultimately affects what data is in the store

```js
rateCouse(rating){
    return { type: RATE_COURSE, rating: rating }
}
```

## Store


### Creating Redux Store

- calling createStore in the application's entry point  
- pass the createStore funtion to your reducer function

```js
let store = createStore(reducer);
```
- honors single responsibility principle 
- store simple stores data
- having a sige source of truth makes the application easier to manage and understand

### Redux Store

- store.dispatch(action)
- store.subscribe(listener)
- store.getState()
- replaceReducer(nextReducer)
    - useful to support hot reloading 

- there is no api for changing data in the store
- the store does not handle the actions that you dispatch

## Immutability

- instead of change the object you must return a new object that represents your application's new state

### What's Mutable in JS?

|**Immutable already!**|**Mutable**|
|--|--|
|Number|Objects|
|String|Arrays|
|Boolean|Functions|
|Undefined||
|Null||

```js
//Current State
state = {
    name: 'Cory House',
    role: 'author'
}

//Traditional App - Mutating State
state.role = 'admin'
return state;

//Returning new object. Not mutating state!
return state = {
    name: 'Cory House'
    role: 'admin'
}
```

### Create copies objects in javascript

- multiples way
- recomended Object.assign

#### Signature

```js
Object.assign(target, ...sources)
```
#### Example
- first param is the target
- then accepts as many source objects as you want

```js

Object.assign({}, state, {role:'admin'});

//specif

```
##### Description
```
Object.assign(
    empty-object, 
    mixing new object with our existing state, 
    changing role propertie to admin
    );
```

- Result is a statement effectively clone of our existing state object but with the role admin
- the fist parameter SHOULD BE AN EMPTY OBJECT
- if it does not have the empty object you will end mutating the state instead of creating one 
- need to use BABEL-POLYFILL

## Why Immutabiity?

- Clarity
- Perfomance
- Awesome Sauce


### Clarity

- "Huh, who changed that state?"
    - we know exactly where and how it happende
    - we're clear about what file to open to actually see state changes
    - Redux handle all state changes

### Performance 


```js
state = {
    name: 'Cory house'
    role: 'author'
    city: 'Kansas City'
    state: 'kansas'
    country: 'USA'
    ...
}
```
- redux can simply do a reference comparison
- if the old state isnt referencing the same object in memory then we know that the state has changed. (this is extremely efficient)
    ```js 
    if (prevStoreState !== storeState) ... 
    ``` 
- use the `shouldComponentUpdate` method to quicky bail out if nothing has changed
- React-Redux make your app more predictable and easier to reason about and improve performance

### Awesome Sauce (amazing debugging experience)

- Redux devtools extension in Chrome
- Time-travel debugging
- Undo/Redo
- Turn off individual actions
- Play interactions back

## Handling Immutability

### Handling Immutability State

- JavaScript's primitives are immutable

#### ES6

- Object.assign
- Spread operator

#### ES5

- Lodash merge
- Lodash extend
- Object-assign (on npm)

#### Libraries

- react-addons-update
- Immutable.js

### How do i enforce immutablility?

### Trust 

- teach the team to not mutate the state
- if someone does it will introduce a bug

### redux-immutable-state-invariant      

- displays an error if you try to mutate the state anywhere in your app
- be sure to do this just in dev becouse i would degrade performance in production

### Immutable.js

- creates immutable javascript data structures


## Reducers

- to change the store, you dispatch an action that is ultimately handled by a reducer

### What is a Reducer?

- its a funtion that takes state and an action and returns new state.

- `(state,action) => state`
```js
function myReducer(state,action){
    //return new state based on action passed
}
```

- Example incrementing counter
    ```js
    function myReducer(state,action){
       switch (action.type){
           case 'INCREMENT_COUNTER':
                //this mutate state
                //state.counter++;
                //return state;

                //this returns a copy
                return(Object.assign(
                    {},
                    state,
                    {counter: state.counter + 1})
                );
       }
    }
    ```
- Reducers must be pure functions

### Forbidden in Reducers

- Mutate arguments
- Perform side effects
    - API calss
    - routing transitions
- Call non-pure functions
    - date.now
    - math.random

- 1 Store. Multiple Reducers
- Manage slices of your state chenges via multiple reducers.    

### All Reducers are called on each dispatch

- All reduces must return untouches states the default if no switch case matched
- Only reducers that handle the type will do anything 
- Other reducer will return the state that was passed to them

### Reducer = "Slice" of state

- Each reducer handles its slice of state
- Each reduces is only passed its slice of state that only access the portion of state that it manages
- Multiple reducers allows youto handle changes to different pieces of the store in isolation
- makes state changes easy to understan and avoids issues with side effects
- all reducers together form the complete picture of what's in your store


> `"Write independent small reducer functions that are each resposiblefot updates to a specific slice of state. We call this pattern "reducer composition". A given action could be handled by all some, or none of them."`