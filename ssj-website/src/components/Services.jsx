import React from 'react';
import { Home, PenTool, Hammer, Box, Layout, DollarSign } from 'lucide-react';
import './Services.css';

const servicesFunction = [
    {
        icon: <Home size={32} />,
        title: 'Construction',
        desc: 'Best constructor in Chennai with experience in constructing homes, apartments, villas, and commercial projects.'
    },
    {
        icon: <PenTool size={32} />,
        title: 'Planning & Design',
        desc: 'Spectacular plans and designs providing photo-realistic derivations for your dream homes.'
    },
    {
        icon: <Hammer size={32} />,
        title: 'Renovation',
        desc: 'Hassle-free renovation. Our expert team designs and executes renovation projects within your budget.'
    },
    {
        icon: <Layout size={32} />,
        title: '2D & 3D Modelling',
        desc: 'Visualize your dream project before it comes to life with detailed 2D plans and realistic 3D models.'
    },
    {
        icon: <Box size={32} />,
        title: 'Interior & Exterior',
        desc: 'Customized interior and exterior design solutions that match your requirements and exceed expectations.'
    },
    {
        icon: <DollarSign size={32} />,
        title: 'Real Estate',
        desc: 'Trustworthy guidance for buying or selling CMDA-approved plots in Avadi, Poonamallee, and nearby areas.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">What We Do</span>
                    <h2 className="mb-4">Our Premium Services</h2>
                    <p className="text-slate-500">
                        From the blueprint to the final handover, our skilled team handles every aspect of your project with precision and professionalism.
                    </p>
                </div>

                <div className="services-grid">
                    {servicesFunction.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
