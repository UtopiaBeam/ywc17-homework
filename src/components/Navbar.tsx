import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavbarItem } from '../services';
import './Navbar.scss';

interface Props {
  items: NavbarItem[];
}

export default ({ items }: Props) => {
  const navbarItems = items.map(({ label, href }: NavbarItem) => (
    <Nav.Link href={href} target="_blank" className="navbar-item">
      {label}
    </Nav.Link>
  ));
  return (
    <>
      <Navbar expand="sm" className="navbar">
        <Navbar.Brand id="brand">
          <img
            alt="logo"
            width="35px"
            height="48px"
            src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">{navbarItems}</Navbar.Collapse>
      </Navbar>
    </>
  );
};