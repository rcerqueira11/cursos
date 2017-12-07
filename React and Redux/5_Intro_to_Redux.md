# Intro To Redux

## Intro 
- Do i need Redux?
- 3 Principles
- Flux vs Redux
- Redux Flow

## Do i need Redux?

- Vanilla JS: Simple app 
- JQuery: Manipulate DOM, Make AJAX calls, handle interactivity
- React: 
    - writting in vanilla js or jQuery gets painful
    - manage increasing  complexity in  our apps

#### IF:

- Data flow get more complex
- Display the same data in multiple places
- Have large number of potential state changes are hard to manage
- May Find helpful to handle state changes in a single spot
    - for consistency
    - testability
    - and your own sanity

### When Do I Need Redux

- Complex data flows
- Inter-component communication
- Non-heirarchical data
- Many actions
- Same data used in multiple places 

> `"...if you aren't sure if you need it, you don't need it."`

## Three Core Redux Principles

### **One immutable store**
- all aplications states are here (state can't be changed)
- aids debugging
- supports server rendering
- makes things like undo/redo easily possible

### **Actions trigger changes**
- only way to mutate state is to emit an action, which describes a user's intent.

### **Reducers update state**
- State is changed by pure functions
- Called reducers 
- Accepts the current state and returns a new state. 


## Flux Similarities

``` 
Data flows down 
Actions flow up 
```

- Enforce uniderctional data flows
- Define actions of how state can be change
    - action creators
    - action types 
- Stores as state
    - Redux has a single store
    - Flux allows multiple

## Flux Differences

### Redux New Concepts

#### **Reducers**

- function that take the current in a action and then return a new state
- pure functions

#### **Containers**

- React components
- their use is specific
- contain the necessary logic for marshalling data and actions

### **Immutability**


### Flux vs Redux

#### Flux

Action -> Dispatcher ->  Store -> React -> Action

- Stores are notified by the dispatches
- Flux uses a singleton dispatcher to connect actions to stores
- Stores use EventEmitter to connect to the dispatcher
- Each stores tha wants to know about actions need to explicity connect itself to the dispatcher typically using EventEmitter

#### Redux

Action -> Store -> React -> Action
          <-> Reducers

- Relies on pure functions called reducers
- Does NOT need a dispatcher
- Pure functions are easy to compose so no dispatches is necessary 
- Each actions is ultimately handled by one or more reducers which update the single store
- Since state is immutable in redux, the reducer returns a new updated copy of state, which updates the store. 

##### reducer
- how state should change by a given action
- accpets the current state and returns an action

|**Flux**|**Redux**|
|--|--|
|Stores contain state and change logic|Sore and change logir are separete|
|Multiples stores (User,Product store)|One store (simplicity, avoid repeat data, communication between stores)|
|Flat and disconnected stores (comunicate with WaitFor function)|Single store with hierarchical reducers (reducers can be nested via functional composition, just like react components)|
|Singleton dispatcher (connect actions to the store)|No dispatcher (single store just passes actions down to the reducers tha you define)|
|React components subscribe to stores (using OnChange handlers and EventEmitter)|Container components utilize connect (react-redux connect your react components to the Redux store automatically)|
|State is mutated (manipulate state directly)|State is immutable (return update copy state rather than manipulatin it directly)|
 

#### React-Redux 

- Contains a Connect method which generates a top-level React component that's connected to your actions and store. 
- Every time the store's state changes, it calls a function that trigger a re-render on the component

## Redux Flow Overview

Lets look at how actions, reducers, the sotre, and container component will interact to create uniderectional dataflow

Action
- Describe user intent
- object witha type propery (require) and some data 
- example `{ type: RATE_COURSE, rating: 5 }`

Reducer
- handle actions
- function that returns a new state
- Typically contains a switch statement that checks the type of the action passed, this determines what new state should be returned
- SWITCH  determines what new state should be returned
- Once this is new state is returned from a reducer, the store is updated.

```js
function appReducer (state = defaultState, action){
    switch(action.type){
        case RATE_COURSE:
        // return new state
    }
}
```

React

- re-renders any components that are utilizing the data
- react-components are connected to the store using React-Redux

``` 
Notified via React-Redux
```

## Summary 

- If you need Redux, you'll know it
- 3 Principles
    - Immutable Store
    - Actions trigger changes
    - Reducers return updated state
- Flux vs Redux
- Unidirectional Redux Flow