import React, { Component, Fragment } from 'react';
import NavBars from '../components/NavBars/NavBars';
import TopHeader from '../components/TopHeader/TopHeader';
import Services from '../components/Services/Services';
import Technology from '../components/Technology/Technology';
import TotalWorks from '../components/TotalWorks/TotalWorks';
import RecentProject from '../components/RecentProject/RecentProject';
import OurCourses from '../components/OurCourses/OurCourses';
import VedioSection from '../components/VedioSection/VedioSection'
import ClientReview from '../components/ClientReview/ClientReview';
import FooterTop from '../components/FooterTop/FooterTop';

class HomePage extends Component {
    render() {
        return (
            <Fragment>

                <NavBars />
                <TopHeader />
                <Services />
                <Technology />
                <TotalWorks />
                <RecentProject />
                <OurCourses />
                <VedioSection />
                <ClientReview />
                <FooterTop />

            </Fragment>
        );
    }
}

export default HomePage;