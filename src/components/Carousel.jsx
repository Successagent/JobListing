import React from "react";
import styled from "styled-components";

const StyledCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: ${(props) => (props.primary ? "palevioletred" : "white")}; */
  button {
    --size: 3em;
    height: var(--size);
    width: var(--size);
    min-height: var(--size);
    min-width: var(--size);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    background: white;
    border: 1px solid #e8ebf3;
    border-radius: 999px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  }
  .inner {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1rem;
    width: 100%;
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`;

export default function Carousel({ children }) {
  return (
    <StyledCarousel>
      <button>&lt;</button>
      <div className="inner">{children}</div>
      <button>&gt;</button>
    </StyledCarousel>
  );
}
