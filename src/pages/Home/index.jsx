import React from "react";
import { Banner, Carousel, Header } from "../../components";
import EmployerCard from "../../components/EmployerCard";
import "./Home.css";

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
          <Carousel></Carousel>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Featured Employers</h2>
        </div>
        <div className="section__bottom">
          <div className="row">
            <EmployerCard />
            <EmployerCard />
            <EmployerCard />
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Job Categories</h2>
        </div>
        <div className="section__bottom">
          <div className="grid">
            <div className="card">ASD</div>
            <div className="card">ASD</div>
            <div className="card">ASD</div>
            <div className="card">ASD</div>
            <div className="card">ASD</div>
            <div className="card">ASD</div>
            <div className="card">ASD</div>
            <div className="card">ASD</div>
            <div className="card">ASD</div>
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Job Type</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <div className="row">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Top Companies</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <div className="row">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Testimonials</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <div className="row">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section__top">
          <h2>Latest Jobs</h2>
        </div>
        <div className="section_bottom">
          <div className="container">
            <div className="row">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
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
