import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks: React.FC = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink end to="/landing">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink end to="/choosing">
          Campgrounds
        </NavLink>
      </li>
      <li>
        <NavLink end to="/landing">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink end to="/landing">
          Sign up
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
