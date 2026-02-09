
import { Facebook, Instagram, Twitter } from 'lucide-react';
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
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-accent text-slate-400 disabled"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-accent text-slate-400 disabled"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-accent text-slate-400 disabled"><Twitter size={20} /></a>
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

                    <div>
                        <h3>Services</h3>
                        <div className="footer-links">
                            <a href="#services" className="footer-link">Residential Construction</a>
                            <a href="#services" className="footer-link">Architectural Design</a>
                            <a href="#services" className="footer-link">Interior Design</a>
                            <a href="#services" className="footer-link">Renovation</a>
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
