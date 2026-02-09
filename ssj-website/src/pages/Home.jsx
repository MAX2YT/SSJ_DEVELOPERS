import React from 'react';
import HeroAnimated from '../components/HeroAnimated';
import AboutUs from '../components/AboutUs';
import ConstructionTimeline from '../components/ui/construction-timeline';
import CostCalculator from '../components/CostCalculator';
import StaggerTestimonials from '../components/StaggerTestimonials';

const Home = () => {
    return (
        <>
            <HeroAnimated />
            <AboutUs />
            <ConstructionTimeline />
            <CostCalculator />
            <StaggerTestimonials />
        </>
    );
};

export default Home;
