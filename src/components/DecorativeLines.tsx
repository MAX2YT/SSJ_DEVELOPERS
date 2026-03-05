import React from 'react';

/**
 * Decorative golden flowing lines for the sides of content sections.
 * Wrap this around child content — the lines appear as absolute-positioned
 * SVG curves on the left and right edges, overlaying the content.
 * pointer-events: none ensures they never block clicks.
 */
const DecorativeLines: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ position: 'relative' }}>
            {/* Actual content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>

            {/* Left side — organic, asymmetric curves — sits on top visually */}
            <svg
                className="hidden md:block"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '120px',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 2,
                }}
                preserveAspectRatio="none"
                viewBox="0 0 120 1000"
                aria-hidden="true"
            >
                {/* Primary flowing curve */}
                <path
                    d="M5,0 C60,80 25,180 45,280 C65,380 8,420 25,520 C42,620 70,680 30,780 C-10,880 55,940 5,1000"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="1.5"
                    opacity="0.5"
                />
                {/* Secondary thinner accent */}
                <path
                    d="M30,0 C75,120 10,220 55,340 C100,460 20,540 65,660 C110,780 25,860 70,1000"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    opacity="0.35"
                />
                {/* Tertiary wispy line */}
                <path
                    d="M15,50 C50,150 20,300 40,400 C60,500 12,600 38,750 C64,900 18,950 15,1000"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="0.6"
                    opacity="0.25"
                />
            </svg>

            {/* Right side — different curves for asymmetry — sits on top visually */}
            <svg
                className="hidden md:block"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 2,
                }}
                preserveAspectRatio="none"
                viewBox="0 0 120 1000"
                aria-hidden="true"
            >
                {/* Primary flowing curve — intentionally different from left */}
                <path
                    d="M115,0 C70,100 100,250 80,350 C60,450 110,550 85,650 C60,750 105,850 95,1000"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="1.5"
                    opacity="0.5"
                />
                {/* Secondary accent — shifted start */}
                <path
                    d="M95,30 C50,170 105,290 65,430 C25,570 100,650 65,800 C30,950 90,980 115,1000"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    opacity="0.35"
                />
                {/* Tertiary wisp */}
                <path
                    d="M110,0 C85,90 105,200 90,330 C75,460 108,570 95,700 C82,830 105,920 110,1000"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="0.6"
                    opacity="0.25"
                />
            </svg>
        </div>
    );
};

export default DecorativeLines;
