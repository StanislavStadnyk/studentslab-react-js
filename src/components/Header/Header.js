import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Students = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='light' light expand='md' className='mb-5'>
      <Container>
        <NavbarBrand href='/'>
          <strong>StudentsLab</strong>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem className='mr-3'>
              <NavLink to='/' exact className='nav-link'>
                Home
              </NavLink>
            </NavItem>
            <NavItem className='mr-3'>
              <NavLink to='/message' className='nav-link'>
                Send Message
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Students;
