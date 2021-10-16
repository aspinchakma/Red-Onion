import React from 'react';
import './ShowSingleItem.css';

const ShowSingleItem = ({ food, handleRemoveItems }) => {
    const { name, img, quantity, price, id } = food;
    return (
        <div className="row single-item-card my-3">
            <div className="col-lg-3">
                <img width="100%" src={img} alt="" />
            </div>
            <div className="col-lg-5 text-container-single-items">
                <p>{name.slice(0, 15)}</p>
                <p className="single-item-price">${price}</p>
            </div>
            <div className="col-lg-2 text-container-single-items">
                <p>Quantity</p>
                <p>{quantity}</p>
            </div>
            <div className="col-lg-2 cross-container">
                <i onClick={() => handleRemoveItems(id)} className="fas fa-times cross-sign"></i>
            </div>
        </div>
    );
};

export default ShowSingleItem;