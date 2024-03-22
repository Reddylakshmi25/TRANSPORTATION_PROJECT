import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';

const Header = () => {
    return(
        <header>
          <Navbar className='navbar-style' expand="lg">
            <Container>
              <Navbar.Brand href="#home">
              <Image className='logo-img-style' src='images/logo.jpeg' alt="TRF" roundedCircle />
              <h4 className='logo-text-style' >DRIVE WITH CAUTION</h4>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Uploads" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Images</NavDropdown.Item>
                <NavDropdown.Item href="#">Fill the form</NavDropdown.Item>
            </NavDropdown>
            </Nav>  
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
}

export default Header