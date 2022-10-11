import React from "react";
import { Banner, Carousel, Header, JobTypeSection } from "../../components";
import EmployerCard from "../../components/EmployerCard";
import JobCard, { CompactJobCard } from "../../components/JobCard";
import SmallCard from "../../components/SmallCard";
import { CompanyLogos } from "../../constants";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner>
        <div className="">
          <h1>Search for best job for your future</h1>
          <p>This line sha just dey ok</p>
        </div>
      </Banner>
      <section>
        <div className="section__top">
          <h2>Featured Jobs</h2>
        </div>
        <div className="section_bottom">
          <Carousel>
            {[1, 1, 1].map(() => (
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
          <div className="job_categories">
            {CompanyLogos.map(() => (
              <SmallCard>Test</SmallCard>
            ))}
          </div>
          <button>View More</button>
        </div>
      </section>
      <JobTypeSection />
      <section>
        <div className="section__top">
          <h2>Top Companies</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <Carousel>
              {CompanyLogos.map(() => (
                <SmallCard>Company</SmallCard>
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
        <div className="row">
          <p>Subscribe to our newsletter</p>
          <input type="text" placeholder="Enter your email" />
        </div>
      </section>
    </div>
  );
}
