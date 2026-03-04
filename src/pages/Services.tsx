
import ServicesList from '../components/Services';
import HeroSection from '../components/ui/about-section';
import ConstructionTimeline from '../components/ui/construction-timeline';

const Services = () => {
    return (
        <div>
            <HeroSection
                title="Our Premium Services"
                subtitle="Quality construction & design solutions"
            />
            <ServicesList />
            <ConstructionTimeline />
        </div>
    );
};

export default Services;
