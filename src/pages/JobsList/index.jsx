import React from "react";
import { StyledJobsList } from "./JobsList.styled";

export default function JobsList() {
  return (
    <StyledJobsList>
      <div className="side">asdhi</div>
      <div className="main">
        <div className="info_bar">
          <p>Showing 1 to 10 of 30 entries</p>
          <div className="controls">
            <button>M</button>
          </div>
        </div>
        <div className="jobs_list">
          {[1, 1, 1, 1, 1, 1, 1].map(() => (
            <div>Test</div>
          ))}
        </div>
      </div>
    </StyledJobsList>
  );
}
