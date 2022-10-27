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
import ToggleDarkLight from '../ToggleDarkLight/ToggleDarkLight';
import logo from '../../image/logo.png'

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
                <Link
                    className='d-flex align-items-center'
                    style={{ textDecoration: 'none' }}
                    to='/'>
                    <Image
                        style={{ height: '30px' }}
                        roundedCircle
                        src={logo}>

                    </Image>
                    <Navbar.Brand
                        className='text-danger fw-bold fs-3 ms-2'>
                        Learn Easily
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className="me-auto">
                        <Link className='nav-topic' to='/courses'>Courses</Link>
                        <Link className='nav-topic'>FAQ</Link>
                        <Link className='nav-topic pe-3'
                            to='/blog'>Blog</Link>
                    </Nav>
                    <Nav className='align-items-center text-primary'>
                        <ToggleDarkLight></ToggleDarkLight>

                        <div className='ms-4 text-success fw-bold'>
                            {user?.displayName}
                        </div>
                        <div className='mx-4' title={user?.displayName}>
                            {
                                user?.photoURL ?
                                    <Link to='/profile'>
                                        <Image
                                            style={{ height: '35px' }}
                                            roundedCircle
                                            src={user?.photoURL}
                                        ></Image>
                                    </Link>
                                    : <FaUser></FaUser>
                            }
                        </div>
                        {
                            user ?
                                <FaExternalLinkAlt title='logOut' onClick={handleLogOut}></FaExternalLinkAlt>
                                :
                                <Link
                                    className='text-danger fw-bold'
                                    to='/login'
                                    style={{
                                        textDecoration: 'none'
                                    }}>Log In</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;