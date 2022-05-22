import React from 'react';
import banner from '../../Images/banner.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 class="text-5xl font-bold">Hammer your way!</h1>
            <p class="py-6">hammer, tool designed for pounding or delivering repeated blows.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;