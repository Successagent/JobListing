import styled from "styled-components";

const StyledAuthPage = styled.div`
  padding: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f7fb;

  form {
    border: 1px solid #e8ebf3;
    border-radius: 3px;
    padding: 10px 0;
    display: flex;
    min-width: 360px;
    flex-direction: column;
    background: #fff;
    .form__top {
      border-bottom: 1px solid #e8ebf3;
      padding: 1em;
    }
    .form__top h4 {
      font-size: 1.2em;
    }
    .or_line {
      display: flex;
      width: 100%;
      gap: 10px;
      .horizontal_line {
        flex: 1;
        border-top: 5px solid transparent;
      }
    }
    & > * {
      padding: 0.2em 1em;
    }
    .other_auth {
      margin-top: 1em;
      display: flex;
      flex-direction: column;
    }
    .label p {
      /* w100 */
      font-size: 0.9em;
    }
    .jcsb {
      justify-content: space-between;
    }
    .input {
      padding: 0.9em 1em;
      border: 1px solid #e8ebf3;
      width: 100%;
      font-size: 0.8em;
      height: unset;
    }
    button {
      padding: 0.7em 2em;
      border-radius: 1px;
      margin: 10px;
    }
  }
`;

export default StyledAuthPage;
