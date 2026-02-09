import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="SSJ Developers" style={{ height: '50px', width: 'auto' }} />
                </Link>

                {/* Desktop Nav */}
                <nav className="nav-desktop">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
                    <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link>
                    <Link to="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <nav className="mobile-menu">
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                        <Link to="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
