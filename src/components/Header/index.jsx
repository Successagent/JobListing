import React from "react";

export default function Header() {
  return (
    <header className="navbar">
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
    </header>
  );
}
