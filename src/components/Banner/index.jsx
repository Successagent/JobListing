import React from "react";
import styled from "styled-components";

const StyledBanner = styled.section`
  background: rgba(105, 99, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27em;
  flex-direction: column;
  & > div {
    text-align: center;
  }
`;

export default function Banner() {
  return (
    <StyledBanner>
      <div className="">
        <h1>Search for best job for your future</h1>
        <p>This line sha just dey ok</p>
      </div>
      <div className="">
        <ul className="tabs">
          <li>Find a Job</li>
          <li>Find a Candidate</li>
        </ul>
        <div className="">
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
    </StyledBanner>
  );
}
