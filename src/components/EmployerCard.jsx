import React from "react";
import styled from "styled-components";

const StyledEmployerCard = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
  width: 230px;

  .avatar {
    padding: 2.4em;
    border-radius: 999px;
    background: #000;
  }

  .text {
    text-align: center;
  }

  .card__bottom {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export default function EmployerCard() {
  return (
    <StyledEmployerCard>
      <div className="avatar"></div>
      <div className="text">
        <h4>Caterine Shoaf</h4>
        <p>PHP Developer (6 Yrs Exp)</p>
      </div>
      <button>View Details</button>
      <div className="card__bottom">
        <div className="">D</div>
        <div className="">D</div>
        <div className="">D</div>
      </div>
    </StyledEmployerCard>
  );
}
