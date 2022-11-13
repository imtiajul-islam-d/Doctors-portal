import React from 'react';
import clock from './../../../assets/icons/clock.svg'
import location from './../../../assets/icons/marker.svg'
import phone from './../../../assets/icons/phone.svg'
import FeatureCard from './FeatureCard/FeatureCard';

const Features = () => {
    const featuresData = [
        {
            id:1,
            name: "Opening Hours",
            description: "Open 9.00am to 5.00pm everyday",
            icon: clock,
            bgClass : "bg-gradient-to-r from-primary to-secondary"
        },
        {
            id:2,
            name: "Our Location",
            description: "lorem lorem lorem lorem lorem",
            icon: location,
            bgClass : "bg-accent"
        },
        {
            id:3,
            name: "Contact us",
            description: "+0000-000000000",
            icon: phone,
            bgClass : "bg-gradient-to-r from-primary to-secondary"
        },
    ]
    return (
        <div className='min-h-[25vh] grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto my-20 p-5 lg:p-0'>
            {
                featuresData.map(features => <FeatureCard key={features.id} features={features}></FeatureCard>)
            }
        </div>
    );
};

export default Features;