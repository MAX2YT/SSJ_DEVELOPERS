
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="text-accent font-semibold mb-4 block tracking-wider uppercase text-sm">Welcome to SSJ Developers</span>
                    <h1 className="hero-title">
                        Building Dreams,<br />
                        Crafting Excellence<br />
                        <span className="text-accent">in Avadi</span>
                    </h1>
                    <p className="hero-lead">
                        We provide complete end-to-end construction solutions. From blueprint to final handover, we built efficient, beautiful, and durable homes in Chennai's western region.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Get a Free Quote <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn btn-outline">
                            Explore Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
