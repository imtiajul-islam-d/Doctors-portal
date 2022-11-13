import React from 'react';

const ServiceCard = ({data}) => {
    const {name, icon, details} = data
    return (
        <div className='shadow p-5 flex flex-col justify-center items-center text-center'>
            <img className='my-2' src={icon} alt="" />
            <h2 className='my-2 text-xl font-bold'>{name}</h2>
            <p>{details}</p>
        </div>
    );
};

export default ServiceCard;