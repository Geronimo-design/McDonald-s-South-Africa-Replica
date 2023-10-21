/** @format */

// Importing all necessary files and components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, NavLink } from 'react-bootstrap';
import { Navbar, NavDropdown, NavbarText, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';
// Creating a navigation menu for the top of the page
const Navigation = (props) => {
  return (
    <div id='nav-container'>
      <div>
        <a href='/' id='emailSignup'>
          Sign up for our email
        </a>
        <Icon icon='entypo:magnifying-glass' />
        <a href='/' id='search'>
          Search
        </a>
      </div>
      <Navbar className='upperNavbar'>
        <NavLink>
          <img id='firstLogo' src={props.imageUrl} alt={props.alt} />
        </NavLink>

        <Nav>
          <NavbarText className='NavLink'>Our Menu</NavbarText>
          <NavDropdown></NavDropdown>
          <NavLink className='NavLink'>Know Our Food</NavLink>
          <NavLink className='NavLink'>Deals & Our App</NavLink>
          <NavLink className='NavLink'>MyMRewards</NavLink>
          <NavLink className='NavLink'>Family Hub</NavLink>
          <NavLink className='NavLink'>Find a Store</NavLink>
          <NavLink>
            <Button className='Button' variant='warning'>
              Order Now
            </Button>
          </NavLink>
          <NavLink>
            <Button className='Button' variant='warning'>
              Contact Us
            </Button>
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
