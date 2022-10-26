import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaExternalLinkAlt, FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='text-danger fw-bold fs-3' href="#home">Learn Easily</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className='align-items-center'>
                        <Link className='nav-topic'>Courses</Link>
                        <Link className='nav-topic'>FAQ</Link>
                        <Link className='nav-topic pe-3'>Blog</Link>

                        {user?.displayName}
                        <div title={user?.displayName}>
                            {
                                user?.photoURL ?
                                    <Image
                                        style={{ height: '35px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    ></Image>
                                    : <FaUser></FaUser>
                            }
                        </div>
                        {
                            user ?
                                <FaExternalLinkAlt onClick={handleLogOut}></FaExternalLinkAlt>
                                :
                                <Link to='/login'>Log In</Link>
                        }




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;