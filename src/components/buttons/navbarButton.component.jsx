import React from "react";
import { ReactComponent as NavbarIcon } from "../../assets/svg/navbar-icon.svg";

const NavbarButton = () => {
  return (
    <button className="flex items-center uppercase text-white gap-1">
      <span className="w-5">
        <NavbarIcon />
      </span>
      menu
    </button>
  );
};

export default NavbarButton;
