import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../assets/logo.svg';

function CustomNavbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <Navbar expand="lg" className="py-4 navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <img src={logo} alt="Logo" className="d-inline-block align-top" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className='bg-white' />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto text-center" onSelect={handleSelect}>
            <Nav.Link
              href="#home"
              eventKey="home"
              className={`mx-2 px-4 rounded-pill ${
                activeLink === 'home' ? 'active-link' : 'inactive-link'
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              eventKey="about"
              className={`mx-2 text-white ${
                activeLink === 'about' ? 'active-link' : 'inactive-link'
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              eventKey="projects"
              className={`mx-2 text-white ${
                activeLink === 'projects' ? 'active-link' : 'inactive-link'
              }`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              eventKey="contact"
              className={`mx-2 text-white ${
                activeLink === 'contact' ? 'active-link' : 'inactive-link'
              }`}
            >
              Contact
            </Nav.Link>
          </Nav>

          <div className="text-end">
            <Button
              href="#contact"
              className="border-white px-3 rounded-pill btn-black"
            >
              HIRE ME
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
