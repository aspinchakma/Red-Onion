import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import FoodContainer from './FoodContainer/FoodContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodContainer></FoodContainer>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;