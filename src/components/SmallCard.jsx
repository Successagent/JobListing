import React from "react";
import styled from "styled-components";

const StyledSmallCard = styled.div`
  border: 1px solid #e8ebf3;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export default function SmallCard({ children, className }) {
  return <StyledSmallCard className={className}>{children}</StyledSmallCard>;
}
