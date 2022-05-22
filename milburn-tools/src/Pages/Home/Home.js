import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import End from './End';
import Teams from './Teams';

const Home = () => {
    return (
        <div className='px-10'>
            <Helmet>
                <title>Home - Milburn Tools</title>
            </Helmet>
            <Banner></Banner>
            <Teams></Teams>
            <BusinessSummary></BusinessSummary>
            <End></End>
        </div>
    );
};

export default Home;