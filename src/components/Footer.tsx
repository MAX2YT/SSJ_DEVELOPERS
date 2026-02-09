
import { Facebook, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            {/* Updated logo display for light background */}
                            <img src="/logo.png" alt="SSJ Developers" className="h-12 w-auto" style={{ maxHeight: '60px' }} />
                        </div>
                        <p className="mb-6 max-w-sm">
                            We provide complete construction and real estate solutions in Avadi and surrounding areas. Quality and integrity are our core values.
                        </p>
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
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SSJ Developers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
