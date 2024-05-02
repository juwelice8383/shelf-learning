import React, { Component, Fragment } from 'react';
import NavBars from '../components/NavBars/NavBars';
import HeaderCommon from '../components/HeaderCommon/HeaderCommon';
import ServiceForm from '../components/ServiceForm/ServiceForm';
import FooterTop from '../components/FooterTop/FooterTop';

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBars />
                <HeaderCommon pagetitle = "Contact Us" />
                <ServiceForm />
                <FooterTop />
            </Fragment>
        );
    }
}

export default ContactPage;