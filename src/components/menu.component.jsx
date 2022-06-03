import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ links }) => {
  return (
    <ul className="hidden">
      {links.map(({ path, title, id }) => (
        <li key={id}>
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
