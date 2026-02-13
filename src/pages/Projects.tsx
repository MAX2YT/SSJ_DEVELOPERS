import HeroSection from '../components/ui/about-section';
import ProjectCard from '../components/ui/project-card';

const projects = [
    {
        id: 1,
        customer: "Modern Duplex Complex",
        location: "Avadi, Chennai",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        type: "Duplex",
        area: "3500 SQ.FT",
        floors: 2,
        plotNo: "12"
    },
    {
        id: 2,
        customer: "Mr. & Mrs. Sharma",
        location: "Avadi, Chennai",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        customer: "Green Valley Association",
        location: "Poonamallee, Chennai",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        customer: "Mrs. Anitha",
        location: "Thirumazhisai",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e78caf13864951.5627958ac9beb.jpg",
    },
    {
        id: 5,
        customer: "TechFlow Solutions",
        location: "Ambattur Industrial Estate",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        customer: "Mr. Rajesh",
        location: "Anna Nagar, Chennai",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZOFL-Isjypqxv0WBTN-uZMzfj4cOGQmXTNlIQNMsxSQYokyiRMW84jiaFSmQ7kVM9NiR4Ai-AtzTIdF55Ik9hH5e7MlvK1pEVCL3RJ0z-H2JNCv-1H1pjWDUzOGdJLDThhR6odI2EutU/s1600/modern-flat-roof-home.jpg",
    },
    {
        id: 7,
        customer: "Dr. Priya",
        location: "OMR, Chennai",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
];

const Projects = () => {
    return (
        <div>
            <HeroSection
                title="Our Featured Projects"
                subtitle="Building dreams into reality, one project at a time."
            />
            {/* Using min-h-screen to ensure full page coverage if content is short, but flex-col for centering */}
            <section className="py-20 bg-stone-50 min-h-[60vh] flex flex-col items-center relative overflow-hidden">
                
                <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-[#C5A059] font-semibold tracking-[0.2em] uppercase text-xs mb-3 block">Our Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                            Completed Projects
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
                            Explore our diverse portfolio of residential and commercial projects across Chennai.
                        </p>
                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-2 mt-6">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]/50" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]/50" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                image={project.image}
                                customer={project.customer}
                                location={project.location}
                                type={project.type}
                                area={project.area}
                                floors={project.floors}
                                plotNo={project.plotNo}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
