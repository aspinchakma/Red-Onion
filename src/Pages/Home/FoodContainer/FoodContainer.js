import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import Food from '../Food/Food';
import './FoodContainer.css'

const FoodContainer = () => {
    const [food] = useData();
    const Breakfast = [];
    const lunch = [];
    const dinner = [];
    if (food[1] !== undefined) {
        for (let i = 0; i < 6; i++) {
            Breakfast.push(food[i])

        }
        for (let i = 6; i < 12; i++) {
            lunch.push(food[i])

        }
        for (let i = 12; i < 18; i++) {
            dinner.push(food[i])

        }

    }

    console.log('a', Breakfast)
    console.log('b', lunch)
    console.log('c', dinner)
    const [showItems, setShowItems] = useState([]);

    const handleBreakfast = () => {
        setShowItems(Breakfast)
    }
    const handleLunch = () => {
        setShowItems(lunch)
    }
    const handleDinner = () => {
        setShowItems(dinner)
    }


    return (
        <div className="container mb-5">
            <div className="food_container_header mb-3">
                <p onClick={handleBreakfast}>Breakfast</p>
                <p onClick={handleLunch}>Lunch</p>
                <p onClick={handleDinner}>Dinner</p>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    showItems.length ? showItems.map(food => <Food food={food} key={food.id}></Food>) : Breakfast.map(food => <Food food={food} key={food.id}></Food>)
                }
            </Row>
            <div className="text-center mt-4">
                <button className="check-out-button">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default FoodContainer;