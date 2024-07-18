// components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>DAV College</h2>
                    <p>Dhobighat Lalitpur</p>
                    <p>Lalitpur</p>
                </div>
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <ul className="social-media">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>Email: dav123@gmail.com</p>
                    <p>Phone: 977 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Company Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
