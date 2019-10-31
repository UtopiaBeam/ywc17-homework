import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavbarItem } from '../services';
import { BASE_URL } from '../const';
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
      <Navbar expand="sm" fixed="top" bg="white" className="navbar">
        <div id="brand">
          <img alt="logo" width="35px" height="48px" src={`${BASE_URL}/img/logo/footer.png`} />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">{navbarItems}</Navbar.Collapse>
      </Navbar>
    </>
  );
};
