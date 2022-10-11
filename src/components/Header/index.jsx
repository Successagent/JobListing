import React, { useState } from "react";
import StyledHeader from "./Header.styled";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
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
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Contact</Link>
          <Link to={"/"}>Jobs</Link>
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
