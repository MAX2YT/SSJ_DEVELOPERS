
import { Facebook, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <img src="/logo.png" className="footer-embossed-bg" aria-hidden="true" alt="" />
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <p className="mb-6 max-w-sm">
At SSJ Developers, we don’t just build structures; we create homes and investment opportunities tailored to the growing landscape of Avadi. With a deep-rooted understanding of the local market and a commitment to architectural excellence, we provide end-to-end construction and real estate solutions.                        </p>
                    </div>

                    <div className="footer-links-group">
                    <div>
                        <h3>Social Media Links</h3>
                        <div className="footer-links">
                            <a href="https://youtube.com/@ssjdevelopers-q7i?si=XZpKMKLjEFDB7QS-" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                                <Youtube size={18} />
                                <span>YouTube</span>
                            </a>
                            <a href="https://www.instagram.com/ssjdevelopersofficial?igsh=ZWZwbmVueWRoa3Jo" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                                <Instagram size={18} />
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/share/14UvXCEGsLr/" target="_blank" rel="noopener noreferrer" className="footer-link social-link">
                                <Facebook size={18} />
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3>Quick Links</h3>
                        <div className="footer-links">
                            <a href="#home" className="footer-link">Home</a>
                            <a href="#services" className="footer-link">Services</a>
                            <a href="#packages" className="footer-link">Packages</a>
                            <a href="#contact" className="footer-link">Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SSJ Developers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
