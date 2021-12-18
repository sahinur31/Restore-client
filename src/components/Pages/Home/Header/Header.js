import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <Navbar bg=""  style={{backgroundColor: '#fff'}} expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        
                            <img width="100px" src={logo} alt="" />
                        
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-dark" to="/home">Home</Nav.Link>
                       { 
                        (user?.email) &&
                        <Nav.Link as={Link} className="text-dark" to="/dashboard">Dashboard</Nav.Link>
                        }
                        <Navbar.Text className="text-dark me-2">
                            <a href="#login" className="text-dark">{user?.displayName}</a>
                        </Navbar.Text> 
                        {
                            (!user?.email) ?
                            <Nav.Link as={Link} className="btn bg-dark text-white" to="/login">
                                Login
                            </Nav.Link> 
                            :
                            <button onClick={logout} className="btn bg-dark text-white">Logout</button>
                        }
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
    );
};

export default Header;