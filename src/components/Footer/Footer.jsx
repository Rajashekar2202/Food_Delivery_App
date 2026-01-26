import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">

        {/* Left Section */}
        <section className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>© {currentYear} Tomato.com. All rights reserved</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook Icon" />
            <img src={assets.twitter_icon} alt="X.com Icon" />
            <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
          </div>
        </section>

        {/* Center Section */}
        <nav className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Partners</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>

        {/* Right Section */}
        <section className="footer-content-right">
          <h2>Get in Touch</h2>
          <address>
            <ul>
            <li>Phone: +91-99******99</li>
            <li>customerservice@tomato.com</li>
          </ul>
          </address>          
        </section>
      </div>
      <hr />

      {/* App Download Section */}
      <section className="app-download" id="app-download">
        <p>For a better experience, download the Tomato app</p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="Google Play Store" />
          <img src={assets.app_store} alt="Apple App Store" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
