import React from "react";
import styled from "styled-components";
import { JobTypes } from "../../constants";
import SmallCard from "../SmallCard";

const StyledJobTypeSection = styled.section`
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
  }
  .jobType {
    /* background: #000; */
    padding: 3em 0;
  }
  .job_type__icon {
    --size: 100px;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      120deg,
      var(--primary-9) 0%,
      var(--primary-8) 100%
    );
    color: #fff;
    border-radius: 999px;
  }
`;

export default function JobTypeSection() {
  return (
    <StyledJobTypeSection>
      <div className="section__top">
        <h2>Job Type</h2>
      </div>
      <div className="section_bottom">
        <div className="row">
          {JobTypes.map((job) => (
            <SmallCard className="jobType">
              <div className="job_type__icon">{job.icon}</div>
              {job.title}
            </SmallCard>
          ))}
        </div>
      </div>
    </StyledJobTypeSection>
  );
}
