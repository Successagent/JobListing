import '../Footer/Footer.css'

import {
  FaCcAmex,
  FaCcVisa,
  FaCreditCard,
  FaCcMastercard,
  FaCcPaypal,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGoogle,
} from 'react-icons/fa'

const index = () => {
  return (
    <footer className="footer">
      <div className="grid">
        <div>
          <p className="p">Resources</p>
          <ul>
            <li>Supports</li>
            <li>FAQ</li>
            <li>Terms Of Services</li>
            <li>Contacts Details</li>
          </ul>
        </div>
        <div>
          <p className="p">Popular Ads</p>
          <ul>
            <li>Supports</li>
            <li>FAQ</li>
            <li>Terms Of Services</li>
            <li>Contacts Details</li>
          </ul>
        </div>
        <div>
          <p className="p">Popular Ads</p>
          <ul>
            <li>Supports</li>
            <li>FAQ</li>
            <li>Terms Of Services</li>
            <li>Contacts Details</li>
          </ul>
        </div>
        <div className="footer-subcribe-sect">
          <div>
            <p className="p">Subscribe</p>
            <form className="about-page-form">
              <input className="input" type="email" />
              <button className="form-btn">Subscribe</button>
            </form>
          </div>
          <div>
            <p className="p">Payments</p>
            <div className="footer-icons-con">
              <FaCcAmex></FaCcAmex>
              <FaCcMastercard></FaCcMastercard>
              <FaCcPaypal></FaCcPaypal>
              <FaCcVisa></FaCcVisa>
              <FaCreditCard></FaCreditCard>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-part-one">
        <h5 className="h5">
          Copywright @ 2022 Design with by joblisting all right reserved
        </h5>
        <div className="footer-part-one-icons footer-icons-con">
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
          <FaTwitter></FaTwitter>
          <FaYoutube></FaYoutube>
          <FaGoogle></FaGoogle>
        </div>
      </div>

      <ul className="footer-link">
        <li>Home</li>
        <li>Job Left</li>
        <li>About</li>
        <li>Contact</li>
        <li>Galleries</li>
      </ul>
    </footer>
  )
}

export default index
