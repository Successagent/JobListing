import "../Contact/Contact.css";

import Footer from "../../components/Footer";
import { Banner } from "../../components";
import Header from "../../components/Header/index";

const index = () => {
  return (
    <>
      <Header />
      <div className="contact-page">
        <Banner small>
          <h1>Contact Us</h1>
          <p>Home / Contact</p>
        </Banner>
        <div className="contact-part-one">
          <form className="contact-form">
            <input className="input" type="text" placeholder="Your Name" />
            <input className="input" type="email" placeholder="Email Address" />
            <textarea
              className="input textarea"
              placeh
              older="Message"
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
        <div className="contact-part-two">
          <h2 className="h2">Contact Info</h2>
          <h5 className="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            dolorem.F
          </h5>
          <div className="grid">
            <div style={{ backgroundColor: "#0d6efd" }}></div>
            <div style={{ backgroundColor: "#d63384" }}></div>
            <div style={{ backgroundColor: "#ffc107" }}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
