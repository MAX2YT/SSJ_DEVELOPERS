
import { ArrowRight, Home, Ruler, Hammer } from 'lucide-react';

import './HeroAnimated.css';

// Blueprint-style Modern House SVG Component
const ModernHouse = () => (
    <svg
        viewBox="0 0 800 580"
        className="house-svg"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            {/* Subtle grid pattern */}
            <pattern id="bp-grid-sm" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(197,160,89,0.12)" strokeWidth="0.5" />
            </pattern>
            <pattern id="bp-grid-lg" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(197,160,89,0.15)" strokeWidth="1" />
            </pattern>
            {/* Gold glow filter */}
            <filter id="bp-glow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="bp-glow-strong">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
        </defs>

        {/* Transparent background — inherits page white */}
        <rect width="800" height="580" fill="transparent" />
        <rect width="800" height="580" fill="url(#bp-grid-sm)" opacity="0.5" />
        <rect width="800" height="580" fill="url(#bp-grid-lg)" opacity="0.5" />

        {/* ”€”€ GROUND LINE ”€”€ */}
        <line x1="60" y1="490" x2="740" y2="490" stroke="#C5A059" strokeWidth="1.5" opacity="0.7" filter="url(#bp-glow)" className="draw-line" />

        {/* ”€”€ LEFT TALL TOWER ”€”€ */}
        {/* Main body */}
        <rect x="100" y="130" width="185" height="360" fill="rgba(197,160,89,0.05)" stroke="#C5A059" strokeWidth="1.8" filter="url(#bp-glow)" className="draw-line delay-1" />
        {/* Roof cap flat slab */}
        <rect x="88" y="118" width="209" height="14" fill="rgba(197,160,89,0.10)" stroke="#C5A059" strokeWidth="1.8" filter="url(#bp-glow)" className="draw-line delay-2" />
        {/* Parapet top */}
        <rect x="88" y="108" width="100" height="12" fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-2" />

        {/* Vertical columns on left tower */}
        <line x1="120" y1="130" x2="120" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
        <line x1="165" y1="130" x2="165" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
        <line x1="210" y1="130" x2="210" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
        <line x1="255" y1="130" x2="255" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.5" />

        {/* Floor divider */}
        <rect x="100" y="316" width="185" height="7" fill="rgba(197,160,89,0.10)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-3" />

        {/* ”€”€ RIGHT LOWER BLOCK ”€”€ */}
        <rect x="285" y="180" width="230" height="310" fill="rgba(197,160,89,0.04)" stroke="#C5A059" strokeWidth="1.8" filter="url(#bp-glow)" className="draw-line delay-1" />
        {/* Roof slab */}
        <rect x="273" y="168" width="254" height="14" fill="rgba(197,160,89,0.10)" stroke="#C5A059" strokeWidth="1.8" filter="url(#bp-glow)" className="draw-line delay-2" />

        {/* Vertical columns on right block */}
        <line x1="310" y1="180" x2="310" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.4" />
        <line x1="360" y1="180" x2="360" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.4" />
        <line x1="410" y1="180" x2="410" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.4" />
        <line x1="460" y1="180" x2="460" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.4" />
        <line x1="490" y1="180" x2="490" y2="490" stroke="#C5A059" strokeWidth="1" opacity="0.4" />

        {/* Floor divider right */}
        <rect x="285" y="334" width="230" height="7" fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="1.2" className="draw-line delay-3" />

        {/* ”€”€ FAR RIGHT GARAGE / ANNEX ”€”€ */}
        <rect x="515" y="310" width="155" height="180" fill="rgba(30,90,180,0.08)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" />
        {/* Annex roof slab */}
        <rect x="505" y="298" width="175" height="14" fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" />

        {/* Connecting covered walkway / breezeway top */}
        <rect x="515" y="268" width="90" height="10" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1.2" className="draw-line delay-3" />
        <line x1="515" y1="278" x2="515" y2="310" stroke="#C5A059" strokeWidth="1.2" opacity="0.5" />
        <line x1="605" y1="278" x2="605" y2="310" stroke="#C5A059" strokeWidth="1.2" opacity="0.5" />

        {/* ”€”€ FIRST FLOOR WINDOWS €” Left Tower ”€”€ */}
        {/* Large glazed curtain wall */}
        <rect x="110" y="148" width="165" height="110" fill="rgba(197,160,89,0.10)" stroke="#C5A059" strokeWidth="1.5" filter="url(#bp-glow)" className="draw-line delay-3" />
        {/* Curtain wall vertical mullions */}
        <line x1="152" y1="148" x2="152" y2="258" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
        <line x1="193" y1="148" x2="193" y2="258" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
        <line x1="234" y1="148" x2="234" y2="258" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
        {/* Horizontal rail */}
        <line x1="110" y1="198" x2="275" y2="198" stroke="#C5A059" strokeWidth="1" opacity="0.5" />
        {/* Glass highlight €” cyan tinted panel */}
        <rect x="152" y="148" width="41" height="50" fill="rgba(197,160,89,0.15)" stroke="none" className="draw-line delay-3" />

        {/* Small top window left tower */}
        <rect x="110" y="276" width="55" height="32" fill="rgba(197,160,89,0.07)" stroke="#C5A059" strokeWidth="1.2" className="draw-line delay-4" />
        <line x1="137" y1="276" x2="137" y2="308" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />

        {/* ”€”€ FIRST FLOOR WINDOWS €” Right Block ”€”€ */}
        {/* Left window group */}
        <rect x="295" y="196" width="85" height="60" fill="rgba(197,160,89,0.07)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-3" />
        <line x1="337" y1="196" x2="337" y2="256" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        <line x1="295" y1="220" x2="380" y2="220" stroke="#C5A059" strokeWidth="0.7" opacity="0.4" />

        {/* Right window group */}
        <rect x="400" y="196" width="105" height="60" fill="rgba(197,160,89,0.07)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-3" />
        <line x1="452" y1="196" x2="452" y2="256" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        <line x1="400" y1="220" x2="505" y2="220" stroke="#C5A059" strokeWidth="0.7" opacity="0.4" />

        {/* BALCONY / TERRACE - Right Block first floor */}
        <rect x="295" y="256" width="210" height="78" fill="rgba(197,160,89,0.03)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-4" />
        {/* Balcony railing top rail */}
        <line x1="295" y1="272" x2="505" y2="272" stroke="#C5A059" strokeWidth="2" opacity="0.9" filter="url(#bp-glow)" />
        {/* Railing balusters */}
        {[305, 325, 345, 365, 385, 405, 425, 445, 465, 485].map((x, i) => (
            <line key={i} x1={x} y1="272" x2={x} y2="334" stroke="rgba(197,160,89,0.35)" strokeWidth="1" opacity="1" />
        ))}

        {/* ”€”€ GROUND FLOOR €” Entrance & Doors ”€”€ */}
        {/* Main entrance door */}
        <rect x="268" y="370" width="64" height="120" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1.6" filter="url(#bp-glow)" className="draw-line delay-2" />
        <line x1="300" y1="370" x2="300" y2="490" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        <circle cx="290" cy="432" r="3.5" fill="#C5A059" opacity="0.9" />

        {/* Left pillar */}
        <rect x="253" y="334" width="13" height="156" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" />
        {/* Right pillar */}
        <rect x="334" y="334" width="13" height="156" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-2" />
        {/* Entrance lintel */}
        <rect x="245" y="332" width="110" height="9" fill="rgba(197,160,89,0.14)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-3" />

        {/* Ground floor left window */}
        <rect x="110" y="366" width="120" height="90" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
        <line x1="170" y1="366" x2="170" y2="456" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        {[378, 396, 414, 432, 450].map((y, i) => (
            <line key={i} x1="110" y1={y} x2="230" y2={y} stroke="#C5A059" strokeWidth="0.6" opacity="0.4" />
        ))}
        <rect x="104" y="358" width="132" height="9" fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="1" className="draw-line delay-4" />

        {/* Ground floor right window */}
        <rect x="360" y="366" width="130" height="90" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
        <line x1="425" y1="366" x2="425" y2="456" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        {[378, 396, 414, 432, 450].map((y, i) => (
            <line key={i} x1="360" y1={y} x2="490" y2={y} stroke="#C5A059" strokeWidth="0.6" opacity="0.4" />
        ))}
        <rect x="354" y="358" width="142" height="9" fill="rgba(197,160,89,0.08)" stroke="#C5A059" strokeWidth="1" className="draw-line delay-4" />

        {/* ”€”€ GARAGE DOOR (annex) ”€”€ */}
        <rect x="527" y="378" width="125" height="112" fill="rgba(197,160,89,0.03)" stroke="#C5A059" strokeWidth="1.5" className="draw-line delay-4" />
        {[398, 418, 438, 458, 478].map((y, i) => (
            <line key={i} x1="527" y1={y} x2="652" y2={y} stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />
        ))}
        <line x1="589" y1="378" x2="589" y2="490" stroke="#C5A059" strokeWidth="0.8" opacity="0.5" />

        {/* ”€”€ ENTRANCE STEPS ”€”€ */}
        <rect x="255" y="480" width="90" height="10" fill="rgba(197,160,89,0.05)" stroke="#C5A059" strokeWidth="0.9" className="draw-line delay-5" />
        <rect x="260" y="470" width="80" height="10" fill="rgba(197,160,89,0.04)" stroke="#C5A059" strokeWidth="0.9" className="draw-line delay-5" />

        {/* ”€”€ ROOF: Water tank / parapet box ”€”€ */}
        <rect x="100" y="72" width="42" height="38" fill="rgba(197,160,89,0.04)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-5" />
        <rect x="94" y="65" width="54" height="9" fill="rgba(197,160,89,0.10)" stroke="#C5A059" strokeWidth="1.2" filter="url(#bp-glow)" />
        <line x1="121" y1="108" x2="121" y2="100" stroke="#C5A059" strokeWidth="1.5" opacity="0.7" />

        {/* ”€”€ COMPOUND WALL ”€”€ */}
        <rect x="60" y="464" width="80" height="26" fill="rgba(197,160,89,0.03)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-6" />
        <rect x="60" y="458" width="12" height="32" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1" />
        <rect x="128" y="458" width="12" height="32" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1" />

        <rect x="660" y="464" width="80" height="26" fill="rgba(197,160,89,0.03)" stroke="#C5A059" strokeWidth="1.4" className="draw-line delay-6" />
        <rect x="660" y="458" width="12" height="32" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1" />
        <rect x="728" y="458" width="12" height="32" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1" />

        {/* ”€”€ TREES ”€”€ */}
        <line x1="90" y1="462" x2="90" y2="420" stroke="#C5A059" strokeWidth="1.4" opacity="0.6" />
        <circle cx="90" cy="408" r="17" fill="rgba(197,160,89,0.06)" stroke="#C5A059" strokeWidth="1.2" opacity="0.7" />
        <circle cx="79" cy="416" r="11" fill="rgba(80,160,255,0.07)" stroke="#C5A059" strokeWidth="1" opacity="0.6" />

        <line x1="690" y1="462" x2="690" y2="432" stroke="#C5A059" strokeWidth="1.2" opacity="0.6" />
        <circle cx="690" cy="422" r="12" fill="rgba(197,160,89,0.05)" stroke="#C5A059" strokeWidth="1" opacity="0.6" />

        {/* ”€”€ DIMENSION LINES ”€”€ */}
        <line x1="100" y1="520" x2="515" y2="520" stroke="#C5A059" strokeWidth="0.7" opacity="0.4" strokeDasharray="4 3" />
        <line x1="100" y1="516" x2="100" y2="524" stroke="#C5A059" strokeWidth="0.7" opacity="0.4" />
        <line x1="515" y1="516" x2="515" y2="524" stroke="#C5A059" strokeWidth="0.7" opacity="0.4" />
        <text x="307" y="535" textAnchor="middle" fill="#C5A059" fontSize="9" opacity="0.75" fontFamily="monospace">18.5 M</text>

        <line x1="65" y1="130" x2="65" y2="490" stroke="#C5A059" strokeWidth="0.7" opacity="0.5" strokeDasharray="4 3" />
        <line x1="61" y1="130" x2="69" y2="130" stroke="#C5A059" strokeWidth="0.7" opacity="0.5" />
        <line x1="61" y1="490" x2="69" y2="490" stroke="#C5A059" strokeWidth="0.7" opacity="0.5" />
        <text x="46" y="315" textAnchor="middle" fill="#C5A059" fontSize="9" opacity="0.75" fontFamily="monospace" transform="rotate(-90,46,315)">9.5 M</text>

        {/* ”€”€ LABEL ”€”€ */}
        <text x="400" y="560" textAnchor="middle" fill="#C5A059" fontSize="11" letterSpacing="2.5" opacity="0.75" fontFamily="monospace" className="fade-in delay-7">MODERN DUPLEX COMPLEX  €¢  3500 SQ.FT</text>

        {/* EPS watermark corner */}
        <text x="740" y="20" textAnchor="end" fill="#C5A059" fontSize="9" opacity="0.45" fontFamily="monospace">EPS</text>
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
                            <span className="deco-symbol">¬¡</span>
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
                            <span className="symbol">¬¡</span>
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
