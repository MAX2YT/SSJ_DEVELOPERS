
import { ArrowRight, Home, Ruler, Hammer } from 'lucide-react';

import './HeroAnimated.css';

// Modern 2-Floor Duplex Complex SVG Component
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
        </defs>

        {/* Background */}
        <rect width="800" height="600" fill="url(#grid)" />

        {/* ===== GROUND LINE ===== */}
        <line x1="80" y1="500" x2="720" y2="500" stroke="#C5A059" strokeWidth="2" className="draw-line" />

        {/* ===== LEFT TOWER (Taller Section) ===== */}
        <g className="house-structure">
            {/* Left tower - main wall */}
            <rect x="150" y="120" width="180" height="380" fill="rgba(255,255,255,0.6)" stroke="#C5A059" strokeWidth="2" className="draw-line delay-1" />
            {/* Left tower - roof slab (dark cap) */}
            <rect x="140" y="108" width="200" height="16" fill="#C5A059" opacity="0.85" className="draw-line delay-2" />
            {/* Left tower - secondary roof accent */}
            <rect x="145" y="100" width="100" height="12" fill="#C5A059" opacity="0.6" className="draw-line delay-2" />

            {/* ===== RIGHT SECTION (Slightly Lower) ===== */}
            {/* Right section - main wall */}
            <rect x="330" y="170" width="220" height="330" fill="rgba(255,255,255,0.6)" stroke="#C5A059" strokeWidth="2" className="draw-line delay-1" />
            {/* Right section - roof slab */}
            <rect x="320" y="158" width="240" height="16" fill="#C5A059" opacity="0.85" className="draw-line delay-2" />

            {/* ===== FLOOR DIVIDER (between Ground & First Floor) ===== */}
            <rect x="150" y="320" width="400" height="8" fill="#C5A059" opacity="0.5" className="draw-line delay-3" />
        </g>

        {/* ===== FIRST FLOOR DETAILS ===== */}
        <g className="details">

            {/* -- Left Tower: First Floor Window with Blinds -- */}
            <rect x="175" y="155" width="130" height="100" fill="white" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-3" />
            {/* Window frame divider */}
            <line x1="240" y1="155" x2="240" y2="255" stroke="#C5A059" strokeWidth="1" />
            {/* Horizontal blinds */}
            <line x1="175" y1="170" x2="305" y2="170" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="175" y1="185" x2="305" y2="185" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="175" y1="200" x2="305" y2="200" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="175" y1="215" x2="305" y2="215" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="175" y1="230" x2="305" y2="230" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="175" y1="245" x2="305" y2="245" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />

            {/* -- Left Tower: First Floor Small Window -- */}
            <rect x="175" y="272" width="50" height="40" fill="white" stroke="#C5A059" strokeWidth="1" className="draw-line delay-4" />
            <line x1="175" y1="282" x2="225" y2="282" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="175" y1="292" x2="225" y2="292" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="175" y1="302" x2="225" y2="302" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />

            {/* -- Right Section: First Floor Balcony -- */}
            {/* Balcony railing */}
            <rect x="340" y="240" width="200" height="75" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
            {/* Balcony railing top bar */}
            <line x1="340" y1="260" x2="540" y2="260" stroke="#C5A059" strokeWidth="2" />
            {/* Railing vertical bars */}
            <line x1="355" y1="260" x2="355" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="375" y1="260" x2="375" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="395" y1="260" x2="395" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="415" y1="260" x2="415" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="435" y1="260" x2="435" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="455" y1="260" x2="455" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="475" y1="260" x2="475" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="495" y1="260" x2="495" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="515" y1="260" x2="515" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
            <line x1="535" y1="260" x2="535" y2="315" stroke="#C5A059" strokeWidth="1" opacity="0.6" />

            {/* -- Right Section: First Floor Windows (above balcony) -- */}
            <rect x="350" y="185" width="75" height="50" fill="white" stroke="#C5A059" strokeWidth="1" className="draw-line delay-3" />
            <line x1="387" y1="185" x2="387" y2="235" stroke="#C5A059" strokeWidth="0.7" />
            <line x1="350" y1="200" x2="425" y2="200" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="350" y1="215" x2="425" y2="215" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />

            <rect x="450" y="185" width="85" height="50" fill="white" stroke="#C5A059" strokeWidth="1" className="draw-line delay-3" />
            <line x1="492" y1="185" x2="492" y2="235" stroke="#C5A059" strokeWidth="0.7" />
            <line x1="450" y1="200" x2="535" y2="200" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
            <line x1="450" y1="215" x2="535" y2="215" stroke="#C5A059" strokeWidth="0.5" opacity="0.5" />
        </g>

        {/* ===== GROUND FLOOR DETAILS ===== */}
        <g className="ground-floor">

            {/* -- Central Entrance with Pillars -- */}
            {/* Door */}
            <rect x="300" y="370" width="60" height="130" fill="rgba(197, 160, 89, 0.1)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" />
            <line x1="330" y1="370" x2="330" y2="500" stroke="#C5A059" strokeWidth="0.8" /> {/* Door divider */}
            {/* Door handle */}
            <circle cx="322" cy="440" r="3" fill="#C5A059" opacity="0.8" />

            {/* Left Pillar */}
            <rect x="285" y="330" width="12" height="170" fill="rgba(197, 160, 89, 0.15)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" />
            {/* Right Pillar */}
            <rect x="363" y="330" width="12" height="170" fill="rgba(197, 160, 89, 0.15)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" />

            {/* Entrance overhang / canopy */}
            <rect x="275" y="328" width="110" height="8" fill="#C5A059" opacity="0.6" className="draw-line delay-3" />

            {/* -- Left Side: Ground Floor Window with Blinds -- */}
            <rect x="170" y="370" width="100" height="90" fill="white" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
            <line x1="220" y1="370" x2="220" y2="460" stroke="#C5A059" strokeWidth="0.8" /> {/* Divider */}
            {/* Horizontal blinds */}
            <line x1="170" y1="385" x2="270" y2="385" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            <line x1="170" y1="400" x2="270" y2="400" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            <line x1="170" y1="415" x2="270" y2="415" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            <line x1="170" y1="430" x2="270" y2="430" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            <line x1="170" y1="445" x2="270" y2="445" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            {/* Window sunshade */}
            <rect x="165" y="362" width="110" height="8" fill="#C5A059" opacity="0.4" className="draw-line delay-4" />

            {/* -- Right Side: Ground Floor Window with Blinds -- */}
            <rect x="390" y="370" width="140" height="90" fill="white" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
            <line x1="460" y1="370" x2="460" y2="460" stroke="#C5A059" strokeWidth="0.8" /> {/* Divider */}
            {/* Horizontal blinds */}
            <line x1="390" y1="385" x2="530" y2="385" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            <line x1="390" y1="400" x2="530" y2="400" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            <line x1="390" y1="415" x2="530" y2="415" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            <line x1="390" y1="430" x2="530" y2="430" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            <line x1="390" y1="445" x2="530" y2="445" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
            {/* Window sunshade */}
            <rect x="385" y="362" width="150" height="8" fill="#C5A059" opacity="0.4" className="draw-line delay-4" />

            {/* -- Entrance Steps -- */}
            <line x1="290" y1="500" x2="370" y2="500" stroke="#C5A059" strokeWidth="2" />
            <rect x="295" y="490" width="70" height="10" fill="rgba(197,160,89,0.1)" stroke="#C5A059" strokeWidth="0.8" className="draw-line delay-5" />
        </g>

        {/* ===== DECORATIVE VERTICAL PIPE / WATER TANK on Left Tower ===== */}
        <g className="roof-details">
            <rect x="155" y="70" width="40" height="38" fill="none" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-5" />
            <rect x="148" y="65" width="54" height="8" fill="#C5A059" opacity="0.5" />
            <line x1="175" y1="108" x2="175" y2="100" stroke="#C5A059" strokeWidth="1.5" />
        </g>

        {/* ===== COMPOUND WALL & GATE ===== */}
        <g className="compound-wall">
            {/* Left boundary wall */}
            <rect x="80" y="470" width="70" height="30" fill="rgba(255,255,255,0.5)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-6" />
            {/* Left wall pillars */}
            <rect x="80" y="465" width="10" height="35" fill="rgba(197,160,89,0.2)" stroke="#C5A059" strokeWidth="1" />
            <rect x="140" y="465" width="10" height="35" fill="rgba(197,160,89,0.2)" stroke="#C5A059" strokeWidth="1" />

            {/* Right boundary wall */}
            <rect x="550" y="470" width="170" height="30" fill="rgba(255,255,255,0.5)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-6" />
            {/* Right wall pillars */}
            <rect x="550" y="465" width="10" height="35" fill="rgba(197,160,89,0.2)" stroke="#C5A059" strokeWidth="1" />
            <rect x="620" y="465" width="10" height="35" fill="rgba(197,160,89,0.2)" stroke="#C5A059" strokeWidth="1" />
            <rect x="710" y="465" width="10" height="35" fill="rgba(197,160,89,0.2)" stroke="#C5A059" strokeWidth="1" />
            <text x="640" y="488" fill="#C5A059" fontSize="9" fontFamily="sans-serif" opacity="0.7">PLOT NO. 12</text>
        </g>

        {/* ===== LANDSCAPE ===== */}
        <g className="landscape">
            {/* Left small tree */}
            <path d="M 110 470 L 110 430" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="110" cy="418" r="16" fill="rgba(197, 160, 89, 0.08)" stroke="#C5A059" strokeWidth="1" />
            <circle cx="100" cy="424" r="10" fill="rgba(197, 160, 89, 0.06)" stroke="#C5A059" strokeWidth="0.8" />

            {/* Right small plant */}
            <path d="M 580 470 L 580 445" stroke="#C5A059" strokeWidth="1" />
            <circle cx="580" cy="438" r="10" fill="rgba(197, 160, 89, 0.06)" stroke="#C5A059" strokeWidth="0.8" />
        </g>

        {/* Floating Labels */}
        <g className="labels">
            <text x="400" y="545" textAnchor="middle" fill="#C5A059" fontSize="14" letterSpacing="1" className="fade-in delay-7">MODERN DUPLEX COMPLEX • 3500 SQ.FT</text>
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
                        <div className="cta-buttons flex gap-4">
                            <a href="#calculator" className="btn btn-primary h-14 px-8 text-lg rounded-full flex items-center gap-2">
                                GET FREE QUOTE <ArrowRight size={18} />
                            </a>

                            <a href="/services" className="btn btn-outline h-14 px-8 text-lg rounded-full flex items-center gap-2 bg-stone-50 hover:bg-stone-200 border-stone-300 text-stone-600 hover:text-stone-900">
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

        </section >
    );
};

export default HeroAnimated;
