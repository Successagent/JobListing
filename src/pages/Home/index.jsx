import React from "react";
import { Banner, Carousel, Header, JobTypeSection } from "../../components";
import EmployerCard from "../../components/EmployerCard";
import JobCard, { CompactJobCard } from "../../components/JobCard";
import SmallCard from "../../components/SmallCard";
import { CompanyLogos, JobCategories } from "../../constants";
import "./Home.css";
import companyLogo from "../../assets/stock3.png";
import Testimonials from "../../components/Testimonials";
import SearchBar from "../../components/SearchBar/index";
import Footer from "../../components/Footer/index";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner>
        <div className="">
          <h1>Search for best job for your future</h1>
          <p>Find your job now</p>
        </div>
        <SearchBar />
      </Banner>
      <section className="section--white">
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
          <div className="grid--small">
            {[1, 1, 1, 1].map(() => (
              <EmployerCard />
            ))}
          </div>
        </div>
      </section>
      <section className="section--white">
        <div className="section__top">
          <h2>Job Categories</h2>
        </div>
        <div className="section__bottom">
          <div className="job_categories">
            {JobCategories.map((job) => (
              <SmallCard>
                <img src={job.icon} width={50} alt="" />
                <p>{job.title}</p>
              </SmallCard>
            ))}
          </div>
          <button>View More</button>
        </div>
      </section>
      <JobTypeSection />
      <section className="section--white">
        <div className="section__top">
          <h2>Top Companies</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            {/* <Carousel> */}
            <div className="grid--small">
              {CompanyLogos.map(() => (
                <SmallCard>
                  <img src={companyLogo} alt="" />
                </SmallCard>
              ))}
            </div>
            {/* </Carousel> */}
          </div>
        </div>
      </section>
      <Testimonials />
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
      <section className="newsletter_sect">
        <div className="column">
          <p>Subscribe to our newsletter</p>
          <div className="subscribe_form">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
