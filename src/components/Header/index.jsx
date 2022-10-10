import React from "react";
import StyledHeader from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">PIN</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Job listing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Job
          </a>
        </li>
      </ul>
    </StyledHeader>
  );
}
