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
export default function authorReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.auhtors;

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