"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight, Sparkles, Crown, Zap, ChevronDown, Ruler, Palette, Plug, Droplets, Home, UtensilsCrossed, DoorOpen, PaintBucket, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

// Category icons mapping
const categoryIcons = {
    "Design": Ruler,
    "Project Management": Home,
    "Structure": Home,
    "Bathroom & Plumbing": Droplets,
    "Flooring": Palette,
    "Kitchen & Dining": UtensilsCrossed,
    "Door, Windows & Railing": DoorOpen,
    "Painting": PaintBucket,
    "Electrical": Plug,
    "What's Not Included": AlertCircle,
};

// Accordion Item Component
function AccordionItem({ title, items, isOpen, onToggle, isNotIncluded = false }) {
    const Icon = categoryIcons[title] || Home;

    return (
        <div style={{
            borderBottom: '1px solid #E7E5E4',
        }}>
            <button
                onClick={onToggle}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.875rem 0',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Icon style={{
                        width: '1.125rem',
                        height: '1.125rem',
                        color: isNotIncluded ? '#DC2626' : '#C5A059'
                    }} />
                    <span style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: isNotIncluded ? '#DC2626' : '#1C1917'
                    }}>
                        {title}
                    </span>
                </div>
                <ChevronDown
                    style={{
                        width: '1rem',
                        height: '1rem',
                        color: '#78716C',
                        transition: 'transform 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <ul style={{
                            listStyle: 'none',
                            padding: '0 0 0.875rem 1.875rem',
                            margin: 0
                        }}>
                            {items.map((item, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        fontSize: '0.8rem',
                                        color: isNotIncluded ? '#991B1B' : '#57534E',
                                        padding: '0.25rem 0',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <span style={{
                                        width: '4px',
                                        height: '4px',
                                        borderRadius: '50%',
                                        backgroundColor: isNotIncluded ? '#DC2626' : '#C5A059',
                                        marginTop: '0.5rem',
                                        flexShrink: 0
                                    }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Pricing({
    plans,
    title = "Our Construction Packages",
    description = "Choose the package that fits your budget and requirements.",
}) {
    const [isPerSqFt, setIsPerSqFt] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const switchRef = useRef(null);
    const [openCategories, setOpenCategories] = useState({});

    const handleToggle = () => {
        setIsPerSqFt(!isPerSqFt);
        if (isPerSqFt && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            confetti({
                particleCount: 80,
                spread: 70,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: ["#C5A059", "#9F7E3A", "#D4AF37", "#FFD700", "#B8860B"],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 35,
                shapes: ["circle", "square"],
            });
        }
    };

    const toggleCategory = (planIndex, categoryTitle) => {
        const key = `${planIndex}-${categoryTitle}`;
        setOpenCategories(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const icons = [Zap, Star, Crown, Sparkles];

    return (
        <section style={{
            padding: '6rem 0',
            background: 'linear-gradient(180deg, #FAFAF9 0%, #FFFFFF 50%, #F5F5F4 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #C5A059, transparent)'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(197, 160, 89, 0.1)',
                        color: '#C5A059',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        marginBottom: '1.5rem'
                    }}>
                        <Sparkles style={{ width: '1rem', height: '1rem' }} />
                        Transparent Pricing
                    </span>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 700,
                        color: '#1C1917',
                        marginBottom: '1rem',
                        lineHeight: 1.2
                    }}>
                        {title}
                    </h2>
                    <p style={{
                        color: '#57534E',
                        fontSize: '1.125rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7
                    }}>
                        {description}
                    </p>
                </motion.div>

                {/* Toggle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}
                >
                    <div
                        ref={switchRef}
                        onClick={handleToggle}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: '#F5F5F4',
                            borderRadius: '9999px',
                            padding: '0.375rem',
                            cursor: 'pointer',
                            border: '2px solid #E7E5E4',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            height: '2.5rem',
                            borderRadius: '9999px',
                            background: 'linear-gradient(135deg, #C5A059 0%, #D4AF37 100%)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 4px 12px rgba(197, 160, 89, 0.4)',
                            left: isPerSqFt ? '0.375rem' : 'calc(100% - 10rem)',
                            width: isPerSqFt ? '8rem' : '9.5rem'
                        }} />
                        <span style={{
                            position: 'relative',
                            zIndex: 10,
                            padding: '0.5rem 1.5rem',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            transition: 'color 0.3s',
                            width: '8rem',
                            textAlign: 'center',
                            color: isPerSqFt ? '#FFFFFF' : '#78716C'
                        }}>
                            Per Sq.Ft
                        </span>
                        <span style={{
                            position: 'relative',
                            zIndex: 10,
                            padding: '0.5rem 1.5rem',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            transition: 'color 0.3s',
                            width: '9.5rem',
                            textAlign: 'center',
                            color: !isPerSqFt ? '#FFFFFF' : '#78716C'
                        }}>
                            1000 Sq.Ft Est.
                        </span>
                    </div>
                </motion.div>

                {/* Cards Grid */}
                <div
                    className="pricing-grid"
                    style={{
                        maxWidth: '1400px',
                        margin: '0 auto'
                    }}
                >
                    {plans.map((plan, index) => {
                        const Icon = icons[index] || Zap;
                        const isPopular = plan.isPopular;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1 + index * 0.15,
                                    ease: "easeOut"
                                }}
                                style={{
                                    position: 'relative',
                                    zIndex: isPopular ? 20 : 10
                                }}
                            >
                                <div style={{
                                    height: '100%',
                                    borderRadius: '1.5rem',
                                    overflow: 'hidden',
                                    backgroundColor: '#FFFFFF',
                                    border: isPopular ? '3px solid #C5A059' : '2px solid #E7E5E4',
                                    boxShadow: isPopular
                                        ? '0 25px 50px -12px rgba(197, 160, 89, 0.25), 0 0 0 1px rgba(197, 160, 89, 0.1)'
                                        : '0 10px 40px -15px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    {/* Popular badge */}
                                    {isPopular && (
                                        <div style={{
                                            background: 'linear-gradient(135deg, #C5A059 0%, #D4AF37 50%, #C5A059 100%)',
                                            padding: '0.625rem',
                                            textAlign: 'center'
                                        }}>
                                            <span style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontSize: '0.7rem',
                                                fontWeight: 700,
                                                color: '#FFFFFF',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em'
                                            }}>
                                                <Star style={{ width: '0.75rem', height: '0.75rem', fill: 'currentColor' }} />
                                                Most Popular
                                                <Star style={{ width: '0.75rem', height: '0.75rem', fill: 'currentColor' }} />
                                            </span>
                                        </div>
                                    )}

                                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        {/* Icon & Name */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                            <div style={{
                                                width: '2.5rem',
                                                height: '2.5rem',
                                                borderRadius: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: isPopular
                                                    ? 'linear-gradient(135deg, rgba(197, 160, 89, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)'
                                                    : '#F5F5F4'
                                            }}>
                                                <Icon style={{
                                                    width: '1.25rem',
                                                    height: '1.25rem',
                                                    color: isPopular ? '#C5A059' : '#78716C'
                                                }} />
                                            </div>
                                            <div>
                                                <h3 style={{
                                                    fontSize: '1rem',
                                                    fontWeight: 800,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    color: '#1C1917',
                                                    marginBottom: '0.125rem'
                                                }}>
                                                    {plan.name}
                                                </h3>
                                                <p style={{ fontSize: '0.75rem', color: '#78716C' }}>
                                                    {plan.tagline}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div style={{ marginBottom: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                                                <span style={{
                                                    fontSize: '1.25rem',
                                                    fontWeight: 700,
                                                    color: '#C5A059'
                                                }}>₹</span>
                                                <span style={{
                                                    fontFamily: "'Playfair Display', Georgia, serif",
                                                    fontSize: '2.5rem',
                                                    fontWeight: 900,
                                                    color: '#1C1917',
                                                    lineHeight: 1
                                                }}>
                                                    <NumberFlow
                                                        value={isPerSqFt ? Number(plan.price) : Number(plan.totalPrice)}
                                                        format={{
                                                            minimumFractionDigits: 0,
                                                            maximumFractionDigits: 0,
                                                        }}
                                                        transformTiming={{
                                                            duration: 600,
                                                            easing: "ease-out",
                                                        }}
                                                        willChange
                                                    />
                                                </span>
                                            </div>
                                            <p style={{
                                                fontSize: '0.75rem',
                                                color: '#78716C',
                                                marginTop: '0.25rem',
                                                fontWeight: 500
                                            }}>
                                                {isPerSqFt ? "per square foot" : "for 1000 sq.ft"}
                                            </p>
                                        </div>

                                        {/* Categories Accordion */}
                                        <div style={{
                                            flex: 1,
                                            marginBottom: '1rem'
                                        }}>
                                            {plan.categories.map((category, catIdx) => (
                                                <AccordionItem
                                                    key={catIdx}
                                                    title={category.title}
                                                    items={category.items}
                                                    isOpen={openCategories[`${index}-${category.title}`]}
                                                    onToggle={() => toggleCategory(index, category.title)}
                                                    isNotIncluded={category.title === "What's Not Included"}
                                                />
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <Link
                                            to={plan.href}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem',
                                                width: '100%',
                                                padding: '0.875rem 1.5rem',
                                                borderRadius: '0.875rem',
                                                fontWeight: 700,
                                                fontSize: '0.875rem',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                background: isPopular
                                                    ? 'linear-gradient(135deg, #C5A059 0%, #D4AF37 100%)'
                                                    : '#1C1917',
                                                color: '#FFFFFF',
                                                boxShadow: isPopular
                                                    ? '0 4px 14px rgba(197, 160, 89, 0.4)'
                                                    : '0 4px 14px rgba(0,0,0,0.15)'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <span>{plan.buttonText}</span>
                                            <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    style={{ textAlign: 'center', marginTop: '4rem' }}
                >
                    <p style={{ color: '#78716C', marginBottom: '1rem' }}>
                        Need a custom package? We've got you covered.
                    </p>
                    <Link
                        to="/contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#C5A059',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'gap 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.gap = '0.75rem'}
                        onMouseOut={(e) => e.currentTarget.style.gap = '0.5rem'}
                    >
                        Contact us for custom requirements
                        <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// Construction packages data from screenshots
const constructionPlans = [
    {
        name: "BASIC",
        tagline: "Budget Friendly",
        price: "1999",
        totalPrice: "1999000",
        buttonText: "Get Quote",
        href: "/contact",
        isPopular: false,
        categories: [
            {
                title: "Design",
                items: [
                    "Scheme Drawing (All floors 2D)",
                    "Elevation Design (3D)"
                ]
            },
            {
                title: "Project Management",
                items: [
                    "Site Engineer: One visit per day",
                    "Project Manager: Once a week",
                    "App access for updates"
                ]
            },
            {
                title: "Structure",
                items: [
                    "Basement: up to 2 ft",
                    "Steel: Any ISI",
                    "Partition: AAC, 8\" exterior, 4\" interior",
                    "Cement: Penna/Priya",
                    "Concrete: M20",
                    "Ceiling: 10 ft",
                    "Parapet: 3 ft, 4\" thick"
                ]
            },
            {
                title: "Bathroom & Plumbing",
                items: [
                    "Wall tiles: up to 7 ft, 2×1', ₹40/sqft",
                    "CP Fittings: Cera, ₹12,000",
                    "Pipes: CPVC/PVC",
                    "Tank: 1000 L Sintex"
                ]
            },
            {
                title: "Flooring",
                items: [
                    "Living/Dining/Bedroom/Kitchen: 2×2' ₹45/sqft",
                    "Balcony & Utility: 1×1' ₹35",
                    "Staircase: 1×1' ₹35",
                    "Car Parking: 1×1' ₹35",
                    "Terrace: Screed + Waterproofing"
                ]
            },
            {
                title: "Kitchen & Dining",
                items: [
                    "Wall tile: 2×1' ₹45",
                    "Sink faucet: ₹900",
                    "Kitchen sink: Steel ₹2,800",
                    "Dining: Wall-mounted wash basin",
                    "Granite top: ₹90"
                ]
            },
            {
                title: "Door, Windows & Railing",
                items: [
                    "Main door: Malaysian Teak, 7×3.5'",
                    "Room: White panel",
                    "Bathroom: PVC",
                    "Windows: Aluminium",
                    "Railing: MS"
                ]
            },
            {
                title: "Painting",
                items: [
                    "Interior: 2 coats putty",
                    "Wall: 1 primer + 2 coats tractor emulsion",
                    "Exterior: 1 primer + 2 coats Ace"
                ]
            },
            {
                title: "Electrical",
                items: [
                    "Wires: Essar",
                    "Switches: Fybros",
                    "Bedrooms: 2 boxes",
                    "Bathroom: 2 boxes",
                    "Living: 4 boxes",
                    "Kitchen: 3 boxes"
                ]
            },
            {
                title: "What's Not Included",
                items: [
                    "Compound wall ₹425/sqft & gate",
                    "Sump & Septic ₹24/litre",
                    "Lift",
                    "Electricity connection",
                    "Plan approval",
                    "Special elevation materials"
                ]
            }
        ]
    },
    {
        name: "STANDARD",
        tagline: "Smart Choice",
        price: "2199",
        totalPrice: "2199000",
        buttonText: "Get Quote",
        href: "/contact",
        isPopular: false,
        categories: [
            {
                title: "Design",
                items: [
                    "All items in Basic",
                    "Half Layout (All floors 3D)",
                    "Electrical & Plumbing Drawings (2D)",
                    "Working Drawings (2D)"
                ]
            },
            {
                title: "Project Management",
                items: [
                    "Site Engineer: Dedicated full-time",
                    "Project Manager: Twice a week",
                    "Daily photo upload & monitoring",
                    "Architect support until design completion"
                ]
            },
            {
                title: "Structure",
                items: [
                    "Basement: up to 3 ft",
                    "Steel: Arun TMT/GBR",
                    "Partition: Chamber bricks, 9×4\"",
                    "Cement: Ramco/Dalmia",
                    "Concrete: M20, RMC roof",
                    "Ceiling: 10 ft",
                    "Parapet: 3 ft, 6\" thick"
                ]
            },
            {
                title: "Bathroom & Plumbing",
                items: [
                    "Wall tiles: full height, 2×2', ₹50/sqft",
                    "CP Fittings: Parryware, ₹17,000",
                    "Tank: 2000 L Sintex"
                ]
            },
            {
                title: "Flooring",
                items: [
                    "Living etc: 4×2' ₹65",
                    "Balcony & Utility: 2×2' ₹50",
                    "Staircase: Full body ₹110",
                    "Car Parking: Heavy duty 1×1' ₹50"
                ]
            },
            {
                title: "Kitchen & Dining",
                items: [
                    "Wall tile: 2×2' ₹55",
                    "Sink faucet: ₹2,000",
                    "Kitchen sink: Steel ₹4,000",
                    "Granite top: ₹140"
                ]
            },
            {
                title: "Door, Windows & Railing",
                items: [
                    "Wall tile: 2×2' ₹55",
                    "Sink faucet: ₹2,000",
                    "Kitchen sink: Steel ₹4,000",
                    "Granite top: ₹140"
                ]
            },
            {
                title: "Painting",
                items: [
                    "Interior: 2 coats Nippon",
                    "Wall & ceiling: Primer + 2 coats Breeze",
                    "Exterior: Primer + 2 coats Sumo Xtra"
                ]
            },
            {
                title: "Electrical",
                items: [
                    "Wires: Orbit FRLS",
                    "Switches: Legrand",
                    "Bedrooms: 3 boxes",
                    "AC: 1 point per bedroom + 1 living"
                ]
            },
            {
                title: "What's Not Included",
                items: [
                    "Compound wall ₹425/sqft & gate",
                    "Sump & Septic ₹24/litre",
                    "Lift",
                    "Electricity connection",
                    "Plan approval",
                    "Special elevation materials"
                ]
            }
        ]
    },
    {
        name: "PREMIUM",
        tagline: "Best Value",
        price: "2499",
        totalPrice: "2499000",
        buttonText: "Get Quote",
        href: "/contact",
        isPopular: true,
        categories: [
            {
                title: "Design",
                items: [
                    "All items in Standard",
                    "Soil Test Report",
                    "Structural Drawings",
                    "Furniture Layout (2D)",
                    "Elevation Detail Drawing"
                ]
            },
            {
                title: "Project Management",
                items: [
                    "Site Engineer: Full-time",
                    "Project Manager: Daily visits",
                    "App monitoring & daily photo upload",
                    "Architect support for materials selection"
                ]
            },
            {
                title: "Structure",
                items: [
                    "Basement: up to 3.5 ft",
                    "Steel: ARS",
                    "Partition: Wire-cut bricks, 9×4\"",
                    "Cement: Ramco/Dalmia",
                    "Concrete: M20, RMC roof",
                    "Ceiling: 10 ft",
                    "Parapet: 3.5 ft, 6\" thick",
                    "RCC lift pit & shaft"
                ]
            },
            {
                title: "Bathroom & Plumbing",
                items: [
                    "Wall tiles: 4×2', digital vitrified, ₹85/sqft",
                    "CP Fittings: Jaguar, ₹22,000",
                    "Tank: 3000 L Sintex",
                    "Solar heater lines included"
                ]
            },
            {
                title: "Flooring",
                items: [
                    "Living etc: Tiles ₹80",
                    "Balcony & Utility: 2×2' ₹60",
                    "Staircase: Granite ₹160",
                    "Car Parking: 2×2' ₹80",
                    "Terrace: White cooling tile"
                ]
            },
            {
                title: "Kitchen & Dining",
                items: [
                    "Wall tile: 4×2' ₹65",
                    "Sink faucet: ₹3,500",
                    "Kitchen sink: Quartz ₹5,000",
                    "Dining: Wash basin with granite",
                    "Granite top: ₹160"
                ]
            },
            {
                title: "Door, Windows & Railing",
                items: [
                    "Main: Ghana Teak, 35mm, 8×4'",
                    "Room: Flush laminate",
                    "Bathroom: WPC",
                    "Windows: UPVC, unlimited",
                    "Stair & Balcony: SS 304 + 10 mm glass"
                ]
            },
            {
                title: "Painting",
                items: [
                    "Interior: 2 coats Birla",
                    "Wall & ceiling: Primer + 2 coats Pro Matex Gold",
                    "Exterior: Primer + 2 coats Weather Bond PRO"
                ]
            },
            {
                title: "Electrical",
                items: [
                    "Wires: Finolex/Havells",
                    "Switches: GM",
                    "No limit on points except lifts/DG/HVAC",
                    "Panel: Single service RLCB"
                ]
            },
            {
                title: "What's Not Included",
                items: [
                    "Compound wall ₹425/sqft & gate",
                    "Sump & Septic ₹24/litre",
                    "Lift",
                    "Electricity connection",
                    "Plan approval",
                    "Special elevation materials"
                ]
            }
        ]
    },
    {
        name: "LUXURY",
        tagline: "Ultra Premium",
        price: "2999",
        totalPrice: "2999000",
        buttonText: "Contact Sales",
        href: "/contact",
        isPopular: false,
        categories: [
            {
                title: "Design",
                items: [
                    "All items in Premium",
                    "Site Assessment & Site Plan",
                    "Interior Views (3D)",
                    "Interior Detailing (2D)",
                    "3D Walkthrough Approval Drawings",
                    "Landscaping Architectural Designs"
                ]
            },
            {
                title: "Project Management",
                items: [
                    "Site Engineer: Full-time",
                    "Project Manager: Daily visits",
                    "App daily updates",
                    "Architect support: Brand/material/interior/home decor"
                ]
            },
            {
                title: "Structure",
                items: [
                    "Basement: up to 5 ft",
                    "Steel: TATA",
                    "Partition: Wire-cut bricks, 9×4\"",
                    "Concrete: M25, RMC roof",
                    "Ceiling: 11 ft",
                    "Parapet: 3.5 ft toughened glass",
                    "RCC lift pit & shaft"
                ]
            },
            {
                title: "Bathroom & Plumbing",
                items: [
                    "Wall tiles: 4×2', vitrified, ₹120/sqft",
                    "CP Fittings: Kohler, ₹60,000",
                    "Tank: RCC 6000 L",
                    "Solar heater lines included"
                ]
            },
            {
                title: "Flooring",
                items: [
                    "Living etc: Quartz 6×6' ₹200",
                    "Balcony & Utility: 2×2' ₹60",
                    "Staircase: Marble ₹350",
                    "Car Parking: Granite ₹120",
                    "Terrace: Exterior vitrified 2×2'"
                ]
            },
            {
                title: "Kitchen & Dining",
                items: [
                    "Wall tile: 4×2' ₹125",
                    "Sink faucet: ₹8,000",
                    "Kitchen sink: Multifunction ₹15,000",
                    "Dining: Premium marble counter",
                    "Granite top: Quartz ₹350"
                ]
            },
            {
                title: "Door, Windows & Railing",
                items: [
                    "Main: Designer wood / Security steel",
                    "Room: Flush laminate 8×3.5'",
                    "Bathroom: Laminated flush",
                    "Windows: UPVC coloured",
                    "Stair & Balcony: Toughened glass + SS/wood/aluminium"
                ]
            },
            {
                title: "Painting",
                items: [
                    "Interior: 2 coats Birla",
                    "Walls & ceiling: Primer + 2 coats Royal Shyne",
                    "Exterior: Primer + 2 coats Apex Ultima ProteK"
                ]
            },
            {
                title: "Electrical",
                items: [
                    "Wires: Finolex/Havells",
                    "Switches: Touch glass",
                    "No limit including lifts/DG/HVAC",
                    "Panel: 2 service RLCB"
                ]
            },
            {
                title: "What's Not Included",
                items: [
                    "Compound wall ₹425/sqft & gate",
                    "Sump & Septic ₹24/litre",
                    "Lift",
                    "Electricity connection",
                    "Plan approval",
                    "Special elevation materials"
                ]
            }
        ]
    },
];

export function PricingSection() {
    return (
        <Pricing
            plans={constructionPlans}
            title="Build Your Dream Home"
            description="Transparent pricing with no hidden costs. Click on each category to see detailed specifications."
        />
    );
}

export default Pricing;
