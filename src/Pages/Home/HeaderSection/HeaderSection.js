import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './HeaderSection.css';
import brandLogo from '../../../images/logo2.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const HeaderSection = () => {
    const { handleLogOut, user } = useAuth();
    return (
        <div className="header-container py-1 mx-auto">
            <Navbar bg="white" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <Link to="/home"><img
                            alt="Red Onion Logo"
                            src={brandLogo}
                            width="130"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/checkout"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg></Nav.Link>
                            {
                                user.displayName && <span>Hello, <span className="text-primary">{user.displayName}</span></span>
                            }
                            {
                                user.displayName && <button onClick={handleLogOut} className="ms-3 sign_up_button">Log Out</button>
                            }

                            {
                                !user.displayName && <Nav.Link as={Link} className="header-common-button" to="/signIn">Login</Nav.Link>
                            }
                            {
                                !user.displayName && <Nav.Link as={Link} to="/signUp"><button className="sign_up_button">Sign up</button></Nav.Link>
                            }


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderSection;