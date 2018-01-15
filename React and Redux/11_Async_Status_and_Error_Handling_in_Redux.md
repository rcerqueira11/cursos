## Intro

- The Issues
    - No initial loading indicator
    - No feedback upon clicking save
    - API fails silently
- Track and display async call status
    - like AJAX calls to the server
- Error handling
    - elegantly adress errors that may occur when making API calls in our thunks

## Create Preloader Component

1. we will create a component of moving dots
    - common create file `LoadingDots.js`
    ```js
    import React,{PropTypes} from 'react';

    class LoadingDots extends React.Component{
        constructor(props,context){
            super(props, context);
            this.state = {frame: 1};
        }

        componentDidMount(){
            this.interval = setInterval(()=>{
                this.setState({
                    frame: this.state.frame + 1
            });
            },this.props.interval);
        }

        componentWillUnmount(){
            clearInterval(this.interval);
        }

        render(){
            let dots = this.state.frame % (this.props.dots + 1);
            let text = '';
            while (dots > 0){
                text += '.';
                dots--;
            }
            return <span {...this.props}>{text}&nbsp;</span>;
        }
    }

    LoadingDots.defaultProps ={
        interval: 300,
        dots : 3
    };

    LoadingDots.propTypes ={
        interval: PropTypes.number,
        dots: PropTypes.number
    };



    export default (LoadingDots);
    ```

2. import it to the header.js
    ```js
    import LoadingDots from './LoadingDots';
    const Header = () => {
        return (
            <nav>   
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "} 
                <Link to="/courses" activeClassName="active">Courses</Link>
                {" | "} 
                <Link to="/about" activeClassName="active">About</Link>
                <LoadingDots interval={100} dots={20}/>
            </nav>
        );
    };
    ```

## Create Ajax Status Actions

1. Create `ajaxStatusActions.js`
    ```js
    import * as types from './actionTypes';

    export function beginAjaxCall() {
        return {type: types.BEGIN_AJAX_CALL};
    }
    ```

2. Create the const in `actionTypes.js`
    ```js
    export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL'; 
    ```

3. Update our initial state of the application to track the number of ajax calls in progress 
    ```js
    export default {
        authors: [],
        courses: [],
        ajaxCallsInProgress: 0
    };
    ```

##  Create Ajax Status Reducer

1. Create ajax reducer
    ```js
    import * as types from '../actions/actionTypes';
    import initialState from './initialState';

    function actionTypesEndsInSuccess(type) {
        return type.substring(type.length - 8) == '_SUCCESS';
    }

    export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
        if(action.type == types.BEGIN_AJAX_CALL){
            return state + 1;
        } else if (actionTypesEndsInSuccess(action.type)){
            return state -1;
        }

        return state;
    }
    ```

2. Add it to the root reducer

    ```js
    // root reducer
    import {combineReducers} from 'redux';
    import courses from './courseReducer';
    import authors from './authorReducer';
    import ajaxCallsInProgress from './ajaxStatusReducer';

    const rootReducer = combineReducers({
        courses,
        authors,
        ajaxCallsInProgress
    }); 

    ```

## Call Begin Ajax in Thunks

1. import it and add it to the funcitons in the nameActions.js
    ```js
    import {beginAjaxCall} from './ajaxStatusActions';
    ```

2. add it to the functions as a dispatch
    ```js
    export function loadCourses(){
        return function (dispatch) {
            dispatch(beginAjaxCall());
        ...}}
    export function saveCourse(course) {
        return function (dispatch, getState) {
            dispatch(beginAjaxCall());
        ...}}
    ```
    - this could be done by adding it to the Thunk Api code but this is helpfull in the way that if yo wish no to show in some places it can be done like `optimistic delete`

## Hide Preloader Based on Status

1. Change our top level component to a connect component `app.js`
    ```js
    import React, {PropTypes} from 'react';
    import Header from './common/Header';
    import {connect} from 'react-redux';

    class App extends React.Component {
        render() {
            return (
                <div className="container-fluid">
                    <Header 
                        loading={this.props.loading}
                    />                
                    {this.props.children}
                </div>
            );
        }
    }

    App.propTypes = {
        children: PropTypes.object.isRequired
    };

    function mapStateToProps(state, ownProps){
        return {
            loading: state.ajaxCallsInProgress > 0
        };
    }

    export default connect(mapStateToProps)(App);
    ```

2. Change on the header.js 
    ```js
    import React, {PropTypes} from 'react';
    import {Link, IndexLink } from 'react-router';
    import LoadingDots from './LoadingDots';

    const Header = ({loading}) => {
        return (
            <nav>   
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "} 
                <Link to="/courses" activeClassName="active">Courses</Link>
                {" | "} 
                <Link to="/about" activeClassName="active">About</Link>
                {loading && <LoadingDots interval={100} dots={20}/>}
            </nav>
        );
    };

    Header.propTypes = {
        loading: PropTypes.bool.isRequired
    };

    export default Header;


    ```

    - ` {loading && <LoadingDots interval={100} dots={20}/>}` leans on the short-circuiting nature of the logical operator AND. the right side will only evaluate if this left-hand side is true

## Use Promises to Wait for Thunks

- When we save the course it redirect directly to solve this we can use a promise to redirect after it save

1. create the promise
    ```js 
    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect());
    }
    ```
    
2. create the function
    ```js 
    redirect(){
        this.context.router.push('/courses');
    }
    ```

## Create Form Submission Loading Indicator

- when to use local state?
    - is usaeful because this is fleeting data that the rest of the app will not care about 

1. Set a saving in the state
    ```js
    this.state ={
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

    ```

2. add it `saveCourse` after the `event.preventDefault()` 
    ```js
    saveCourse(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect());
    }
    ```   

3. add it before the redirect in the `redirect()` function
    ```js
    redirect(){
        this.setState({saving: false});
        this.context.router.push('/courses');
    }
    ```

4. we pass it to our course form to have the info available
    ```js
    <CourseForm 
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
    />
    ```
5. we see it in the CourseForm

    ```js
    <input 
        type="submit"
        disabled={saving}
        value = {saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    ```

## Display save notification

- Using toastr
1. we need to import toastr minified css in our application entry point `index.js`
2. `import '../node_module/toastr/build/toastr.min.css'`
3. we in import it in our ManageCoursePage.js `import toastr from 'toastr'`
4. we add it in the redirect
    ```js
    redirect(){
        this.setState({saving: false});
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }
    ```

## Error Handling

- two ways of handling the errors
    - we could dispatch a saveCourse error action right here and pass it the error message that we've received from our API  call
    - we can handle the rejected promise at the call site, which in this case is the ManageCoursePage [we'll use this]

1. add a catch to save course 
    ```js
    saveCourse(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
            });
        }
    ```

2. to cancel the ajax loading
    1. go to action types create the const
        - `export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR'; `

    2. add the ajaxStatusAction
        ```js
        export function ajaxCallError() {
            return {type: types.AJAX_CALL_ERROR};
        }
        ```
    3. put it to use in the ajaxStatusReducer  
        ```js
        export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
            if(action.type == types.BEGIN_AJAX_CALL){
                return state + 1;
            } else if (action.type == types.AJAX_CALL_ERROR ||
                actionTypesEndsInSuccess(action.type)){
                return state -1;
            }

            return state;
        }
        ```
    4. dispatch it in out `courseAction.js`
        ```js
        import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

        export function saveCourse(course) {
        return function (dispatch, getState) {
            dispatch(beginAjaxCall());
            return courseApi.saveCourse(course).then(savedCourse => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)):
                dispatch(createCourseSuccess(savedCourse));
            }).catch(error => {
                dispatch(ajaxCallError(error));
                throw(error); 
            });
        };
        }
        ```

## Summary

- Displaying and tracking async status
- Handling errors
