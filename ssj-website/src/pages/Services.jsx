import React from 'react';
import ServicesList from '../components/Services';
import Packages from '../components/Packages';

const Services = () => {
    return (
        <div className="pt-20">
            <ServicesList />
            <Packages />
        </div>
    );
};

export default Services;
