import React, {Fragment, useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import '../../asset/css/style.css';
import logo from '../../asset/images/logo.png'
import {NavLink} from 'react-router-dom';


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
                            <NavLink to="/"  className='Logos' ><img src={logo} alt=''></img></NavLink>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">

                                <Nav className=" navlist ms-auto">
                                    <NavLink to="/" style={({ isActive, isPending }) => { return {color:isActive ? "orange": "inherit" }}}   className='ListOne'>HOME</NavLink>
                                    <NavLink to="/Service" style={({ isActive, isPending }) => { return {color:isActive ? "orange": "inherit" }}}   className='ListOne'>SERVICES</NavLink>
                                    <NavLink to="/Course"  style={({ isActive, isPending }) => { return {color:isActive ? "orange": "inherit" }}}  className='ListOne'>COURSES</NavLink>
                                    <NavLink to="/Portfolio" style={({ isActive, isPending }) => { return {color:isActive ? "orange": "inherit" }}}   className='ListOne'>PORTFOLIO</NavLink>
                                    <NavLink to="/Contact"  style={({ isActive, isPending }) => { return {color:isActive ? "orange": "inherit" }}}  className='ListOne'>CONTACT</NavLink>
                                    <NavLink to="/About"  style={({ isActive, isPending }) => { return {color:isActive ? "orange": "inherit" }}}  className='ListOne'>ABOUT</NavLink>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Fragment>

           
        );
    }


export default NavBars;