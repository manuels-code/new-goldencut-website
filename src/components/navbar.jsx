import React from "react";
import Menu from "./menu.component";
import NavbarButton from "./buttons/navbarButton.component";
const Navbar = ({ links }) => {
  return (
    <nav>
      <NavbarButton />
      <Menu links={links} />
    </nav>
  );
};

export default Navbar;
