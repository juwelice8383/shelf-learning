import React, { Component, Fragment } from 'react';
import NavBars from '../components/NavBars/NavBars';
import HeaderCommon from '../components/HeaderCommon/HeaderCommon';
import ProjectPageContent from '../components/RecentProject/ProjectPageContent';
import FooterTop from '../components/FooterTop/FooterTop';

class ProjectPage extends Component {
    render() {
        return (
            <Fragment>
              <NavBars />
              <HeaderCommon pagetitle = "All Project" />
              <ProjectPageContent />
              <FooterTop />
                
            </Fragment>
        );
    }
}

export default ProjectPage;