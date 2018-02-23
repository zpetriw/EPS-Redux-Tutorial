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

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
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
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    //debugger;
    return {
        // This is determined by the choice we make in our Reducer in index.js. 
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// Longform alternative:
// const connectStateAndProps = connect(mapStateToProps, mapDispatchTopProps);
// export default connectStateAndProps(CoursesPage);

//alert(`Saving ${this.state.course.title}`);

/* <h2>Add Course</h2>
<input
    type="text"
    onChange={this.onTitleChange}
    value={this.state.course.title} />

<input 
    type="submit"
    value="Save"
    onClick={this.onClickSave} /> */

// onTitleChange(event) {
//     const course = this.state.course;
//     course.title = event.target.value;
//     this.setState({course: course});
// }

// onClickSave() {
//     this.props.actions.createCourse(this.state.course);
// }

// Put the binds up here instead of in the 'onChange' so that 
        // we are not re-binding each time we re-render.
        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);

        
// this.state = {
//     course: {title: ""}
// };