
import ServicesList from '../components/Services';
import { PricingSection } from '../components/ui/pricing';
import HeroSection from '../components/ui/about-section';
import WhyChooseUs from '../components/WhyChooseUs';

const Services = () => {
    return (
        <div>
            <HeroSection
                title="Our Premium Services"
                subtitle="Quality construction & design solutions"
            />
            <ServicesList />
            <PricingSection />
            <WhyChooseUs />
        </div>
    );
};

export default Services;
