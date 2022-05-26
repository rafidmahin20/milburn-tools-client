import React from 'react';
import { Helmet } from 'react-helmet-async';
import ToolHomePage from '../Tools/ToolHomePage';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import End from './End';
import ReviewHome from './ReviewHome';
import Teams from './Teams';

const Home = () => {
    return (
        <div className='px-10'>
            <Helmet>
                <title>Home - Milburn Tools</title>
            </Helmet>
            <Banner></Banner>
            <ToolHomePage></ToolHomePage>
            <Teams></Teams>
            <BusinessSummary></BusinessSummary>
            {/* <ReviewHome></ReviewHome> */}
            <End></End>
        </div>
    );
};

export default Home;