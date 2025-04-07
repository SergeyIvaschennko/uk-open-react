import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">uk open</div>
                <div className="footer-links">About us</div>
                <div className="footer-links">Payment</div>
                <div className="footer-links">Support</div>
                <div className="footer-links">For authors</div>
                <div className="footer-links">Policy</div>
                <div className="footer-links">Business</div>
                <div className="footer-links">Return</div>
            </div>
            <div className="footer-container">
                <div className="footer-copyright">© 2024 All rights are reserved</div>
                <div className="social-media-container">
                    <img src="https://www.freeiconspng.com/uploads/white-pinterest-logo-png--30.png" alt="Facebook" className="social-icon" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="Twitter" className="social-icon" />
                    <img src="https://images.seeklogo.com/logo-png/31/2/university-of-cambridge-logo-png_seeklogo-310247.png" alt="Instagram" className="social-icon" />
                </div>
            </div>
        </div>

    );
};

export default Footer;
