import './footer.scss';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <div className="first-left">
          <p>FIND A STORE</p>
          <p>BECOME A MEMBER</p>
          <p>Send Us Feedback</p>
          <p>FIND A STORE</p>
          <p>BECOME A MEMBER</p>
          <p>Send Us Feedback</p>
        </div>
        <div className="second-left">
          <p style={{ color: '#fff' }}>HELP</p>
          <p>Get Help</p>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>Returns</p>
          <p>Payment Options</p>
          <p>Contact Us</p>
        </div>
        <div className="third-left">
          <p style={{ color: '#fff' }}>ABOUT NIKE</p>
          <p>About Nike</p>
          <p>News</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Sustainability</p>
        </div>
      </div>
      <div className="right-footer">
        <ul className="social-list">
          <li className="social-item">
            <FacebookOutlinedIcon />
          </li>
          <li className="social-item">
            <GitHubIcon />
          </li>
          <li className="social-item">
            <InstagramIcon />
          </li>
          <li className="social-item">
            <LinkedInIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
