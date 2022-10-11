import styled from "styled-components";

const StyledJobCard = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 3px;
  border: 1px solid #e8ebf3;
  background: #fff;
  overflow: hidden;

  .card__top {
    background: #000;
    padding-bottom: 0;
    overflow: hidden;
    position: relative;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(105, 99, 255, 0);
      transition: 200ms all;
      content: "";
    }
    &:hover::after,
    &:hover img {
      background: rgba(105, 99, 255, 0.8);
      transform: scale(1.2);
    }
  }
  .card__top img {
    padding-bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: 200ms all;
  }
  .card__top_bar {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 1em;
    color: #fff;
    z-index: 3;
  }
  .card__bottom {
    padding: 1em;
    h4:hover {
      color: rgba(105, 99, 255, 0.8);
    }
  }
  .card__desc_grid {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 0.8em;
    color: #555;
    li {
      display: flex;
      align-items: center;
      gap: 3px;
    }
    & > *:hover {
      color: rgba(105, 99, 255, 0.8);
    }
  }
  button {
    align-self: center;
  }
`;

export default StyledJobCard;
