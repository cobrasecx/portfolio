import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarSocial = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink
          to="https://github.com/cobrasecx"
          className="nav-link active"
          style={{ color: "white", fontSize: "40px" }}
          aria-current="page"
        >
          <i className="bi-github"></i>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="https://www.linkedin.com/in/albertoayza"
          className="nav-link active"
          style={{ color: "white", fontSize: "40px" }}
          aria-current="page"
        >
          <i
            className="bi-linkedin"
            style={{ color: "white", fontSize: "40px" }}
          ></i>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="https://www.youtube.com/@linuxexplorer1"
          className="nav-link active"
          style={{ color: "white", fontSize: "40px" }}
          aria-current="page"
        >
          <i
            className="bi-youtube"
            style={{ color: "white", fontSize: "40px" }}
          ></i>
        </NavLink>
      </li>
    </ul>
  );
};
