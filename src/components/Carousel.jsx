import React from "react";
import styled from "styled-components";

const StyledCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
  }
`;

export default function Carousel({ children }) {
  return (
    <StyledCarousel>
      <button>L</button>
      <div className="inner">{children}</div>
      <button>R</button>
    </StyledCarousel>
  );
}
