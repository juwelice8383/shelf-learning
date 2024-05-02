import './App.css';
import '../src/asset/css/bootstrap.min.css';
import { Fragment } from 'react';
import HomePage from '././pages/HomePage';
import ServicePage from '././pages/ServicePage';
import OurCoursePage from '././pages/OurCoursePage';
import ProjectPage from '././pages/ProjectPage';
import ContactPage from '././pages/ContactPage';
import AboutMePage from './pages/AboutMePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={ <HomePage /> } />
            <Route path="/Service"  element={ <ServicePage /> } />
            <Route path="/Course"  element={ <OurCoursePage /> } />
            <Route path="/Portfolio"  element={ <ProjectPage /> } />
            <Route path="/Contact"  element={ <ContactPage /> } />
            <Route path="/About"  element={ <AboutMePage /> } />
            



          </Routes>
        </BrowserRouter>
      </Fragment>
 
    </div>
  );
}

export default App;
