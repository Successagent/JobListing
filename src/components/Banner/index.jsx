import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner1.jpg";

const StyledBanner = styled.section`
  background: url(${bannerImg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27em;
  flex-direction: column;
  color: #fff;
  position: relative;

  h1 {
    font-size: 2em;
    color: #fff;
    @media screen and (min-width: 768px) {
      font-size: 2.6em;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      120deg,
      rgba(105, 99, 255, 0.9) 0%,
      rgba(105, 99, 255, 0.8) 100%
    );
    z-index: 0;
  }
  & > div {
    text-align: center;
    z-index: 1;
  }
`;

export default function Banner({ children }) {
  return <StyledBanner>{children}</StyledBanner>;
}
