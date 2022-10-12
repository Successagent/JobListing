import styled from "styled-components";

const StyledJobsList = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin: 2em 6em;
    flex-direction: row;
  }
  .side {
    flex: 1;
    padding: 0 20px;
    margin-bottom: 3em;
    margin-top: 2em;

    .search_box,
    .categories_box,
    .prices_box,
    .types_box,
    .poster_box,
    .apply_box,
    .share_box {
      padding: 10px;
      border-radius: 3px;
      border: 1px solid #e8ebf3;
      background: #fff;
      li {
        display: flex;
        justify-content: space-between;
      }
      label {
        display: flex;
        gap: 10px;
      }

      button {
        margin: 0 auto;
        text-align: center;
      }
    }
    .search_box {
      margin-bottom: 1em;
    }
    .search_box__form {
      display: flex;
      justify-content: start;
      input {
        flex: 1;
        border: 1px solid #e8ebf3;
        border-radius: 4px 0 0 4px;
      }
      button {
        border-radius: 0 4px 4px 0;
      }
    }

    .categories_box {
      border-radius: 3px 3px 0 0;
    }
    .prices_box,
    .poster_box {
      border-top: none;
      border-bottom: none;
      border-radius: 0;
    }
    .types_box,
    .apply_box {
      border-radius: 0;
    }

    .share_box {
      margin-top: 2em;
    }

    .categories_list {
      margin-bottom: 2em;
    }
  }
  .main {
    flex: 3;
    padding: 15px;
    border: 1px solid #e8ebf3;
    border-radius: 4px;
    background: #fff;
    margin: 0 1.2em;
    margin-bottom: 2em;
    margin-top: 2em;

    @media screen and (min-width: 768px) {
      padding: 15px;
      margin: 0;
    }

    .info_bar {
      display: flex;
      justify-content: space-between;
      margin: 1em 0;
    }
    .jobs_list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      grid-gap: 1.6rem;
    }
  }
`;

export { StyledJobsList };
