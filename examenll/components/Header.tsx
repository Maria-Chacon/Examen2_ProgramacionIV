import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../images/dm.jpg';
const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
      <Image src={logo} alt="Mi logo" width="75" height="75" className="img-fluid rounded-circle" style={{marginLeft:'20px'}} />
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Acerca de</Nav.Link>
          <Nav.Link href="#chat">Chat</Nav.Link> 
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;