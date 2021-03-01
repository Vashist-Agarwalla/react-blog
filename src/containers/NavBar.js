import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light">
                <Navbar.Brand href="/home">
                    <img
                        alt=""
                        src="/logo.png"
                        width="55"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    {/* Logo from : https://looka.com/ */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/post">Post</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar