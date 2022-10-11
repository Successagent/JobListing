import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";

const StyledBanner = styled.section`
  background: ${(props) =>
    props.small ? `url(${bannerImg2})` : `url(${bannerImg})`};

  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.small ? "10em" : "27em")};
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
  & > * {
    text-align: center;
    z-index: 1;
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
`;

export default function Banner({ children, small }) {
  return <StyledBanner small>{children}</StyledBanner>;
}
