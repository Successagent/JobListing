import "../JobLeft/JobLeft.css";
import Footer from "../../components/Footer";
import ProfileLogo from "../../assets/25.jpg";

import {
  FaEnvelope,
  FaPhone,
  FaLink,
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaGoogle,
  FaUser,
  FaStar,
} from "react-icons/fa";
import { Banner, Header, JobCard } from "../../components";
import SearchBar from "../../components/SearchBar/index";

const index = () => {
  return (
    <>
      <Header />

      <div className="jobleft-page">
        <Banner small>
          <h1 className="h1">
            <b>134,445</b> Jobs Available in AstroSoft
          </h1>
          <SearchBar small />
        </Banner>
        <div className="jobleft-part-one">
          <p className="p">Jobs</p>
          <ul>
            <li className="h5">Home</li>
            <li className="h5">About Us</li>
            <li className="h5">Contact</li>
          </ul>
        </div>
        <div className="jobleft-part-two">
          <div>
            <div className="jobleft-part-two-sect-one">
              <div>
                <p className="p">Posted By</p>
              </div>
              <div className="jobleft-part-two-sect-one-item-one">
                <img src={ProfileLogo} alt="" />
                <p className="p">Robert McLean</p>
                <h5 className="h5">
                  Hr Recruiter of Hardware &amp; Network Pvt ltd Member Since
                  November 2008
                </h5>
                <button className="form-btn">See All Ads</button>
              </div>
              <div className="jobleft-part-two-sect-one-item-two">
                <p className="p">Contact Info</p>
                <div>
                  <div className="icon-con" style={{ color: "green" }}>
                    <FaEnvelope></FaEnvelope>
                  </div>
                  <h5 className="h5">robert123@gmail.com</h5>
                </div>
                <div>
                  <div className="icon-con" style={{ color: "green" }}>
                    <FaPhone></FaPhone>
                  </div>
                  <h5 className="h5">robert123@gmail.com</h5>
                </div>
                <div>
                  <div className="icon-con" style={{ color: "green" }}>
                    <FaLink></FaLink>
                  </div>
                  <h5 className="h5">robert123@gmail.com</h5>
                </div>
              </div>
              <div className="jobleft-part-two-sect-one-item-three">
                <div
                  className="icon-con"
                  style={{ backgroundColor: "#1a1e5d" }}
                >
                  <FaFacebook></FaFacebook>
                </div>
                <div
                  className="icon-con"
                  style={{ backgroundColor: "#0d6efd" }}
                >
                  <FaGoogle></FaGoogle>
                </div>
                <div
                  className="icon-con"
                  style={{ backgroundColor: "#dc3545" }}
                >
                  <FaTwitter></FaTwitter>
                </div>
                <div
                  className="icon-con"
                  style={{ backgroundColor: "#198754" }}
                >
                  <FaDribbble></FaDribbble>
                </div>
              </div>
              <div className="jobleft-part-two-sect-one-item-four">
                <button style={{ backgroundColor: "#0d6efd" }}>
                  <FaUser></FaUser>
                  <h5 className="h5">Chat</h5>
                </button>
                <button style={{ backgroundColor: "#6f42c1" }}>
                  <FaEnvelope></FaEnvelope>
                  <h5 className="h5">Contact Me</h5>
                </button>
              </div>
            </div>
            <div className="jobleft-part-two-sect-two">
              <p className="p">Keywords</p>
              <div className="jobleft-part-two-sect-one-item-four">
                <button>
                  <h5 className="h5">Software</h5>
                </button>
                <button>
                  <h5 className="h5">Hardware & Network</h5>
                </button>
                <button>
                  <h5 className="h5">Job in USA</h5>
                </button>
              </div>
            </div>
            <div className="jobleft-part-two-sect-three">
              <p className="p">Shares</p>
              <div className="jobleft-part-two-sect-one-item-three">
                <div
                  className="icon-con"
                  style={{ backgroundColor: "#1a1e5d" }}
                >
                  <FaFacebook></FaFacebook>
                </div>
                <div
                  className="icon-con"
                  style={{ backgroundColor: "#0d6efd" }}
                >
                  <FaGoogle></FaGoogle>
                </div>
                <div
                  className="icon-con"
                  style={{ backgroundColor: "#dc3545" }}
                >
                  <FaTwitter></FaTwitter>
                </div>
                <div
                  className="icon-con"
                  style={{ backgroundColor: "#198754" }}
                >
                  <FaDribbble></FaDribbble>
                </div>
              </div>
            </div>
            <div className="jobleft-part-two-sect-four">
              <p className="p">Map Location</p>
              <div></div>
            </div>
          </div>
          <div>
            <JobCard />
            <div className="contact-part-one">
              <form className="contact-form">
                <input className="input" type="text" placeholder="Your Name" />
                <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                />
                <textarea
                  className="input textarea"
                  placeh
                  older="Message"
                ></textarea>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="about-part-seven">
          <div>
            <h2 className="h2">Subscribe to Our Newsletter</h2>
            <h5 className="h5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium, officiis.
            </h5>
          </div>
          <form className="about-page-form">
            <input className="input" type="email" />
            <button className="form-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
