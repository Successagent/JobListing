import React from "react";
import { JobTypes } from "../../constants";
import SmallCard from "../SmallCard";

export default function JobTypeSection() {
  return (
    <section>
      <div className="section__top">
        <h2>Job Type</h2>
      </div>
      <div className="section_bottom">
        <div className="row">
          {JobTypes.map((job) => (
            <SmallCard>
              <div className="">{job.icon}</div>
              {job.title}
            </SmallCard>
          ))}
        </div>
      </div>
    </section>
  );
}
