import React from "react";
import { Banner, Header } from "../../components";
import Footer from "../../components/Footer";
import { StyledJobsList } from "./JobsList.styled";
import JobCard, { SmallJobCard } from "../../components/JobCard";
import SearchBar from "../../components/SearchBar/index";

export default function JobsList() {
  return (
    <>
      <Header />
      <Banner>
        <h1 className="h1">
          <b>134,445</b> Jobs Available in AstroSoft
        </h1>
        <SearchBar small />
      </Banner>
      <StyledJobsList>
        <div className="side">
          <div className="search_box">
            <div className="search_box__form">
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
          <div className="categories_box">
            <ul className="categories_list">
              <li>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                  <p>Chef</p>
                </label>
                <div className="categories_label">14</div>
              </li>
            </ul>
            <button>Show more</button>
          </div>
          <div className="prices_box">
            <p>Price Range:</p>
            <p>200 - 200</p>
            <input type="range" name="" id="" />
          </div>
          <div className="types_box">
            <ul>
              <li>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                  <p>Part time</p>
                </label>
              </li>
            </ul>
          </div>
          <div className="poster_box">
            <ul>
              <li>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                  <p>Part time</p>
                </label>
              </li>
            </ul>
          </div>
          <div className="apply_box">
            <button>Apply Filter</button>
          </div>
          <div className="share_box">
            <p>Shares</p>
          </div>
        </div>
        <div className="main">
          <div className="info_bar">
            <p>Showing 1 to 10 of 30 entries</p>
            <div className="controls">
              <button>M</button>
            </div>
          </div>
          <div className="jobs_list">
            {[1, 1, 1, 1, 1, 1, 1].map(() => (
              <SmallJobCard />
            ))}
          </div>
        </div>
      </StyledJobsList>
      <Footer />
    </>
  );
}
