import React from 'react';

const projects = [
    {
        id: 1,
        title: "Luxury Villa",
        location: "Avadi, Chennai",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Residential"
    },
    {
        id: 2,
        title: "Modern Apartment Complex",
        location: "Poonamallee",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Commercial"
    },
    {
        id: 3,
        title: "Minimalist Home",
        location: "Thirumullaivoyal",
        image: "https://images.unsplash.com/photo-1600596542815-27a90b96dd94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Residential"
    },
    {
        id: 4,
        title: "Office Space Renovation",
        location: "Ambattur",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Renovation"
    }
];

const Projects = () => {
    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Our Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                    <p className="text-slate-500">
                        A glimpse into our recent construction and design excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-white">
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-12">
                                <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-semibold rounded mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-slate-300 text-sm flex items-center gap-1">
                                    📍 {project.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
