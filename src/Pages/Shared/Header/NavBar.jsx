import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDataGlobally } from '../../../Context/Context';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {

    const { user, logOut } = useDataGlobally();

    const handelLogOut = () => {
        logOut()
            .then(result => {
                const log = result.user;
                console.log(log)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav " className='d-flex align-items-center'>
                        <Nav className="mx-auto">
                            <Link to="/category/0">Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav style={{ display: "flex", alignItems: "center" }}>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle style={{ fontSize: "2rem" }} />
                            </Nav.Link>}

                            {user ?
                                <Button onClick={handelLogOut} variant="dark">LogOut</Button> :
                                <Link to="/login">
                                    <Button variant="dark">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;