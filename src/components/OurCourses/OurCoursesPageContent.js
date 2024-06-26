import React, { Component, Fragment } from 'react';
import '../../asset/css/style.css';
import { Container, Row, Col  } from 'react-bootstrap';
import CourseLogo from '../../asset/images/OurCourses.jpg'

class OurCoursesPageContent extends Component {
    render() {
        return (
            <Fragment>
            <Container className='OurCoursesContainer pb-5'>
            <h2 className='OurCoursesHeader text-center py-5'>OUR COURSES</h2>
            <Row>
                        <Col >
                        <img className='CoursesImage' src={CourseLogo} alt='' width={250}></img>
                        </Col>
                        <Col className='mb-3'>
                        <h3 className='CourseHeading'>Web Development</h3>
                        <p className='CourseContent'>I build native and cross platform mobile app for your business</p>
                        <h4 className='CourseDetails'>Details</h4>
                        </Col>
                        <Col  >
                        <img className='CoursesImage' src={CourseLogo} alt='' width={250}></img>
                        </Col>
                        <Col>
                        <h3 className='CourseHeading'>Web Development</h3>
                        <p className='CourseContent'>I build native and cross platform mobile app for your business</p>
                        <h4 className='CourseDetails'> Details</h4>
                        </Col>
            </Row>

            <Row className='mt-5'>
                        <Col  >
                        <img className='CoursesImage' src={CourseLogo} alt='' width={250}></img>
                        </Col>
                        <Col className='mb-3'>
                        <h3 className='CourseHeading'>Web Development</h3>
                        <p className='CourseContent'>I build native and cross platform mobile app for your business</p>
                        <h4 className='CourseDetails'>Details</h4>
                        </Col>
                        <Col  >
                        <img className='CoursesImage' src={CourseLogo} alt='' width={250}></img>
                        </Col>
                        <Col>
                        <h3 className='CourseHeading'>Web Development</h3>
                        <p className='CourseContent'>I build native and cross platform mobile app for your business</p>
                        <h4 className='CourseDetails'>Details</h4>
                        </Col>
                       
            </Row>

            <Row className='mt-5'>
                        <Col  >
                        <img className='CoursesImage' src={CourseLogo} alt='' width={250}></img>
                        </Col>
                        <Col className='mb-3'>
                        <h3 className='CourseHeading'>Web Development</h3>
                        <p className='CourseContent'>I build native and cross platform mobile app for your business</p>
                        <h4 className='CourseDetails'>Details</h4>
                        </Col>
                        <Col  >
                        <img className='CoursesImage' src={CourseLogo} alt='' width={250}></img>
                        </Col>
                        <Col>
                        <h3 className='CourseHeading'>Web Development</h3>
                        <p className='CourseContent'>I build native and cross platform mobile app for your business</p>
                        <h4 className='CourseDetails'>Details</h4>
                        </Col>
                       
            </Row>
            </Container>
           </Fragment>
        );
    }
}

export default OurCoursesPageContent;