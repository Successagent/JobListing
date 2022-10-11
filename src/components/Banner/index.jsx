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

export default function Banner({ children }) {
  return <StyledBanner>{children}</StyledBanner>;
}
