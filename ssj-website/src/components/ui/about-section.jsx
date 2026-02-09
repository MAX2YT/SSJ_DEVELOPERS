"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";

export default function HeroSection({
    title = "Building Dreams Into Reality",
    subtitle = "Premium construction services in Chennai"
}) {
    const stats = [
        { value: "10+", label: "Years Experience" },
        { value: "50+", label: "Projects Completed" },
        { value: "500+", label: "Happy Families" },
        { value: "100%", label: "Client Satisfaction" }
    ];

    return (
        <section
            className="relative min-h-[85vh] flex items-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #FAF8F4 0%, #F5F3EE 50%, #FFF9F0 100%)',
                paddingTop: '100px'
            }}
        >
            {/* Subtle Pattern Background */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(#C5A059 0.5px, transparent 0.5px)',
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Decorative Gold Accent */}
            <div
                className="absolute top-0 left-0 w-1/3 h-1 z-10"
                style={{
                    background: 'linear-gradient(90deg, #C5A059 0%, transparent 100%)'
                }}
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                            style={{
                                background: 'rgba(197,160,89,0.1)',
                                border: '1px solid rgba(197,160,89,0.3)'
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-[#C5A059]" />
                            <span className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase">
                                SSJ Developers
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                color: '#1C1917'
                            }}
                        >
                            {title.split(' ').map((word, i) => (
                                <span key={i}>
                                    {i === 0 ? (
                                        <span className="text-[#C5A059]">{word}</span>
                                    ) : (
                                        word
                                    )}
                                    {' '}
                                </span>
                            ))}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-lg mb-8 max-w-xl leading-relaxed"
                            style={{ color: '#57534E' }}
                        >
                            {subtitle}. From blueprint to handover, we bring your vision to life with precision, craftsmanship, and an unwavering commitment to excellence.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <Link
                                to="/contact"
                                className="group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl whitespace-nowrap"
                                style={{
                                    background: 'linear-gradient(135deg, #C5A059 0%, #D4AF37 100%)',
                                    color: '#1C1917',
                                    boxShadow: '0 8px 24px -8px rgba(197,160,89,0.4)'
                                }}
                            >
                                Get Free Quote
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/projects"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-stone-100 whitespace-nowrap"
                                style={{
                                    background: '#FFFFFF',
                                    color: '#1C1917',
                                    border: '2px solid #E7E5E4'
                                }}
                            >
                                View Projects
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                                    className="text-center md:text-left"
                                >
                                    <div
                                        className="text-2xl md:text-3xl font-bold mb-1"
                                        style={{
                                            fontFamily: "'Playfair Display', Georgia, serif",
                                            color: '#C5A059'
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm" style={{ color: '#78716C' }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div
                            className="relative rounded-2xl overflow-hidden"
                            style={{
                                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15), 0 0 0 1px rgba(197,160,89,0.15)'
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
                                alt="Luxury Villa Project"
                                className="w-full aspect-[4/3] object-cover"
                            />
                            {/* Image Overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(to top, rgba(28,25,23,0.7) 0%, transparent 60%)'
                                }}
                            />

                        </div>

                        {/* Decorative Elements */}
                        <div
                            className="absolute -top-6 -right-6 w-32 h-32 rounded-full -z-10"
                            style={{
                                background: 'linear-gradient(135deg, rgba(197,160,89,0.2) 0%, transparent 70%)'
                            }}
                        />
                        <div
                            className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full -z-10"
                            style={{
                                background: 'linear-gradient(135deg, rgba(197,160,89,0.15) 0%, transparent 70%)'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
