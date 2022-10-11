import React from "react";
import CompactJobCard from "./CompactJobCard";
import stockImg1 from "../../assets/stock1.jpg";
import styled from "styled-components";

const StyledJobCard = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  gap: 20px;

  .card__top {
    background: #000;
    padding-bottom: 0;
  }
  .card__top img {
    padding-bottom: 0;
    height: 200px;
  }

  .card__bottom {
    padding: 1em;
  }
  .card__desc_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    font-size: 0.8em;
  }
  button {
    align-self: center;
  }
`;

export default function JobCard() {
  return (
    <StyledJobCard>
      <div className="card__top">
        <img src={stockImg1} alt="" />
      </div>
      <div className="card__bottom">
        <h4>Female Person</h4>
        <ul className="card__desc_grid">
          <li className="card__desc_item">Los Angel</li>
          <li className="card__desc_item">5 mins ago</li>
          <li className="card__desc_item">Sallllue adhdi</li>
          <li className="card__desc_item">IT Solutions</li>
        </ul>
      </div>
    </StyledJobCard>
  );
}

export { CompactJobCard };
