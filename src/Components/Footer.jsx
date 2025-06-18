import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p>
            Manikant, 73, 100 Feet Ring Rd, BTM 2nd Stage, Bengaluru,
            <br />
            Karnataka 560076, India.
          </p>
          <p>Timing: 10AM - 8 PM (All Day)</p>
          <p>Call: (+91) 73533 32000</p>
          <p>Email: Website@htrzmodz.com</p>
        </div>

        {/* Footer Menu */}
        <div className="footer-section">
          <h4>FOOTER MENU</h4>
          <ul>
            <li>Helmets</li>
            <li>Riding Gears</li>
            <li>Performance Parts</li>
            <li>Brands</li>
            <li>Luggage</li>
            <li>Lubricants</li>
          </ul>
        </div>

        {/* Information Menu */}
        <div className="footer-section">
          <h4>INFORMATION</h4>
          <ul>
            <li>Track Order</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>NEWSLETTER</h4>
          <p>
            A short sentence describing what someone will receive by subscribing
          </p>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Htrz Modz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
