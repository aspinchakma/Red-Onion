import React from 'react';
import './Footer.css';
import logoImg from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className="main-footer-section">
            <div className="footer-container">
                <div className="row">
                    <div className="col-lg-6 footer-mini-container">
                        <img width="140px" height="40px" src={logoImg} alt="" />
                    </div>
                    <div className="col-lg-3 footer-mini-container">
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className="col-lg-3 footer-mini-container">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                    <div className="col-lg-6">
                        <p className="copyrights">Copyright &#9400 2021 Online food</p>
                    </div>
                    <div className="col-lg-2 footer-mini-container">
                        <p>Privacy Policy.</p>
                    </div>
                    <div className="col-lg-2 footer-mini-container">
                        <p>Terms of Use</p>
                    </div>
                    <div className="col-lg-2 footer-mini-container">
                        <p>Pricing</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;