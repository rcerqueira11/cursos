import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };
        //binding them to the this of our course page component

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        // alert(`Saving ${this.state.course.title}`);
        this.props.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
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
        createCourse : course => dispatch(courseActions.createCourse(course)) 
    };
}

// export default CoursesPage;
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

