import React from 'react';
import { ArrowRight, Home, Ruler, Hammer } from 'lucide-react';
import './HeroAnimated.css';

// Modern Animated House SVG Component
const ModernHouse = () => (
    <svg
        viewBox="0 0 500 400"
        className="house-svg"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Blueprint Grid Background */}
        <defs>
            <pattern id="blueprintGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(197, 160, 89, 0.12)" strokeWidth="0.5" />
            </pattern>
        </defs>

        {/* Grid Background */}
        <rect width="500" height="400" fill="url(#blueprintGrid)" />

        {/* Ground/Foundation Line */}
        <line x1="30" y1="320" x2="470" y2="320" stroke="#C5A059" strokeWidth="2" className="draw-line" />

        {/* Modern House - Main Structure (2-Story) */}
        <g className="house-main">
            {/* Left Section - Taller */}
            <rect x="60" y="140" width="160" height="180" fill="none" stroke="#C5A059" strokeWidth="2" className="draw-line delay-1" />

            {/* Right Section - Lower with Flat Roof */}
            <rect x="220" y="200" width="180" height="120" fill="none" stroke="#C5A059" strokeWidth="2" className="draw-line delay-2" />

            {/* Flat Roof Overhangs */}
            <line x1="50" y1="140" x2="230" y2="140" stroke="#C5A059" strokeWidth="3" className="draw-line delay-1" />
            <line x1="210" y1="200" x2="410" y2="200" stroke="#C5A059" strokeWidth="3" className="draw-line delay-2" />
        </g>

        {/* Large Modern Windows - Left Section */}
        <g className="windows-left">
            {/* Floor-to-ceiling window left */}
            <rect x="80" y="160" width="60" height="100" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-3" />
            <line x1="110" y1="160" x2="110" y2="260" stroke="#C5A059" strokeWidth="1" className="draw-line delay-4" opacity="0.6" />

            {/* Upper small windows */}
            <rect x="160" y="160" width="40" height="35" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-3" />

            {/* Lower section window */}
            <rect x="80" y="275" width="120" height="30" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
            <line x1="120" y1="275" x2="120" y2="305" stroke="#C5A059" strokeWidth="1" className="draw-line delay-5" opacity="0.6" />
            <line x1="160" y1="275" x2="160" y2="305" stroke="#C5A059" strokeWidth="1" className="draw-line delay-5" opacity="0.6" />
        </g>

        {/* Large Modern Windows - Right Section */}
        <g className="windows-right">
            {/* Panoramic window */}
            <rect x="240" y="220" width="140" height="60" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-3" />
            <line x1="310" y1="220" x2="310" y2="280" stroke="#C5A059" strokeWidth="1" className="draw-line delay-4" opacity="0.6" />

            {/* Smaller accent windows */}
            <rect x="340" y="290" width="40" height="20" fill="none" stroke="#C5A059" strokeWidth="1" className="draw-line delay-5" />
        </g>

        {/* Modern Door - Glass with Frame */}
        <g className="door">
            <rect x="240" y="290" width="50" height="30" fill="none" stroke="#C5A059" strokeWidth="2" className="draw-line delay-4" />
            <line x1="265" y1="290" x2="265" y2="320" stroke="#C5A059" strokeWidth="1" className="draw-line delay-5" opacity="0.6" />
            <circle cx="282" cy="305" r="3" fill="#C5A059" className="fade-in delay-5" />
        </g>

        {/* Garage */}
        <g className="garage">
            <rect x="310" y="290" width="70" height="30" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
            {/* Garage door lines */}
            <line x1="310" y1="300" x2="380" y2="300" stroke="#C5A059" strokeWidth="0.5" className="draw-line delay-5" opacity="0.4" />
            <line x1="310" y1="310" x2="380" y2="310" stroke="#C5A059" strokeWidth="0.5" className="draw-line delay-5" opacity="0.4" />
        </g>

        {/* Architectural Details */}
        <g className="details">
            {/* Vertical accent line on left building */}
            <line x1="155" y1="140" x2="155" y2="320" stroke="#C5A059" strokeWidth="1" strokeDasharray="4,4" className="draw-line delay-5" opacity="0.4" />

            {/* Horizontal accent on right section */}
            <line x1="220" y1="250" x2="400" y2="250" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="3,3" className="draw-line delay-5" opacity="0.3" />
        </g>

        {/* Landscaping Elements */}
        <g className="landscape">
            {/* Tree/Plant - Simplified Modern */}
            <line x1="440" y1="320" x2="440" y2="280" stroke="#C5A059" strokeWidth="2" className="draw-line delay-6" />
            <circle cx="440" cy="265" r="20" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-6" />

            {/* Pathway */}
            <line x1="265" y1="320" x2="265" y2="350" stroke="#C5A059" strokeWidth="6" className="draw-line delay-6" opacity="0.3" />
        </g>

        {/* Dimension Lines */}
        <g className="dimensions" opacity="0.35">
            {/* Width dimension */}
            <line x1="60" y1="350" x2="400" y2="350" stroke="#C5A059" strokeWidth="1" className="draw-line delay-7" />
            <line x1="60" y1="345" x2="60" y2="355" stroke="#C5A059" strokeWidth="1" className="draw-line delay-7" />
            <line x1="400" y1="345" x2="400" y2="355" stroke="#C5A059" strokeWidth="1" className="draw-line delay-7" />
            <text x="230" y="365" textAnchor="middle" fill="#C5A059" fontSize="11" fontFamily="monospace" className="fade-in delay-8">2400 SQ FT</text>

            {/* Height dimension */}
            <line x1="30" y1="140" x2="30" y2="320" stroke="#C5A059" strokeWidth="1" className="draw-line delay-7" />
            <line x1="25" y1="140" x2="35" y2="140" stroke="#C5A059" strokeWidth="1" className="draw-line delay-7" />
            <line x1="25" y1="320" x2="35" y2="320" stroke="#C5A059" strokeWidth="1" className="draw-line delay-7" />
        </g>

        {/* Floating Measurement Indicators */}
        <g className="indicators">
            <circle cx="460" cy="350" r="12" fill="none" stroke="#C5A059" strokeWidth="1" className="pulse-ring" />
            <circle cx="30" cy="230" r="8" fill="none" stroke="#C5A059" strokeWidth="1" className="pulse-ring delay-1" />
        </g>
    </svg>
);

const HeroAnimated = () => {
    return (
        <section className="hero-animated">
            {/* Animated Modern House - Desktop */}
            <div className="house-container">
                <ModernHouse />
                {/* Floating construction icons */}
                <div className="floating-icon icon-1">
                    <Home size={24} />
                </div>
                <div className="floating-icon icon-2">
                    <Ruler size={20} />
                </div>
                <div className="floating-icon icon-3">
                    <Hammer size={22} />
                </div>
            </div>

            {/* Construction Background - Mobile/Fallback */}
            <div className="construction-bg"></div>

            {/* Animated Grid Overlay */}
            <div className="grid-overlay"></div>

            {/* Floating Elements */}
            <div className="floating-elements">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="floating-element"></div>
                ))}
            </div>

            {/* Top Header */}
            <div className="hero-header">
                <div className="hero-header-inner">
                    <div className="coords">
                        <span>AVADI, CHENNAI</span>
                        <div className="coord-dot"></div>
                        <span>TAMIL NADU</span>
                    </div>

                    <div className="brand-section">
                        <div className="brand-logo">SSJ</div>
                        <div className="brand-divider"></div>
                        <span className="brand-tagline">SINCE 2015</span>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className="corner-accent top-left"></div>
            <div className="corner-accent top-right"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="corner-accent bottom-right"></div>

            {/* Main Content */}
            <div className="hero-main">
                <div className="content-wrapper">
                    <div className="content-box">
                        {/* Top Decoration */}
                        <div className="top-decoration">
                            <div className="deco-line"></div>
                            <span className="deco-symbol">⬡</span>
                            <div className="deco-line-full"></div>
                        </div>

                        {/* Title */}
                        <div className="title-wrapper">
                            <div className="title-accent"></div>
                            <h1 className="hero-title">
                                BUILDING <span className="accent">DREAMS</span>
                            </h1>
                        </div>

                        {/* Decorative Dots */}
                        <div className="dots-decoration">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div key={i} className="dot"></div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="description-wrapper">
                            <p className="description">
                                We provide complete end-to-end construction solutions. From blueprint to final handover, we build efficient, beautiful, and durable homes in Chennai's western region.
                            </p>
                            <div className="description-accent">
                                <div className="description-accent-dot"></div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="cta-buttons">
                            <a href="#calculator" className="cta-btn primary">
                                <span className="corner-tl"></span>
                                <span className="corner-br"></span>
                                GET FREE QUOTE <ArrowRight size={16} style={{ marginLeft: '0.5rem', display: 'inline' }} />
                            </a>

                            <a href="/services" className="cta-btn">
                                <span className="corner-tl"></span>
                                <span className="corner-br"></span>
                                EXPLORE SERVICES
                            </a>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="bottom-decoration">
                            <span className="symbol">⬡</span>
                            <div className="line"></div>
                            <span className="text">SSJ.DEVELOPERS</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroAnimated;
