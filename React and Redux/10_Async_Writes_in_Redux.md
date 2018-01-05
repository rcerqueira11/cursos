## Intro

- Create Manage Course page
- Create reusable form inputs
- Popilat form via
    - mapStateToProps
    - componentWillReceiveProps

## Create Manage Course Page

- create ManageCoursePage.js 
- we create a new page, we need to update routing to support it
- route we set and id 
    - assume the second segment of the url contains the id
    ```js
            <Route path="course/:id" component={ManageCoursePage} />
    ```
    - in each case, we will map to the ManageCoursePage component
```js
import React,{PropTypes} from 'react';
import{connect} from 'react-redux';
import{bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class ManageCoursePage extends React.Component{
    constructor(props,context){
        super(props, context);
    }

    render(){
        return (
            <div></div>
        );
    }
}

ManageCoursePage.propTypes ={
    //myProp: Proptypes.string.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        state: state
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
```

## Create Manage Course Form

- destruct all the prorps here in the function
- CourseForm.propTypes should have the same number of desturctured props
 
```js
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// destruct all the prorps here in the function
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>

            <SelectInput 
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category} />
            

            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length} />
            
            <input 
                type="submit"
                disable={loading}
                value = {loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

//should have the same number of desturctured props
CourseForm.propTypes = {
    course: React.PropTypes.object,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;

```

## Crerate Form Input Components
- to see this step by step see the flux curse

- TextInput
    ```js
    import React, {PropTypes} from 'react';

    const TextInput = ({name,label,onChange,placeholder,value,error}) => {
        let wrapperClass = 'form-group';
        if (error && error.length > 0){
            wrapperClass += " " + 'has-error';
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <input
                        type="text"
                        name={name}
                        className="form-control"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}/>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        );
    };

    TextInput.propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string
    };

    export default TextInput;
    ```
- SelectInput
    ```js
    import React, {PropTypes} from 'react';

    const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <select 
                        name={name}
                        value={value}
                        onChange={onChange}
                        className="form-control">
                        <option value="">{defaultOption}</option>
                        {options.map((option) => {
                            return <option key={option.value} value={option.value}> {option.text}</option>;
                        })}
                    </select>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        );
    };

    SelectInput.propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        defaultOption: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.object)
    };

    export default SelectInput;

    ```

## Use Manage Course Form

- can only have one top-level element in my JSX so we nee to define a wrapper div right here
    ```js
    render(){
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course}/>
            </div>
        );
    }
    ```
- update mapStateToProps to pass an empty course
    ```js
    function mapStateToProps(state, ownProps){
        //course core structure
        let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
        return{
            course: course
        };
    }
    ```
- we need pass down mutable state to our form, set local state to our component in the contructor
    ```js
    <CourseForm 
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors}
    />
    ```

## Create Author Actions

```js
import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorsSuccess(authors){
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
    return dispatch => {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}
```

## Create Author Reducer

```js
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        default:
            return state;
    }
}
```

- we are hard coding an array so we should centralize our initial state
    - some people create in the reducer folders
    - some people create on a constant folders 
    - we centralize our declarations about what is in state

    ```js
    //initialState.js
    export default {
        authors: [],
        courses: []
    }
    ```

    ```js
    //implement
    //authorReducer.js
    import initialState from './initialState';
    export default function authorReducer(state = initialState.authors, action) {

    ```
    - the reason to do this is when you create more and more reducer, it becomes tricky to hold eactly what's n the store in your head 
    - its helpful to create a separeate piece of initial state that shows somebody this is what our store looks like
    - all these reducers are dealing with a slice of this store 
    - remeber to add any reducer you create to your root reducer 
    ```js
    // root reducer
    import {combineReducers} from 'redux';
    import courses from './courseReducer';
    import authors from './authorReducer';

    const rootReducer = combineReducers({
        courses,
        authors
    }); 

    export default rootReducer;
    ```
    - linked in the index.js of the app
    ```js
    import {loadAuthors} from './actions/authorActions';
    store.dispatch(loadAuthors());
    ```

## Map Author Data for Dropdown

1. Expose author as props in our component by adding it to our mapStateToProps fuctions
    - we cant simply pass the lis of authors as is
    - the shape of data that is in our store isnt a good fit fr placing in the drop-down
    - we need to translate the data comming from the api to something useful for the dropdow
    - the place to do such transformation is the mapStateToProps function
    ```js
    function mapStateToProps(state, ownProps){
        //course core structure
        let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

        const authorsFormattedForDropdown = state.authors.map(author => {
            return {
                value: author.id,
                text: author.firstName + ' ' + author.lastName
            };
        });

        return{
            course: course,
            authors: authorsFormattedForDropdown
        };
    }
    ```
2. Add it to .propTypes
    ```js
    ManageCoursePage.propTypes ={
        course: PropTypes.object.isRequired,
        authors: PropTypes.array.isRequired
    };
    ```

3. Now we can use it in the `<CourseForm allAuthors={[]}>`
    ```js
    class ManageCoursePage extends React.Component{
        constructor(props,context){
            super(props, context);
            
            this.state ={
                course: Object.assign({}, props.course),
                errors: {}
            };

        }

        render(){
            return (
                    <CourseForm 
                    allAuthors={this.props.authors}
                    course={this.state.course}
                    errors={this.state.errors}
                    />
            );
        }
    }   
    ```

## Create Form Change Handler

1. Create the `updateCourseState` in `class ManageCoursePage extends React.Component{}`
```js
updateCourseState(event){
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
}
```

2. Set it in the constructor 
    ```js
    this.updateCourseState = this.updateCourseState.bind(this);
    ```

3. Set it on the render CourseForm
    ```js
    <CourseForm 
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        course={this.state.course}
        errors={this.state.errors}
    />
    ```

## Create Save Course Thunk

1. Create the action in courseActions.js
    ```js
    export function saveCourse(course){
        return function (dispatch, getState) {
            return courseApi.saveCourse(course).then(savedCourse => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                    dispatch(createCourseSuccess(saveCourse));
            }).catch(error => {
            throw(error); 
            });
        };
    }
    ```
    - `getState` this is useful for cases where you are wanting to access the Redux store and get particular pieces of state out of it right here without having to pass it in as a parameter `useful in larger applications`

2. create `createCourseSuccess` and `updateCourseSuccess` 
    ```js
    export function createCourseSuccess(course) {
        return {type: types.CREATE_COURSE_SUCCESS, course}
    }

    export function updateCourseSuccess(course) {
        return {type: types.UPDATE_COURSE_SUCCESS, course}
    }
    ```

3. create the actionTypes
    ```js
    //actionTypes.js
    export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
    export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS'; 
    ```

## Handle Creates and Updates in Reducer

1. Check create course in `courseReducer.js`
    - dont do state.push remember state is immutable
    ```js
    case types.CREATE_COURSE:
            return [...state,
                Object.assign({}, action.course)
            ];
    ```
2. Create update course
    - since the state is immutable, we cant simply change the appropiate index in the array
    - we need to use the filter function (ES6) to get the list of all the courses except for the course thats being updated
    - `...` the spread operator in the front thats what create a brand new array out of the filtered results that are returned form filter
    ```js
    case types.UPDATE_COURSE_SUCCESS:
        return [
            ...state.filter(course => course.id !== action.course.id),
            Object.assign({},action.course)
        ];
    ``` 

## Dispatch Create and Update

1. Create the `saveCourse` function in `class ManageCoursePage extends React.Component{}`
    ```js
    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }
    ```

2. Create the corresponding bind in the `constructor`
    ```js
    this.saveCourse = this.saveCourse.bind(this);
    ```

3. Pass it in the CourseForm
    ```js
    <CourseForm 
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
    />
    ```

4. Add the actions to the propTypes validation
    ```js
    ManageCoursePage.propTypes ={
        course: PropTypes.object.isRequired,
        authors: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };
    ```

5. Go to CoursesPage.js and add the input button to add course
    ```js
    return (
        <div>
            <h1>Courses</h1>
            <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
            <CourseList courses={courses} />
        </div>
    );
    ```

6. Create the `redirectToAddCoursePage` function
    ```js
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }
    ```

7. bind the `redirectToAddCoursePage` in the constructor
    ```js
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    ```

## Redirect via React Router Context Redirect

1. We declare the contexTypes that we'd like to import on our component
    - since contextTypes is a static property, it has to be done after the class definition
    ```js
    ManageCoursePage.propTypes{};

    ManageCoursePage.contextTypes ={
        router: PropTypes.object
    };
    ```
    - declare `router: PropTypes.object` as optional to avoid a linitng warning when testing this component
    - context is a global variables that library authors use but we as library consumers should avoid to use 

2. We add it after we save the course in the `saveCourse` function
    ```js
    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }
    ```

## Populate Form via mapStateToProps

1. we need to see the url to know if there any id 
    - easy to do with ownProps
    - we can access some routing-related props populated by React Router based on the route defined for this component
    - read the course id in the `mapStateToProps`
    ```js
    const courseId = ownProps.params.id; //from the path   `/course/:id`

    ```
2. we create a if statement to validate if there is a courseId
    ```js
    if (courseId){
        course = getCourseById(state.courses, courseId);
    }
    ```

3. and we create the function `getCourseById`
    ```js
    function getCourseById(courses, id){
        const course = courses.filter(course => course.id == id);
        if (course.length) return course[0]; // since filter return an array we have to get the first element
        return null;
    }

    ```

4. we have a problem when we reload the page it does not have courses load yet so we add
    
    ```js
    if (courseId && state.courses.length > 0){
        course = getCourseById(state.courses, courseId);
    }
    ```

    - `&& state.courses.length > 0` to wait to the ajax to receive some courses and do not thorw an error
    - this problem resolve with lifecicle methods that is called `componentWillReceiveProps`

## Update State via componentWillReceiveProps   

1. add `componentWillReceiveProps` after the constructor
    - called anytime props have changed
    - as well as anytime that React thinks that props might have changed
    - thats why the validation
    ```js
    componentWillReceiveProps(nextProps) {
        if(this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }
    ```
    - `this.props.course.id != nextProps.course.id` if it hasn't changed, then dont run this part of the function
    - `this.setState({course: Object.assign({}, nextProps.course)})` this cant run all the time or it will end up overriding our state
    - we only want to update our props when we have ended up requesting a new course


## Summary

- Create Manage Course page
- Created reusable Bootstrap form input
- Populated form via
    - mapStateToProps
    - componentWillReceiveProps