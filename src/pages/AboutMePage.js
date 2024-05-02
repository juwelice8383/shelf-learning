import React, { Component, Fragment } from 'react';
import NavBars from '../components/NavBars/NavBars';
import HeaderCommon from '../components/HeaderCommon/HeaderCommon';
import AboutMyself from '../components/AboutMyself/AboutMyself';
import FooterTop from '../components/FooterTop/FooterTop';

class AboutMePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBars />
                <HeaderCommon pagetitle = "About Me" />
                <AboutMyself />
                <FooterTop />

            </Fragment>
        );
    }
}

export default AboutMePage;