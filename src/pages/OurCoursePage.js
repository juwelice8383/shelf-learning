import React, { Component, Fragment } from 'react';
import NavBars from '../components/NavBars/NavBars';
import HeaderCommon from '../components/HeaderCommon/HeaderCommon';
import OurCoursesPageContent from '../components/OurCourses/OurCoursesPageContent';
import FooterTop from '../components/FooterTop/FooterTop';


class OurCoursePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBars />
                <HeaderCommon pagetitle= "All Courses" />
                <OurCoursesPageContent />
                <FooterTop />
            </Fragment>
        );
    }
}

export default OurCoursePage;