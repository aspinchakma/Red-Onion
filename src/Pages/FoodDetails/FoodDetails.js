import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Spinner } from 'react-bootstrap';
import './FoodDetails.css'
import useAuth from '../../hooks/useAuth';

const FoodDetails = () => {
    const { addToDatabase } = useAuth();
    const { foodId } = useParams();
    const [food, setFood] = useState([]);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        fetch('/foods.JSON')
            .then(response => response.json())
            .then(data => setFood(data)).catch(error => {
                console.log(error)
            })
    }, []);

    const selectedItem = food.filter(food => food.id == foodId);
    console.log(selectedItem[0]);

    const increaseQuantity = () => {
        const result = quantity + 1;
        setQuantity(result)
    }
    const decreaseQuantity = () => {
        if (quantity > 1) {
            const result = quantity - 1;
            setQuantity(result)
        }
    }

    return (
        <div className="container mt-4 mb-5">
            {
                selectedItem[0] ? <div className="row g-3 px-3">
                    <div className="food-details-text col-lg-5">
                        <h1 className="item-name mt-5">{selectedItem[0].name}</h1>
                        <p>{selectedItem[0].text}.</p>
                        <div className="d-flex align-items-center">
                            <h2 className="item-price">$ {selectedItem[0].price}</h2>
                            <div className="quantity-section d-flex ms-3">
                                <button onClick={decreaseQuantity} className=" common-button decrease-button">-</button>
                                <h2>
                                    {
                                        quantity > 9 ? quantity : `0${quantity}`
                                    }
                                </h2>
                                <button onClick={increaseQuantity} className=" common-button increase-button">+</button>
                            </div>
                        </div>
                        <button onClick={() => addToDatabase(foodId, quantity)} className="add-to-cart-button mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg> <span className="ms-2 shopping-cart-button-text">Add</span></button>
                    </div>
                    <div className="col-lg-7 text-center">
                        <img width="80%" src={selectedItem[0].img} alt="" />
                    </div>
                </div> : <div className="spinner"> <Spinner className="spinner_child" animation="grow" variant="primary" /></div>
            }

        </div>
    );
};

export default FoodDetails;