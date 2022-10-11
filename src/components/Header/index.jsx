import React, { useState } from "react";
import StyledHeader from "./Header.styled";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
      <button
        className="menu btn btn--ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiOutlineMenuAlt1 />
      </button>
      {isOpen && (
        <div className="menu__links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/job"}>Jobs</Link>
        </div>
      )}
      <div className="logo">DynamicJobListing</div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">
            Contact
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to={"/jobs"} className="nav-link">
            Job listing
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to={"/job"} className="nav-link">
            Job
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
        </li>
      </ul>
      <a className="call_btn" href="tel:901238080">
        <IoMdCall size={20} />
      </a>
    </StyledHeader>
  );
}
