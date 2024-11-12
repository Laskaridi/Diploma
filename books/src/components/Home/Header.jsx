import React, { useState, useEffect } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faMagnifyingGlass, faCartShopping, faBookJournalWhills} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Button } from 'react-bootstrap';

function Header(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [isVisible, setIsVisible] = useState(false);
    // const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1200);

    // const toggleContent = () => {
    // setIsVisible(!isVisible);
    // };

    // useEffect(() => {
    //   const handleResize = () => {
    //     const wideScreen = window.innerWidth >= 1200;
    //     setIsWideScreen(wideScreen);

    //     if (wideScreen) {
    //         setIsVisible(true);
    //       } else {
    //         setIsVisible(false);
    //       }
    //   };

    //   handleResize();

    //   window.addEventListener('resize', handleResize);

    //   return () => window.removeEventListener('resize', handleResize);
    // }, []);


    return (
        <div>    
             <Navbar expand="lg" className="mynavbar">
             <Container fluid>
             <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBookJournalWhills} className='icon-logo' /></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
             <Button onClick={handleShow} style={{
                 backgroundColor: 'rgb(229 229 229)', 
                 color: 'rgb(114 114 114)', 
                 borderRadius: '22px', 
                 border: 'none', 
                 padding: '10px 25px',
                 marginLeft: '70px'
                 }}>
             <FontAwesomeIcon icon={faBars} className='icon-menu' />Book categories
            </Button>


            <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Offcanvas.Body>
            </Offcanvas> 

           <div className='search-input'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search' />
              <input type='text' placeholder='Find a book' className='input-header' />
              <button className='search-button'>Search</button>
           </div>
           <button className='basket-button'>
            <FontAwesomeIcon icon={faCartShopping} className='icon-basket' />
            Basket</button>
           <button className='login-button'>
            <FontAwesomeIcon icon={faUser} className='icon-login' />
             Sign in</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            {/* {isWideScreen && !isVisible &&(
             <button onClick={toggleContent} className='show-button'>
             Menu
             </button>
          )}
            {(isVisible || isWideScreen) && (
            <Navbar className='mynavbar'>
            <Container fluid>
            <Navbar.Brand href="#"> <FontAwesomeIcon icon={faBookJournalWhills} className='icon-logo' /></Navbar.Brand>
            <Button onClick={handleShow} style={{
            backgroundColor: 'rgb(229 229 229)', 
            color: 'rgb(114 114 114)', 
            borderRadius: '22px', 
            border: 'none', 
            padding: '10px 20px'
            }}>
            <FontAwesomeIcon icon={faBars} className='icon-menu' />Book categories
           </Button>

           <div className='search-input'>
           <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search' />
           <input type='text' placeholder='Find a book' className='input-header' />
           <button className='search-button'>Search</button>
           </div>
           <button className='basket-button'>
            <FontAwesomeIcon icon={faCartShopping} className='icon-basket' />
            Basket</button>
            <button className='login-button'>
            <FontAwesomeIcon icon={faUser} className='icon-login' />
            Sign in</button>
           </Container>
           
           </Navbar>
            )}

           {!isWideScreen && (
            <button onClick={toggleContent} className='show-button'>
             Menu
             </button>
             )}
           <Offcanvas show={show} onHide={handleClose} placement="start">
           <Offcanvas.Header closeButton>
           <Offcanvas.Title>Menu</Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body>
           <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
           </Nav>
           </Offcanvas.Body>
           </Offcanvas> */}
        </div>
    );
}

export default Header;