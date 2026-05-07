import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = ["About Us", "Delivery", "Partners", "Privacy Policy"];

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* LEFT */}
        <section className="footer-content-left">
          <img src={assets.logo} alt="Tomato logo" className="footer-logo" />

          <p>© {currentYear} Tomato.com. All rights reserved.</p>

          <div className="footer-social-icons">
            <button type="button" className="social-btn" aria-label="Facebook">
              <img src={assets.facebook_icon} alt="Facebook" />
            </button>

            <button type="button" className="social-btn" aria-label="Twitter">
              <img src={assets.twitter_icon} alt="Twitter" />
            </button>

            <button type="button" className="social-btn" aria-label="LinkedIn">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </button>
          </div>
        </section>

        {/* CENTER */}
        <nav className="footer-content-center" aria-label="Footer Navigation">
          <h2>Company</h2>

          <ul>
            {companyLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </nav>

        {/* RIGHT */}
        <section className="footer-content-right">
          <h2>Get in Touch</h2>

          <address>
            <ul>
              <li>
                <a href="tel:+9199XXXXXX99">+91-99XXXXXX99</a>
              </li>

              <li>
                <a href="mailto:customerservice@tomato.com">
                  customerservice@tomato.com
                </a>
              </li>
            </ul>
          </address>
        </section>
      </div>

      <hr />

      {/* DOWNLOAD */}
      <section className="app-download" id="app-download">
        <p>For a better experience, download the Tomato app</p>

        <div className="app-download-platforms">
          <button
            type="button"
            className="store-btn"
            aria-label="Download from Google Play"
          >
            <img src={assets.play_store} alt="Google Play Store" />
          </button>

          <button
            type="button"
            className="store-btn"
            aria-label="Download from App Store"
          >
            <img src={assets.app_store} alt="Apple App Store" />
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
