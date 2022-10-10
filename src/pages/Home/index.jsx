import React from "react";
import { Banner, Carousel, Header } from "../../components";
import EmployerCard from "../../components/EmployerCard";
import JobCard, { CompactJobCard } from "../../components/JobCard";
import SmallCard from "../../components/SmallCard";
import {} from "";
import "./Home.css";

const jobTypes = [
  {
    title: "Work From Home",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Banner>
        <input type="text" />
      </Banner>
      <section>
        <div className="section__top">
          <h2>Featured Jobs</h2>
        </div>
        <div className="section_bottom">
          <Carousel>
            {[1, 1, 1, 1].map(() => (
              <JobCard />
            ))}
          </Carousel>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Featured Employers</h2>
        </div>
        <div className="section__bottom">
          <div className="row">
            {[1, 1, 1, 1].map(() => (
              <EmployerCard />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Job Categories</h2>
        </div>
        <div className="section__bottom">
          <div className="grid">
            {[1, 1, 1, 1, 1, 1, 1, 1].map(() => (
              <SmallCard>Test</SmallCard>
            ))}
          </div>
          <button>View More</button>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Job Type</h2>
        </div>
        <div className="section_bottom">
          <div className="row">
            {[1, 1, 1, 1, 1, 1].map(() => (
              <SmallCard>Test</SmallCard>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Top Companies</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <Carousel>
              {[1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                <div className="card">as</div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Testimonials</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <Carousel>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Latest Jobs</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <div className="job_grid">
              {[1, 1, 1, 1].map(() => (
                <CompactJobCard />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <p>Subscribe to our newsletter</p>
      </section>
    </div>
  );
}
