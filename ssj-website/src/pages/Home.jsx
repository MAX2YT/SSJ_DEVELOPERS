import React from 'react';
import HeroAnimated from '../components/HeroAnimated';
import AboutUs from '../components/AboutUs';
import CostCalculator from '../components/CostCalculator';
import StaggerTestimonials from '../components/StaggerTestimonials';

const Home = () => {
    return (
        <>
            <HeroAnimated />
            <AboutUs />
            <CostCalculator />
            <StaggerTestimonials />
        </>
    );
};

export default Home;
