import React from "react";
import styled from "styled-components";

const StyledSmallCard = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
`;

export default function SmallCard({ children }) {
  return <StyledSmallCard>{children}</StyledSmallCard>;
}
