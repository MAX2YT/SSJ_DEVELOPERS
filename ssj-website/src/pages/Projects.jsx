import React from 'react';
import HeroSection from '../components/ui/about-section';

// Enhanced Mock Data with Customer Info
const projects = [
    {
        id: 1,
        title: "Luxury Villa",
        location: "Avadi, Chennai",
        customer: "Mr. & Mrs. Sharma",
        description: "A 3500 sq.ft. luxury villa featuring a private swimming pool, landscaped garden, and Italian marble flooring. Designed for modern living with traditional aesthetics.",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Residential",
        status: "Completed"
    },
    {
        id: 2,
        title: "Modern Apartment Complex",
        location: "Poonamallee, Chennai",
        customer: "Green Valley Association",
        description: "G+3 apartment complex comprising 8 premium units with covered parking, lift facility, and terrace garden. Focused on community living.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Commercial",
        status: "Completed"
    },
    {
        id: 3,
        title: "Minimalist Dual Home",
        location: "Thirumazhisai",
        customer: "Mrs. Anitha",
        description: "A compact, energy-efficient 2BHK individual house designed with open floor plans and maximum natural lighting for a small family.",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e78caf13864951.5627958ac9beb.jpg",
        category: "Residential",
        status: "Handed Over"
    },
    {
        id: 4,
        title: "Office Space Renovation",
        location: "Ambattur Industrial Estate",
        customer: "TechFlow Solutions",
        description: "Complete interior and structural renovation of a 2000 sq.ft. office space, transforming it into a modern, open-plan workspace.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Renovation",
        status: "Completed"
    }
];

const Projects = () => {
    return (
        <div>
            <HeroSection
                title="Our Featured Projects"
                subtitle="Building dreams into reality, one project at a time."
            />
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-[#C5A059] font-semibold tracking-wide uppercase text-sm mb-2 block">Our Portfolio</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                            Completed Projects
                        </h2>
                        <p className="text-slate-500">
                            Explore our diverse portfolio of residential and commercial projects across Chennai.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {projects.map((project) => (
                            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-[#C5A059] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-[#C5A059] transition-colors font-playfair">
                                            {project.title}
                                        </h3>
                                        {/* Status Badge */}
                                        <span className="text-[10px] font-bold uppercase tracking-wide text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">
                                            {project.status}
                                        </span>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-1">
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="border-t border-slate-100 pt-4 mt-4 space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                    📍
                                                </span>
                                                <span className="font-medium text-slate-700">{project.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                    👤
                                                </span>
                                                <span className="italic">Client: {project.customer}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:border-[#C5A059] hover:text-[#C5A059] hover:bg-[#C5A059]/5 transition-all duration-300">
                                        View Project Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
