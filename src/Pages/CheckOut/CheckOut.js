import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './CheckOut.css';
import useData from '../../hooks/useData';
import useFirebase from '../../hooks/useFirebase'
import ShowSingleItem from './ShowSingleItem/ShowSignleItem';


const CheckOut = () => {

    const [street, setStreet] = useState('');
    const [getText, setGetText] = useState('');
    const [food] = useData();
    const [cart, setCart] = useState([]);
    // console.log(cart)
    const { getDb, removeItem } = useFirebase();



    const handleSaveButton = e => {
        e.preventDefault();
        setStreet(getText)

    }
    const getTextFromInputField = e => {
        const text = e.target.value;
        setGetText(text);


    }

    useEffect(() => {
        let result = [];
        const data = getDb();
        const dbDataInObject = JSON.parse(data);
        if (food.length) {
            for (const [key, value] of Object.entries(dbDataInObject)) {
                // console.log(key)
                const ourItems = food.find(food => food.id == key);
                if (ourItems) {
                    ourItems.quantity = value;
                }
                result.push(ourItems);
            }
        }
        setCart(result)
    }, [food])

    // console.log(cart)


    const handleRemoveItems = (id) => {
        console.log(id);
        const newResult = cart.filter(food => food.id != id);
        setCart(newResult)
        removeItem(id)
    }

    let totalQuantity = 0;
    for (const item of cart) {
        totalQuantity = totalQuantity + item.quantity;
    };
    let totalPrice = 0;
    for (const item of cart) {
        totalPrice = + totalPrice + (item.price * item.quantity);
    }

    const tax = 5.00

    const deliveryFee = 10;
    const totalProductsPrice = totalQuantity + totalPrice + tax + deliveryFee;

    return (
        <div className="container my-4 row mx-auto">
            <div className="col-lg-5">
                <h3>Edit Delivery Details</h3>
                <p className="line"></p>
                <Form className="order-form-container">

                    <Form.Group className="mb-3" controlId="where">
                        <input type="text" placeholder="Deliver to door" required />

                    </Form.Group>
                    <Form.Group onBlur={getTextFromInputField} className="mb-3" controlId="streetNo">
                        <input type="text" name="" id="" placeholder="Street No" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="flatNo">

                        <input type="text" name="" id="" placeholder="Flat, suite or floor" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword2">

                        <input type="text" name="" id="" placeholder="Business Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword2">

                        <textarea name="" id="" cols="30" rows="3" placeholder="Add delivery instructor"></textarea>
                    </Form.Group>

                    <button onClick={handleSaveButton}>Save & Continue</button>

                </Form>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-4">
                <p>From <span className="from">Gulshan Plaza Restaurant GPR </span></p>
                <p>Arriving in 20-30 min</p>
                <p>{street}</p>
                <div>

                </div>
                <div>
                    {
                        cart.map(food => <ShowSingleItem key={food.id}
                            handleRemoveItems={handleRemoveItems} food={food}></ShowSingleItem>)
                    }
                </div>
                {
                    cart.length ? <div className="row">
                        <p className="col-lg-6">Subtotal.{totalQuantity} items</p>
                        <p className="col-lg-6 text-center">${totalPrice.toFixed(2)}</p>
                        <p className="col-lg-6">tax</p>
                        <p className="col-lg-6 text-center">${tax}.00</p>
                        <p className="col-lg-6">Delivery Fee</p>
                        <p className="col-lg-6 text-center">${deliveryFee}.00</p>
                        <p className="col-lg-6">Total</p>
                        <p className="col-lg-6 text-center">${totalProductsPrice}</p>
                        <button className="col-lg-12 text-center place-order-button">
                            Place Order
                        </button>
                    </div> : <div><h3>Please Add Items</h3></div>
                }
            </div>
        </div>
    );
};

export default CheckOut;