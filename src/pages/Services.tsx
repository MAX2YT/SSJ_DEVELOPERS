
import ServicesList from '../components/Services';
import HeroSection from '../components/ui/about-section';
import ConstructionTimeline from '../components/ui/construction-timeline';
import DecorativeLines from '../components/DecorativeLines';

const Services = () => {
    return (
        <div>
            <HeroSection
                title="Our Premium Services"
                subtitle="Quality construction & design solutions"
            />
            <DecorativeLines>
                <ServicesList />
                <ConstructionTimeline />
            </DecorativeLines>
        </div>
    );
};

export default Services;
