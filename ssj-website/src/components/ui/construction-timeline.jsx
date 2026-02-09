"use client";

import React, { useEffect, useRef, useState } from "react";
import { FileCheck, Shovel, Building2, Frame, Wrench, PaintBucket, KeyRound } from "lucide-react";
import './construction-timeline.css';

export const constructionPhases = [
    {
        icon: FileCheck,
        title: "Pre-Construction & Planning",
        subtitle: "Phase 1 • Foundation of Success",
        description:
            "Before any physical work begins, the project must be defined and legally cleared. This phase sets the blueprint for everything that follows.",
        items: [
            "Conception & Design: Working with architects to create floor plans, elevations, and structural designs",
            "Permits & Documentation: Submission to local municipal authorities for building permits and zoning clearances",
            "Budgeting & Contracts: Finalizing material estimates, selecting contractors, and signing legal agreements",
        ],
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    },
    {
        icon: Shovel,
        title: "Site Preparation",
        subtitle: "Phase 2 • Preparing the Ground",
        description:
            "Once approvals are in place, the site is prepared for the structure. This is the start of physical work on your property.",
        items: [
            "Site Clearing: Removal of debris, trees, and obstacles",
            "Excavation: Digging the earth to required depth for foundations",
            "Leveling: Ensuring the ground is flat and compact to support the building's weight",
        ],
        image:
            "https://barnpros.com/wp-content/uploads/2021/12/Land-Clearing-5-1024x768.jpg",
    },
    {
        icon: Building2,
        title: "The Substructure (Foundation)",
        subtitle: "Phase 3 • Building Stability",
        description:
            "This is the most critical phase for the building's stability. A strong foundation ensures your home stands the test of time.",
        items: [
            "Footings & Foundation: Concrete poured into trenches to create the base",
            "Plinth Beam & Slab: Reinforced concrete beam at ground level to distribute wall load evenly",
            "Backfilling: Refilling empty spaces around foundation with earth for a solid base",
        ],
        image:
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
    },
    {
        icon: Frame,
        title: "The Superstructure (Framing)",
        subtitle: "Phase 4 • Building the Skeleton",
        description:
            "This phase involves building the visible skeleton of the structure. Watch your home take shape as walls and floors come together.",
        items: [
            "Columns & Beams: Erection of vertical columns and horizontal beams (RCC or Steel)",
            "Slab / Roofing: Pouring the concrete ceiling/roof for each floor",
            "Masonry / Walls: Building internal and external walls using bricks, blocks, or drywall",
            "Lintels: Installing support beams over door and window openings",
        ],
        image:
            "https://www.jkcement.com/wp-content/uploads/2024/10/house-construction-site-1024x684.jpg",
    },
    {
        icon: Wrench,
        title: "MEP (Mechanical, Electrical, Plumbing)",
        subtitle: "Phase 5 • The Vital Organs",
        description:
            "These 'vital organs' of the building are installed before the finishes. Proper MEP ensures comfort and functionality.",
        items: [
            "Rough-ins: Installing internal pipes for water/sewage and conduits for electrical wiring",
            "HVAC: Installation of ductwork for heating and cooling systems",
            "Electrical Points: Marking and installing switch boards, outlets, and light points",
        ],
        image:
            "https://strand-co.com/wp-content/uploads/2025/05/mep-construction-1-1024x546.webp",
    },
    {
        icon: PaintBucket,
        title: "Finishing",
        subtitle: "Phase 6 • Bringing It to Life",
        description:
            "This phase turns the grey structure into a livable space. Every detail matters in creating your dream home.",
        items: [
            "Plastering: Applying cement or gypsum coat to walls for smooth surfaces",
            "Flooring: Installing tiles, marble, hardwood, or carpet",
            "Painting: Applying primer, putty, and paint to walls and ceilings",
            "Fixtures: Installing lights, switches, faucets, sinks, and toilets",
            "Carpentry: Fitting doors, windows, cupboards, and kitchen cabinets",
        ],
        image:
            "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop&q=80",
    },
    {
        icon: KeyRound,
        title: "Post-Construction & Handover",
        subtitle: "Phase 7 • Your Dream Realized",
        description:
            "The final inspection and handover of your completed home. Every detail is checked before we hand you the keys.",
        items: [
            "Punch List: Final inspection to spot any minor defects (cracks, loose fittings)",
            "Quality Check: Ensuring all systems work properly and finishes meet standards",
            "Handover: Transferring keys and legal documents (Occupancy Certificate) to the owner",
        ],
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    },
];

export default function ConstructionTimeline({
    title = "Our Construction Process",
    description = "From planning to handover, we follow a systematic approach to bring your dream home to life. Each phase is executed with precision and transparency.",
    entries = constructionPhases,
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const sentinelRefs = useRef([]);

    const setSentinelRef = (el, i) => {
        sentinelRefs.current[i] = el;
    };

    useEffect(() => {
        if (!sentinelRefs.current.length) return;

        let frame = 0;
        const updateActiveByProximity = () => {
            frame = requestAnimationFrame(updateActiveByProximity);
            const centerY = window.innerHeight / 3;
            let bestIndex = 0;
            let bestDist = Infinity;
            sentinelRefs.current.forEach((node, i) => {
                if (!node) return;
                const rect = node.getBoundingClientRect();
                const mid = rect.top + rect.height / 2;
                const dist = Math.abs(mid - centerY);
                if (dist < bestDist) {
                    bestDist = dist;
                    bestIndex = i;
                }
            });
            if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
        };

        frame = requestAnimationFrame(updateActiveByProximity);
        return () => cancelAnimationFrame(frame);
    }, [activeIndex]);

    useEffect(() => {
        setActiveIndex(0);
    }, []);

    return (
        <section className="timeline-section">
            <div className="container">
                <div className="timeline-header">
                    <span className="timeline-label">How We Build</span>
                    <h2 className="timeline-title">{title}</h2>
                    <p className="timeline-description">{description}</p>
                </div>

                <div className="timeline-entries">
                    {entries.map((entry, index) => {
                        const isActive = index === activeIndex;
                        const Icon = entry.icon;

                        return (
                            <div
                                key={index}
                                className={`timeline-entry ${isActive ? 'active' : ''}`}
                                aria-current={isActive ? "true" : "false"}
                            >
                                {/* Timeline connector */}
                                {index < entries.length - 1 && (
                                    <div className="timeline-connector" />
                                )}

                                {/* Meta column */}
                                <div className="timeline-meta">
                                    <div className={`timeline-icon ${isActive ? 'active' : ''}`}>
                                        <Icon size={20} />
                                    </div>
                                    <div className="timeline-meta-text">
                                        <span className={`timeline-entry-title ${isActive ? 'active' : ''}`}>
                                            {entry.title}
                                        </span>
                                        <span className="timeline-entry-subtitle">
                                            {entry.subtitle}
                                        </span>
                                    </div>
                                </div>

                                {/* Invisible sentinel */}
                                <div
                                    ref={(el) => setSentinelRef(el, index)}
                                    aria-hidden
                                    className="timeline-sentinel"
                                />

                                {/* Content card */}
                                <article className={`timeline-card ${isActive ? 'active' : ''}`}>
                                    {entry.image && (
                                        <div className="timeline-card-image-wrapper">
                                            <img
                                                src={entry.image}
                                                alt={`${entry.title} phase`}
                                                className={`timeline-card-image ${isActive ? 'active' : ''}`}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    <div className="timeline-card-content">
                                        <h3 className={`timeline-card-title ${isActive ? 'active' : ''}`}>
                                            {entry.title}
                                        </h3>

                                        <p className={`timeline-card-description ${isActive ? 'expanded' : ''}`}>
                                            {entry.description}
                                        </p>

                                        {/* Expandable content */}
                                        <div className={`timeline-card-details ${isActive ? 'visible' : ''}`}>
                                            {entry.items && entry.items.length > 0 && (
                                                <div className="timeline-card-items">
                                                    <ul>
                                                        {entry.items.map((item, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                <span className="timeline-bullet" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
