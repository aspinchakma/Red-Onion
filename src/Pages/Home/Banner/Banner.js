import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container text-center mb-4">
            <h2 className="banner-title mb-3">Best food waiting for your belly</h2>
            <div className="search-container">
                <input className="search-field" type="text" placeholder="Search food items" /><button className="search-button">Search</button>
            </div>
        </div >
    );
};

export default Banner;