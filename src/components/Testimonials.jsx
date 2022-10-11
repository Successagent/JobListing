import React from "react";
import Carousel from "./Carousel";
import avatarImg from "../assets/stock2.jpg";
import styled from "styled-components";

const StyledTestimonials = styled.section`
  background: #fff;

  .testimony_card {
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      padding: 1em 7em;
    }
  }

  .testimony_card__top img {
    border-radius: 999px;
    border: 2px solid white;
    box-shadow: 0 0 0 1px #e8ebf3;
  }

  .testimony_card__bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 1em;
    text-align: center;
  }
`;

export default function Testimonials() {
  return (
    <StyledTestimonials className="section--white">
      <div className="section__top">
        <h2>Testimonials</h2>
      </div>
      <div className="section_bottom">
        <div className="container">
          <Carousel>
            <div className="testimony_card">
              <div className="testimony_card__top">
                <img src={avatarImg} alt="" />
              </div>
              <div className="testimony_card__bottom">
                <p>
                  {" "}
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore.{" "}
                </p>
                <h3>Heather Bell</h3>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </StyledTestimonials>
  );
}
