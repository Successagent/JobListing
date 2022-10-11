import '../JobLeft/JobLeft.css'
import Footer from '../../components/Footer'
import ProfileLogo from '../../assets/25.jpg'

import {
  FaEnvelope,
  FaPhone,
  FaLink,
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaGoogle,
} from 'react-icons/fa'

const index = () => {
  return (
    <>
      <div className="jobleft-page">
        <div className="about-hero-section">
          <h1 className="h1">
            <span>134,445</span> Jobs Available in AstroSoft
          </h1>
          <form className="jobleft-form">
            <input className="input" type="text" />
            <button className="form-btn">Search</button>
          </form>
        </div>
        <div className="jobleft-part-one">
          <p className="p">Jobs</p>
          <ul>
            <li className="h5">Home</li>
            <li className="h5">About Us</li>
            <li className="h5">Contact</li>
          </ul>
        </div>
        <div className="jobleft-part-two">
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
            <div>
                
            </div>
          </div>
          <div></div>
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
  )
}

export default index