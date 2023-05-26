/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
  return (
    <Navbar className="nav-bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="nav-bar-container">
        <Link passHref href="/">
          <Navbar.Brand>Body Buddy</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link className="nav-text">Goal</Nav.Link>
            </Link>
            <Link passHref href="/weeks">
              <Nav.Link className="nav-text">Weeks</Nav.Link>
            </Link>
            <Link passHref href="/info">
              <Nav.Link className="nav-text">Info</Nav.Link>
            </Link>
          </Nav>
          <button type="button" className="signout-btn" onClick={signOut}>signout</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
