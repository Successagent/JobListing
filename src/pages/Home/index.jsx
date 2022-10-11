import React from "react";
import { Banner, Carousel, Header, JobTypeSection } from "../../components";
import EmployerCard from "../../components/EmployerCard";
import JobCard, { CompactJobCard } from "../../components/JobCard";
import SmallCard from "../../components/SmallCard";
import { CompanyLogos, JobCategories } from "../../constants";
import "./Home.css";
import companyLogo from "../../assets/stock3.png";
import avatarImg from "../../assets/stock2.jpg";

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
          <div className="row">
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
                {job.icon}
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
            <div className="row">
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
      <section className="section--white">
        <div className="section__top">
          <h2>Testimonials</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <Carousel>
              <div className="testimony_card">
                <div className="testimony_card__top">
                  <img src={avatarImg} alt="" />
                </div>
                <div className="testimony_card__bottom">
                  <h3>Company Name</h3>
                  <p>
                    {" "}
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore.{" "}
                  </p>
                </div>
              </div>
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
