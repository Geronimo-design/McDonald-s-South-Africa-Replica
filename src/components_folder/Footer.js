/** @format */
// Importing all necessary files and modules
import React from 'react';
import { Navbar, NavDropdown, NavbarText, Nav, NavLink } from 'react-bootstrap';
// Creating a footer navigation component
const Footer = (props) => {
  return (
    <Navbar className='lowerNavbar'>
      <NavLink className='lowerNavbarElement'>{props.text1}</NavLink>
      <NavLink className='lowerNavbarElement'>{props.text2}</NavLink>
      <NavLink className='lowerNavbarElement'>{props.text3}</NavLink>
      <NavLink className='lowerNavbarElement'>{props.text4}</NavLink>
      <NavLink className='lowerNavbarElement'>{props.text5}</NavLink>
      <NavbarText className='lowerNavbarElement'>
        <img id='lastLogo' src={props.imageUrl} alt={props.alt} />
        {props.text6}
      </NavbarText>
    </Navbar>
  );
};

export default Footer;
