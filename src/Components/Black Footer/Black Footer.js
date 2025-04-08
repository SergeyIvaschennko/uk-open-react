import React from 'react';
import './Black Footer.css';

const BlackFooter = () => {
    return (
        <div className="black-footer">
            <div className="footer-container">
                <div className="black-footer-logo">uk open</div>
                <div className="black-footer-links">About us</div>
                <div className="black-footer-links">Payment</div>
                <div className="black-footer-links">Support</div>
                <div className="black-footer-links">For authors</div>
                <div className="black-footer-links">Policy</div>
                <div className="black-footer-links">Business</div>
                <div className="black-footer-links">Return</div>
            </div>
            <div className="footer-container">
                <div className="black-footer-copyright">© 2025 All rights are reserved</div>
                <div className="social-media-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Facebook" className="social-icon" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="Twitter" className="social-icon" />
                    <img src="https://images.seeklogo.com/logo-png/31/2/university-of-cambridge-logo-png_seeklogo-310247.png" alt="Instagram" className="social-icon" />
                </div>
            </div>
        </div>

    );
};

export default BlackFooter;
