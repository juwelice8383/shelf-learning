import React, { Component, Fragment } from 'react';
import NavBars from '../components/NavBars/NavBars';
import HeaderCommon from '../components/HeaderCommon/HeaderCommon';
import Services from '../components/Services/Services';
import ServiceForm from '../components/ServiceForm/ServiceForm';
import FooterTop from '../components/FooterTop/FooterTop';

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBars />
                <HeaderCommon pagetitle= "Get My Service" />
                <Services />
                <ServiceForm />
                <FooterTop />
            </Fragment>
        );
    }
}

export default ServicePage;
