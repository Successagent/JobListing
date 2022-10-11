import React from "react";
import CompactJobCard from "./CompactJobCard";
import stockImg1 from "../../assets/stock1.jpg";
import styled from "styled-components";
import { BsHouseDoorFill, BsPersonFill, BsCalendarEvent } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import StyledJobCard from "./JobCard.styled";

export default function JobCard() {
  return (
    <StyledJobCard>
      <div className="card__top">
        <img src={stockImg1} alt="" />
        <div className="card__top_bar">
          <p>Jobs</p>
          <p>$925</p>
        </div>
      </div>
      <div className="card__bottom">
        <h4>Female Person</h4>
        <ul className="card__desc_grid">
          <li className="card__desc_item">
            <BsHouseDoorFill />
            <p>Los Angel</p>
          </li>
          <li className="card__desc_item">
            <BsCalendarEvent />
            <p>5 mins ago</p>
          </li>
          <li className="card__desc_item">
            <BsPersonFill />
            <p>Sallllue adhdi</p>
          </li>
          <li className="card__desc_item">
            <MdOutlineWorkOutline />
            <p>IT Solutions</p>
          </li>
        </ul>
      </div>
    </StyledJobCard>
  );
}

export { CompactJobCard };
