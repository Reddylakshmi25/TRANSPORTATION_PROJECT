import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return(
        <header>
          <Navbar className='navbar-style' expand="lg">
            <Container>
              <LinkContainer to='/'>
                  <Navbar.Brand href="/">
                  <Image className='logo-img-style' src='images/logo.jpeg' alt="TRF" roundedCircle />
                  <h4 className='logo-text-style'>SAFETY DRIVE</h4>
                  </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to='/'>
                    <Nav.Link href="#">Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/about'>
                    <Nav.Link href="#">About</Nav.Link>
                </LinkContainer>


            <NavDropdown title="Uploads" id="basic-nav-dropdown">
              <LinkContainer to='/image'>
                  <NavDropdown.Item href="#">Images</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/form'>
                  <NavDropdown.Item href="#">Form</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            </Nav>  
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
}

export default Header