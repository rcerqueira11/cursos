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