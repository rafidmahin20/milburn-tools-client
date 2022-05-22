import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-10'>
            <Helmet>
                <title>Home - Milburn Tools</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;