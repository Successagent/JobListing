import styled from "styled-components";

const StyledHeader = styled.section`
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 2em;
  color: #000;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 11px #0002;

  @media screen and (min-width: 768px) {
    padding: 1.5em 6em;
  }

  .menu {
    display: block;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  .navbar-nav {
    display: none;
    gap: 10px;
    @media screen and (min-width: 768px) {
      display: flex;
    }

    li a {
      color: #504e70;
      font-size: 0.9rem;
    }
    li {
      padding: 0.5em 1em;
      border-radius: 3px;
    }
    li:hover {
      background: var(--primary-8);
    }
    li:hover a {
      color: #fff;
    }
  }
  .call_btn {
    color: var(--primary-8);
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export default StyledHeader;
