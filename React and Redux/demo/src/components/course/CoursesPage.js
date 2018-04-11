import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;
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
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
    // own props lets us access props that are being attached to this component
    // define an object that returns the property we would like to see expose in our component
    return {
        courses: state.courses
        //now im accesing the course data in our redux store 
        // .courses this is determinated by the choise we do in or reducer
    };
}


function mapDispatchToProps(dispatch) {
    // this dispatch will get injected in by the Connect function
    return {
        // createCourse : course => dispatch(courseActions.createCourse(course)) 
        actions : bindActionCreators(courseActions,dispatch)
    };
}

// export default CoursesPage;
// export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

