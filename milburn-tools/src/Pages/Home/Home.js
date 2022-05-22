import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Teams from './Teams';

const Home = () => {
    return (
        <div className='px-10'>
            <Helmet>
                <title>Home - Milburn Tools</title>
            </Helmet>
            <Banner></Banner>
            <Teams></Teams>
        </div>
    );
};

export default Home;