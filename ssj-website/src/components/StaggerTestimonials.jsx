"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        tempId: 0,
        testimonial: "SSJ Developers transformed our dream home into reality. Their attention to detail is remarkable!",
        by: "Karthik Rajan, Avadi, Chennai"
    },
    {
        tempId: 1,
        testimonial: "The quality of construction and timely delivery exceeded all our expectations. Highly recommended!",
        by: "Priya Venkatesh, Ambattur, Chennai"
    },
    {
        tempId: 2,
        testimonial: "From foundation to finishing, every aspect was handled with utmost professionalism. Truly satisfied!",
        by: "Suresh Kumar, Thirumullaivoyal, Chennai"
    },
    {
        tempId: 3,
        testimonial: "Their transparent pricing and honest approach made our home building journey stress-free!",
        by: "Lakshmi Narayanan, Poonamallee, Chennai"
    },
    {
        tempId: 4,
        testimonial: "Best construction company in Tamil Nadu! The team is responsive and delivers what they promise.",
        by: "Arun Prakash, Pattabiram, Chennai"
    },
    {
        tempId: 5,
        testimonial: "We were amazed by the quality materials used and the skilled craftsmanship. Thank you SSJ!",
        by: "Meenakshi Devi, Thiruverkadu, Chennai"
    },
    {
        tempId: 6,
        testimonial: "The architects understood our vision perfectly and created a masterpiece for our family!",
        by: "Rajesh Murugan, Redhills, Chennai"
    },
    {
        tempId: 7,
        testimonial: "Cost-effective solutions without compromising on quality. SSJ is the best choice for home construction!",
        by: "Kavitha Selvam, Chennai"
    },
    {
        tempId: 8,
        testimonial: "Their project management was exceptional. Every milestone was completed on schedule!",
        by: "Bala Subramanian, Avadi, Chennai"
    },
    {
        tempId: 9,
        testimonial: "I've recommended SSJ to all my friends and relatives. They truly deliver excellence!",
        by: "Anitha Krishnan, Ambattur, Chennai"
    },
    {
        tempId: 10,
        testimonial: "The interior designs they suggested were modern yet practical. Love our new home!",
        by: "Senthil Kumar, Thirumullaivoyal, Chennai"
    },
    {
        tempId: 11,
        testimonial: "From start to finish, the experience was seamless. Highly professional team!",
        by: "Deepa Ramachandran, Poonamallee, Chennai"
    },
    {
        tempId: 12,
        testimonial: "SSJ's customer support is unmatched. They addressed all our concerns promptly!",
        by: "Mohan Raj, Pattabiram, Chennai"
    },
    {
        tempId: 13,
        testimonial: "The structural quality of our building is outstanding. Built to last for generations!",
        by: "Geetha Sundaram, Thiruverkadu, Chennai"
    },
    {
        tempId: 14,
        testimonial: "They incorporated all vastu requirements perfectly into our dream home design!",
        by: "Venkat Raman, Redhills, Chennai"
    },
    {
        tempId: 15,
        testimonial: "The best investment we made was choosing SSJ for our commercial building project!",
        by: "Saravanan Pillai, Chennai"
    },
    {
        tempId: 16,
        testimonial: "Quality construction at an affordable price. SSJ made our dream home possible!",
        by: "Revathi Balan, Avadi, Chennai"
    },
    {
        tempId: 17,
        testimonial: "The finishing work is absolutely stunning. Every visitor compliments our home!",
        by: "Parthiban Natarajan, Ambattur, Chennai"
    },
    {
        tempId: 18,
        testimonial: "Professional, punctual, and perfect - that's SSJ Developers for you!",
        by: "Malliga Swamy, Thirumullaivoyal, Chennai"
    },
    {
        tempId: 19,
        testimonial: "We compared many builders, but SSJ stood out for their transparency and quality!",
        by: "Ganesh Iyer, Poonamallee, Chennai"
    }
];

// Helper function to get initials from name
const getInitials = (name) => {
    const nameParts = name.split(',')[0].trim().split(' ');
    if (nameParts.length >= 2) {
        return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return nameParts[0].substring(0, 2).toUpperCase();
};

const InitialsAvatar = ({ name, isCenter }) => {
    const initials = getInitials(name);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            backgroundColor: isCenter ? 'rgba(255,255,255,0.2)' : '#C5A059',
            color: isCenter ? '#ffffff' : '#ffffff',
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            boxShadow: "3px 3px 0px rgba(0,0,0,0.1)"
        }}>
            {initials}
        </div>
    );
};

const TestimonialCard = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    const cardStyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: cardSize,
        height: cardSize,
        padding: '2rem',
        cursor: 'pointer',
        border: `2px solid ${isCenter ? '#C5A059' : '#e5e7eb'}`,
        borderRadius: '0.5rem',
        backgroundColor: isCenter ? '#C5A059' : '#ffffff',
        color: isCenter ? '#ffffff' : '#1f2937',
        zIndex: isCenter ? 10 : 0,
        transition: 'all 0.5s ease-in-out',
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
            translate(-50%, -50%) 
            translateX(${(cardSize / 1.5) * position}px)
            translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
            rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(197, 160, 89, 0.3)" : "0px 0px 0px 0px transparent"
    };

    return (
        <div onClick={() => handleMove(position)} style={cardStyle}>
            <span
                style={{
                    position: 'absolute',
                    display: 'block',
                    transformOrigin: 'top right',
                    transform: 'rotate(45deg)',
                    right: -2,
                    top: 48,
                    width: Math.sqrt(5000),
                    height: 2,
                    backgroundColor: isCenter ? 'rgba(255,255,255,0.3)' : '#e5e7eb'
                }}
            />
            <InitialsAvatar name={testimonial.by} isCenter={isCenter} />
            <h3 style={{
                fontSize: '1rem',
                fontWeight: 500,
                lineHeight: 1.6,
                color: isCenter ? '#ffffff' : '#1f2937'
            }}>
                "{testimonial.testimonial}"
            </h3>
            <p style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
                marginTop: '0.5rem',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                fontWeight: 500,
                color: isCenter ? 'rgba(255,255,255,0.9)' : '#C5A059'
            }}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);
    const testimonialsRef = useRef(testimonialsList);

    // Keep ref in sync with state
    useEffect(() => {
        testimonialsRef.current = testimonialsList;
    }, [testimonialsList]);

    const handleMove = (steps) => {
        const newList = [...testimonialsRef.current];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleMove(1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <section style={{
            padding: '4rem 0',
            background: 'linear-gradient(to bottom, #f9fafb, #ffffff)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    color: '#1f2937',
                    marginBottom: '1rem'
                }}>
                    What Our Clients Say
                </h2>
                <p style={{
                    color: '#6b7280',
                    marginBottom: '2rem',
                    maxWidth: '42rem',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Hear from our satisfied customers across Tamil Nadu who trusted us to build their dream homes
                </p>
            </div>
            <div style={{
                position: 'relative',
                width: '100%',
                height: 600,
                overflow: 'hidden'
            }}>
                {testimonialsList.map((testimonial, index) => {
                    const position = testimonialsList.length % 2
                        ? index - (testimonialsList.length + 1) / 2
                        : index - testimonialsList.length / 2;
                    return (
                        <TestimonialCard
                            key={testimonial.tempId}
                            testimonial={testimonial}
                            handleMove={handleMove}
                            position={position}
                            cardSize={cardSize}
                        />
                    );
                })}
                <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '0.5rem'
                }}>
                    <button
                        onClick={() => handleMove(-1)}
                        style={{
                            display: 'flex',
                            height: '3.5rem',
                            width: '3.5rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            transition: 'all 0.2s',
                            backgroundColor: '#ffffff',
                            border: '2px solid #e5e7eb',
                            borderRadius: '0.5rem',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#C5A059';
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = '#C5A059';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#ffffff';
                            e.currentTarget.style.color = '#000000';
                            e.currentTarget.style.borderColor = '#e5e7eb';
                        }}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={() => handleMove(1)}
                        style={{
                            display: 'flex',
                            height: '3.5rem',
                            width: '3.5rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            transition: 'all 0.2s',
                            backgroundColor: '#ffffff',
                            border: '2px solid #e5e7eb',
                            borderRadius: '0.5rem',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#C5A059';
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = '#C5A059';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#ffffff';
                            e.currentTarget.style.color = '#000000';
                            e.currentTarget.style.borderColor = '#e5e7eb';
                        }}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StaggerTestimonials;
