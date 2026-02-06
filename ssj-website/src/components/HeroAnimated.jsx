import React from 'react';
import { ArrowRight, Home, Ruler, Hammer } from 'lucide-react';
import './HeroAnimated.css';

// Practical Independent House SVG Component
const ModernHouse = () => (
    <svg
        viewBox="0 0 800 600"
        className="house-svg"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            {/* Simple Grid */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(197, 160, 89, 0.05)" strokeWidth="0.5" />
            </pattern>
            {/* Roof Tile Pattern */}
            <pattern id="roofTiles" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="5" height="5" fill="#C5A059" fillOpacity="0.1" />
            </pattern>
        </defs>

        {/* Background */}
        <rect width="800" height="600" fill="url(#grid)" />

        {/* Street Level */}
        <line x1="50" y1="500" x2="750" y2="500" stroke="#C5A059" strokeWidth="2" className="draw-line" />

        {/* Compound Wall (Front Boundary) */}
        <g className="compound-wall">
            {/* Wall Left */}
            <rect x="50" y="440" width="150" height="60" fill="rgba(255,255,255,0.8)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-6" />
            <rect x="50" y="450" width="150" height="10" fill="none" stroke="#C5A059" strokeWidth="0.5" opacity="0.3" />
            {/* Main Gate */}
            <rect x="200" y="440" width="180" height="60" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-6" />
            {/* Gate Grills */}
            <line x1="230" y1="440" x2="230" y2="500" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
            <line x1="260" y1="440" x2="260" y2="500" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
            <line x1="290" y1="440" x2="290" y2="500" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
            <line x1="320" y1="440" x2="320" y2="500" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
            <line x1="350" y1="440" x2="350" y2="500" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
            {/* Wall Right */}
            <rect x="380" y="440" width="370" height="60" fill="rgba(255,255,255,0.8)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-6" />
            <text x="650" y="475" fill="#C5A059" fontSize="10" fontFamily="sans-serif" opacity="0.7">PLOT NO. 12</text>
        </g>

        {/* --- MAIN HOUSE STRUCTURE --- */}
        <g className="house-structure">
            {/* Ground Floor */}
            <rect x="150" y="280" width="400" height="160" fill="rgba(255,255,255,0.5)" stroke="#C5A059" strokeWidth="2" className="draw-line delay-1" />

            {/* Car Porch (Covered Parking) */}
            <path d="M 550 350 L 550 440" stroke="#C5A059" strokeWidth="2" className="draw-line delay-2" /> {/* Pillar */}
            <path d="M 550 440 L 700 440 L 680 350 Z" fill="none" stroke="none" /> {/* Ground Shadow? */}
            <path d="M 450 280 L 600 280 L 550 350 L 400 350 Z" fill="url(#roofTiles)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" /> {/* Porch Roof */}

            {/* First Floor */}
            <rect x="150" y="140" width="350" height="140" fill="rgba(255,255,255,0.5)" stroke="#C5A059" strokeWidth="2" className="draw-line delay-3" />

            {/* Roof / Terrace Parapet */}
            <rect x="140" y="130" width="370" height="10" fill="#C5A059" stroke="none" opacity="0.8" className="draw-line delay-4" /> {/* Top Trim */}
            <line x1="200" y1="90" x2="200" y2="130" stroke="#C5A059" strokeWidth="2" /> {/* Vertical Duct/Pipe - Fixed connection */}
            <rect x="180" y="90" width="80" height="40" fill="none" stroke="#C5A059" strokeWidth="1.5" /> {/* Stair Headroom */}
        </g>

        {/* --- PRACTICAL ELEMENTS --- */}
        <g className="details">
            {/* Front Door with Steps */}
            <rect x="250" y="360" width="50" height="80" fill="rgba(197, 160, 89, 0.1)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" />
            <line x1="220" y1="440" x2="330" y2="440" stroke="#C5A059" strokeWidth="1" /> {/* Step 1 */}
            <line x1="210" y1="450" x2="340" y2="450" stroke="#C5A059" strokeWidth="1" opacity="0.5" /> {/* Step 2 */}

            {/* Ground Floor Windows with Sunshades (Chajjas) */}
            <g className="window-gf-left">
                <rect x="180" y="320" width="50" height="60" fill="white" stroke="#C5A059" strokeWidth="1" className="draw-line delay-3" />
                <path d="M 170 320 L 240 320 L 235 310 L 175 310 Z" fill="#C5A059" opacity="0.4" /> {/* Sunshade */}
                <line x1="205" y1="320" x2="205" y2="380" stroke="#C5A059" strokeWidth="0.5" />
                <line x1="180" y1="350" x2="230" y2="350" stroke="#C5A059" strokeWidth="0.5" />
            </g>

            {/* Balcony (First Floor) */}
            <rect x="350" y="240" width="120" height="40" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
            <line x1="350" y1="240" x2="470" y2="240" stroke="#C5A059" strokeWidth="2" /> {/* Handrail */}
            <line x1="370" y1="240" x2="370" y2="280" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="390" y1="240" x2="390" y2="280" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="410" y1="240" x2="410" y2="280" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="430" y1="240" x2="430" y2="280" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="450" y1="240" x2="450" y2="280" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="470" y1="240" x2="470" y2="280" stroke="#C5A059" strokeWidth="1.5" /> {/* Use lighter stroke for end post to match others or bolder? Sames as others but visible */}
            <rect x="360" y="160" width="60" height="80" fill="rgba(197, 160, 89, 0.1)" stroke="#C5A059" strokeWidth="1" /> {/* Balcony Door */}

            {/* Bedroom Window (First Floor) */}
            <g className="window-ff-left">
                <rect x="180" y="180" width="60" height="50" fill="white" stroke="#C5A059" strokeWidth="1" className="draw-line delay-5" />
                <path d="M 170 180 L 250 180 L 245 170 L 175 170 Z" fill="#C5A059" opacity="0.4" /> {/* Sunshade */}
            </g>
        </g>

        {/* Parked Car (Stylized outline) */}
        <g className="car" opacity="0.6">
            <path d="M 580 440 L 680 440 L 670 410 L 640 400 L 600 400 L 580 420 Z" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-5" />
            <circle cx="600" cy="440" r="12" fill="none" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="660" cy="440" r="12" fill="none" stroke="#C5A059" strokeWidth="1.5" />
        </g>

        {/* Trees/Plants */}
        <g className="landscape">
            <path d="M 80 440 L 80 380" stroke="#C5A059" strokeWidth="2" />
            <circle cx="80" cy="360" r="30" fill="rgba(197, 160, 89, 0.1)" stroke="#C5A059" strokeWidth="1" />
            <circle cx="60" cy="370" r="20" fill="rgba(197, 160, 89, 0.1)" stroke="#C5A059" strokeWidth="1" />
            <circle cx="100" cy="370" r="20" fill="rgba(197, 160, 89, 0.1)" stroke="#C5A059" strokeWidth="1" />
        </g>

        {/* Floating Labels */}
        <g className="labels">
            <text x="500" y="550" textAnchor="middle" fill="#C5A059" fontSize="14" letterSpacing="1" className="fade-in delay-7">PRACTICAL VILLA • 2200 SQ.FT</text>
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
