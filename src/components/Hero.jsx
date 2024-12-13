import React from 'react';

const Hero = ({title,path}) => {
    return (
        <div className='text-center align-middle py-24'>
            <h1 className='text-3xl font-semibold capitalize'>{title}</h1>
            <p className='text-xl font-medium capitalize text-[#fff]'>Home <span className='text-green-600'>{path.split('/').join("//")}</span></p>
        </div>
    );
};

export default Hero;