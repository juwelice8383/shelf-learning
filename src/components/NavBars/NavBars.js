import React, {Fragment, useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../../asset/css/style.css';
import logo from '../../asset/images/logo.png'


    const NavBars =() => {
            const [sticky, setSticky] = useState(false);
           useEffect(() =>{
                window.addEventListener('scroll', ()=>{
                    window.scrollY > 10? setSticky(true): setSticky(false);

                })

           });

        return (
           
                <Fragment>

                    <Navbar fixed='top' expand="lg" className={` ${sticky? 'navbgcolor': ''}`} >

                        <Container className='NavContainer' >
                            <Navbar.Brand  className='Logos' href="#"><img src={logo} alt=''></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">

                                <Nav className=" navlist ms-auto">
                                    <Nav.Link href="#action1" className='ListOne'>HOME</Nav.Link>
                                    <Nav.Link href="#action2" className='ListOne'>SERVICES</Nav.Link>
                                    <Nav.Link href="#action3" className='ListOne'>COURSES</Nav.Link>
                                    <Nav.Link href="#action4" className='ListOne'>PORTFOLIO</Nav.Link>
                                    <Nav.Link href="#action5" className='ListOne'>CONTACT</Nav.Link>
                                    <Nav.Link href="#action6" className='ListOne'>ABOUT</Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Fragment>

           
        );
    }


export default NavBars;