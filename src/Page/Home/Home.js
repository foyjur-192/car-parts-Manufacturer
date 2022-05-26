import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import FounderStory from './FounderStory';
import Product from './Product';
import Review from './Review';
import image from '../../image/bg.jpg'

const Home = () => {
    return (
        <div>
            <Banner image={image}></Banner>
            <Product></Product>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <AboutUs></AboutUs>
            <FounderStory></FounderStory>
            <Contact></Contact>
        </div>
    );
};

export default Home;