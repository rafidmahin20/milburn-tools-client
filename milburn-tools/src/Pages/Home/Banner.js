import React from 'react';
import banner from '../../Images/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl font-bold">Hammer your way!</h1>
            <p className="py-6">hammer, tool designed for pounding or delivering repeated blows.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;