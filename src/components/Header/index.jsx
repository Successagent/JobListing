import React from "react";
import StyledHeader from "./Header.styled";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
export default function Header() {
  return (
    <StyledHeader>
      <button className="menu btn btn--ghost">
        <HiOutlineMenuAlt1 />
      </button>
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
      <a className="call_btn" href="tel:901238080">
        <IoMdCall size={20} />
      </a>
    </StyledHeader>
  );
}
