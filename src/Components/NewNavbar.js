import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NewNavbar = () => {
    return (
  <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#Home">JM</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#Projects">Projects</Nav.Link>
      <Nav.Link href="#Resume">Resume</Nav.Link>
      <Nav.Link href="#Contact">contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NewNavbar;