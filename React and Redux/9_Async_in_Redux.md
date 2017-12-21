## Intro

- Why a mock API?
- Async libraries
- Implement Thunks

## Why a mock API?


- Start before the API existm,
    - First, this pattern allows you to start development immediately, even if the APIs that you need to comsume haven't been created yet.
    - as long as you can agree with the API team on the shape of the data that the final API will return

- Independence
    - helps move independently when a separate team is handling the web APIs
    - not related to the developers developing code in order to build the UI 
    - if i'm also building the APIs, then i get to decide when to do so.
     its effectively the rule of coding to an interface rather than an implementation

- Backup Plan
    - dont have to stop development
    - can just point  to the mock API and keep working

- Ultra-fast
    - can count on all responses being instantaneous if you like
    - not hampered by slow or unreliable API calls in the early stages of development

- Test slowness
    - allows you to control the speed of responses 
    - can get a feel how the app performs really slow or really quick 

- Aids testing
    - jandy tool for automated testing
    - since the data is local its both fast and realiable. dont have to mock calls since your mok api is already mock
    - since the data is deterministic you can even write test that utilize the data, and the wont be slow since the tests are local.    
    - All data is sitting in memory 

- Poin to the real API later
    - point to the real API by changing the import at the top of your file
    - you could even check a centrilzed config that allow yu to toggle between the mock and real APISs via single setting

## Async Library Options

### Async
Redux
- actionsare synchronous and must return an object

|Flux|Redux|
|--|--|
|Handed in action|?|

### Redux Async Libraries

#### redux-thunk
- allow return funtions from you action creators intead of object

#### redux-promise
- new alternative middleware library that uses Flux standard actions to bring clear conventions to async calls
- least popular of the three

#### redux-saga
- uses ES6 generators and offers an impressive amount of power with what's bassically a rich domain-specific lenguage for dealing with asynchrony.


### Comparasion

|Thunks|Sagas|
|--|--|
|functions: return functions instead of objects, wraps an asynchronous operation in a function|generators: functions that can be paused and resumed later|
|Clunky to test:have to mock api calls, not easy hooks for observin and testing individual steps in the asynchronous flow|Easy to test: assert on their effectcs because they simply return data, dont mock anything, test are generally more readable and clear|
|Easy to learn|Hard to learn: generators and a rather large API|

#### Generators

- functions that can be paused and resumed later
- contain multiple yield statments
- at each yield, the generator will pause

## Thunk Overview

- normally we only return objects from our action creators
- with redux-thunk  we can return a function
- thunk is a computer science term
- thunk is a function that wraps an expression in order to delay its evaluation

### Example
- deleteAuthor function is wrapping our dispatch function so that dispatch can run later
```js   
export function deleteAuthor(authorId)
{
    //return function
    return dispatch => {
        return AuthorApi.deleteAuthor(authorId).then(()=>{
            //calling regular action creator called delteAuthor
            dispatch(deleteAuthor(authorId));
        }).catch(handleError); 
    }
}
```

## Mock API Setup
