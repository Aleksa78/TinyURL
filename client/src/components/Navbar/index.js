import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/homePage" activeStyle>
            Url shortener
          </NavLink>
          <NavLink to="/admin" activeStyle>
            Admin
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;