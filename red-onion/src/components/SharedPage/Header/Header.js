import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import blackLogo from '../../../images/logo2.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky='top' variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img src={blackLogo} width='150' alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link className='text-dark' as={Link} to="/cart">
                            <FontAwesomeIcon className='m-1 fs-4' icon={faCartShopping}></FontAwesomeIcon>
                        </Nav.Link>
                        <Nav.Link className='text-dark mx-2 text-uppercase fw-semibold' as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link className='text-light bg-danger rounded-pill px-3 mx-2 text-uppercase fw-semibold' as={Link} to="/signup">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;