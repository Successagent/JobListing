import React from "react";
import styled from "styled-components";
import avatarImg from "../assets/stock2.jpg";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const StyledEmployerCard = styled.div`
  border: 1px solid #e8ebf3;
  background: #fff;
  border-radius: 5px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
  height: 330px;
  flex: 1;

  .avatar {
    --size: 6em;
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: var(--size);
    border-radius: 999px;
    background: #000;
  }

  .text {
    padding: 10px;

    text-align: center;
  }

  button {
    font-size: 0.8em;
    background: transparent;
    border: 1px solid #e8ebf3;
    border-radius: 3px;
  }

  .card__bottom {
    border-top: 1px solid #e8ebf3;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    gap: 10px;
    padding: 20px;
  }
  .social_btn {
    padding: 10px;
    border-radius: 999px;
    border: 1px solid #e8ebf3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function EmployerCard() {
  return (
    <StyledEmployerCard>
      <div className="avatar">
        <img src={avatarImg} alt="" />
      </div>
      <div className="text">
        <h4>Caterine Shoaf</h4>
        <p>PHP Developer (6 Yrs Exp)</p>
      </div>
      <button>View Details</button>
      <div className="card__bottom">
        <a href="#" className="social_btn">
          <IoMdCall />
        </a>
        <a href="#" className="social_btn">
          <MdEmail />
        </a>
        <a href="#" className="social_btn">
          <IoMdCall />
        </a>
      </div>
    </StyledEmployerCard>
  );
}
