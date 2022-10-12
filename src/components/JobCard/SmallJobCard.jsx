import React from "react";
import StyledJobCard from "./JobCard.styled";
import stockImg1 from "../../assets/stock1.jpg";
import { BsHouseDoorFill, BsPersonFill, BsCalendarEvent } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function SmallJobCard() {
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          sunt neque fuga!
        </p>
        <ul className="card__desc_grid">
          <li className="card__desc_item">
            <BsHouseDoorFill />
            <p>Los Angel</p>
          </li>
          <li className="card__desc_item">
            <BsCalendarEvent />
            <p>5 mins ago</p>
          </li>
        </ul>
      </div>
    </StyledJobCard>
  );
}
