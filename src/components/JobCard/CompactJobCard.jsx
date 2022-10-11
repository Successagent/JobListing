import React from "react";
import styled from "styled-components";

const StyledCompactJobCard = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
  border: 1px solid #000;
  border-radius: 4px;
  background: #fff;
  justify-content: space-between;
  padding: 20px;
  .job_card__desc {
    display: flex;
    gap: 10px;
  }
  button {
    align-self: center;
  }
`;

export default function CompactJobCard() {
  return (
    <StyledCompactJobCard>
      <div className="">
        <h4>Hardware Engineer</h4>
        <div className="job_card__desc">
          <p>IT Hardware Network Pvt ltd</p>
          <p>USA</p>
        </div>
      </div>
      <button>Apply Now</button>
    </StyledCompactJobCard>
  );
}
