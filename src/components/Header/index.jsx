import React from "react";
import StyledHeader from "./Header.styled";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <StyledHeader>
      <button className="menu btn btn--ghost">
        <HiOutlineMenuAlt1 />
      </button>
      <div className="logo">PIN</div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} href="#" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} href="#" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/jobs"} href="#" className="nav-link">
            Job listing
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/job"} href="#" className="nav-link">
            Job
          </Link>
        </li>
      </ul>
      <a className="call_btn" href="tel:901238080">
        <IoMdCall size={20} />
      </a>
    </StyledHeader>
  );
}
