import "../About/About.css";
import Footer from "../../components/Footer";
import { Header } from "../../components";
import {
  FaUser,
  FaPencilAlt,
  FaBullhorn,
  FaCreditCard,
  FaHeart,
  FaBookmark,
  FaChartLine,
  FaHandshake,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="about-hero-section">
          <h1 className="h1">About Us</h1>
          <ul className="flex">
            <li className="li">Home</li>
            <li className="li">About Us</li>
          </ul>
        </div>
        <div className="about-part-two">
          <h2 className="h2">Why Pinlist?</h2>
          <p className="p">
            Majority have suffered alteration in some form, by injected humor
          </p>
          <h5 className="h5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered by injected humour, or randomised words
            which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum
            generators on the Internet tend to repeat
          </h5>
          <h5 className="h5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </h5>
          <h5 className="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h5>
        </div>
        <div className="about-part-three">
          <h2 className="h2">How It Works?</h2>
          <p className="p">
            Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
            vehicula
          </p>
          <div className="grid">
            <div>
              <div className="icon-con">
                <FaUser style={{ color: "#d63384", fontSize: "20px" }}></FaUser>
              </div>
              <p className="p">Register</p>
              <h5 className="h5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis
              </h5>
            </div>
            <div>
              <div className="icon-con">
                <FaPencilAlt
                  style={{ color: "#6610f2", fontSize: "20px" }}
                ></FaPencilAlt>
              </div>
              <p className="p">Create Account</p>
              <h5 className="h5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis
              </h5>
            </div>
            <div>
              <div className="icon-con">
                <FaBullhorn
                  style={{ color: "#ffc107", fontSize: "20px" }}
                ></FaBullhorn>
              </div>
              <p className="p">Add Posts</p>
              <h5 className="h5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis
              </h5>
            </div>
            <div>
              <div className="icon-con">
                <FaCreditCard
                  style={{ color: "#dc3545", fontSize: "20px" }}
                ></FaCreditCard>
              </div>
              <p className="p">Get Earnings</p>
              <h5 className="h5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis
              </h5>
            </div>
          </div>
        </div>
        <div className="about-part-four">
          <h2 className="h2">
            Are you ready for the posting you ads on this Site?
          </h2>
          <h5 className="h5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
            odio!
          </h5>
          <button>Free Post Ad</button>
        </div>
        <div className="about-part-five">
          <h2 className="h2">Why Choose Us?</h2>
          <p className="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            commodi!
          </p>
          <div className="grid">
            <div>
              <div
                className="icon-con"
                style={{
                  backgroundColor: "#198754",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaBullhorn></FaBullhorn>
              </div>
              <p className="p">Provide Free Ads</p>
              <h5 className="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, inventore!
              </h5>
            </div>
            <div>
              <div
                className="icon-con"
                style={{
                  backgroundColor: "#6610f2",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaHeart></FaHeart>
              </div>
              <p className="p">Provide Free Ads</p>
              <h5 className="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, inventore!
              </h5>
            </div>
            <div>
              <div
                className="icon-con"
                style={{
                  backgroundColor: "#d63384",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaHandshake></FaHandshake>
              </div>
              <p className="p">Provide Free Ads</p>
              <h5 className="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, inventore!
              </h5>
            </div>
            <div>
              <div
                className="icon-con"
                style={{
                  backgroundColor: "#fd7e14",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaChartLine></FaChartLine>
              </div>
              <p className="p">Provide Free Ads</p>
              <h5 className="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, inventore!
              </h5>
            </div>
            <div>
              <div
                className="icon-con"
                style={{
                  backgroundColor: "#0d6efd",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaBookmark></FaBookmark>
              </div>
              <p className="p">Provide Free Ads</p>
              <h5 className="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, inventore!
              </h5>
            </div>
            <div>
              <div
                className="icon-con"
                style={{
                  backgroundColor: "#dc3545",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaPhone></FaPhone>
              </div>
              <p className="p">Provide Free Ads</p>
              <h5 className="h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, inventore!
              </h5>
            </div>
          </div>
        </div>
        <div className="about-part-six">
          <div className="grid">
            <div>
              <div className="icon-con">
                <FaUser style={{ fontSize: "20px" }}></FaUser>
              </div>

              <h5 className="p">Total Sales</h5>
              <h2 className="h2">1768</h2>
            </div>
            <div>
              <div className="icon-con">
                <FaPencilAlt style={{ fontSize: "20px" }}></FaPencilAlt>
              </div>

              <h5 className="p">Total Projects</h5>
              <h2 className="h2">1768</h2>
            </div>
            <div>
              <div className="icon-con">
                <FaBullhorn style={{ fontSize: "20px" }}></FaBullhorn>
              </div>
              <h5 className="p">Clients</h5>
              <h2 className="h2">1768</h2>
            </div>
            <div>
              <div className="icon-con">
                <FaCreditCard style={{ fontSize: "20px" }}></FaCreditCard>
              </div>
              <h5 className="p">Happy Customers</h5>
              <h2 className="h2">1768</h2>
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

export default About;
