import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  .tabs {
    display: ${(props) => (props.small ? "none" : "flex")};
    margin-left: 9px;
    li {
      font-size: 0.8em;
      padding: 0.7em 1em;
      color: var(--white);
      border-radius: 3px 3px 0 0;
    }
    li.active {
      background: rgba(0, 0, 0, 0.2);
    }
  }

  .bar {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 7px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      background: transparent;
      border: 1px solid transparent;
      gap: 1em;
    }

    input {
      flex: 1;
      border-radius: 5px;
      background: #fff;
    }
    input:first-child {
      border-radius: 5px 0 0 5px;
    }
    button,
    input,
    select {
      padding: 1em;
      border-radius: 0;

      border: none;
    }
    button {
      background: #ff2b88;
      border-radius: 0 5px 5px 0;
    }
    @media screen and (max-width: 768px) {
      input:first-child,
      select,
      button {
        border-radius: 2px;
      }
    }
  }
`;

export default function SearchBar({ small }) {
  return (
    <StyledSearchBar small={small} className="">
      <ul className="tabs">
        <li className="active">Find a Job</li>
        <li>Find a Candidate</li>
      </ul>
      <div className="bar">
        <input type="text" />
        <select name="" id="">
          <option value="">All Catergories</option>
        </select>
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledSearchBar>
  );
}
