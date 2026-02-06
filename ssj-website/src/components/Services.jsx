"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, PenTool, Hammer, Box, Layout, DollarSign, Sparkles, ArrowRight } from 'lucide-react';
import { useMediaQuery } from "@/hooks/use-media-query";

const servicesFunction = [
    {
        icon: Home,
        title: 'Construction',
        desc: 'Best constructor in Chennai with experience in constructing homes, apartments, villas, and commercial projects.'
    },
    {
        icon: PenTool,
        title: 'Planning & Design',
        desc: 'Spectacular plans and designs providing photo-realistic derivations for your dream homes.'
    },
    {
        icon: Hammer,
        title: 'Renovation',
        desc: 'Hassle-free renovation. Our expert team designs and executes renovation projects within your budget.'
    },
    {
        icon: Layout,
        title: '2D & 3D Modelling',
        desc: 'Visualize your dream project before it comes to life with detailed 2D plans and realistic 3D models.'
    },
    {
        icon: Box,
        title: 'Interior & Exterior',
        desc: 'Customized interior and exterior design solutions that match your requirements and exceed expectations.'
    },
    {
        icon: DollarSign,
        title: 'Real Estate',
        desc: 'Trustworthy guidance for buying or selling CMDA-approved plots in Avadi, Poonamallee, and nearby areas.'
    }
];

const Services = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    return (
        <section
            id="services"
            style={{
                position: 'relative',
                padding: '6rem 0',
                backgroundColor: '#F7F5F0', // Very light warm gray/beige
                overflow: 'hidden'
            }}
        >
            {/* Background pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.05,
                pointerEvents: 'none'
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
                        Exceptional Quality
                    </span>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 700,
                        color: '#1C1917',
                        marginBottom: '1rem',
                        lineHeight: 1.2
                    }}>
                        Our Premium Services
                    </h2>
                    <p style={{
                        color: '#57534E',
                        fontSize: '1.125rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: 1.7
                    }}>
                        From the blueprint to the final handover, our skilled team handles every aspect of your project with precision, professionalism, and a touch of luxury.
                    </p>
                </motion.div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {servicesFunction.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '1.5rem',
                                    padding: '2.5rem',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                                    cursor: 'default',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(197, 160, 89, 0.15)';
                                    e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.03)';
                                }}
                            >
                                {/* Hover background gradient */}
                                <div
                                    className="hover-bg"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '0.4rem',
                                        background: 'linear-gradient(90deg, #C5A059, #F3D07C)',
                                        opacity: 1,
                                    }}
                                />

                                <div style={{
                                    width: '4rem',
                                    height: '4rem',
                                    borderRadius: '1rem',
                                    backgroundColor: '#FAF8F4',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    color: '#C5A059',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>

                                <h3 style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#1C1917',
                                    marginBottom: '1rem'
                                }}>
                                    {service.title}
                                </h3>

                                <p style={{
                                    color: '#78716C',
                                    lineHeight: 1.6,
                                    fontSize: '1rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {service.desc}
                                </p>

                                {/* Learn More Link (Visual only for now) */}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#C5A059',
                                        fontWeight: 600,
                                        fontSize: '0.875rem',
                                        opacity: 0.8
                                    }}
                                >
                                    <span>Learn more</span>
                                    <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
