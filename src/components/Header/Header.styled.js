import styled from "styled-components";

const StyledHeader = styled.section`
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 3em;
  color: #000;
  position: sticky;
  top: 0;
  z-index: 10;

  .navbar-nav {
    display: flex;
    gap: 10px;
  }
`;

export default StyledHeader;
