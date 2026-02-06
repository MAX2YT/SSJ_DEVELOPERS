import React from 'react';
import ServicesList from '../components/Services';
import { PricingSection } from '../components/ui/pricing';
import HeroSection from '../components/ui/about-section';

const Services = () => {
    return (
        <div>
            <HeroSection
                title="Our Premium Services"
                subtitle="Quality construction & design solutions"
            />
            <ServicesList />
            <PricingSection />
        </div>
    );
};

export default Services;
