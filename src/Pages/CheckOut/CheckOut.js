import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './CheckOut.css';
import useData from '../../hooks/useData';
import useFirebase from '../../hooks/useFirebase'
import ShowSingleItem from './ShowSingleItem/ShowSignleItem';

const CheckOut = () => {
    const [street, setStreet] = useState('');
    const [getText, setGetText] = useState('');
    const [food] = useData();
    const { getDb, removeItem } = useFirebase();


    const handleSaveButton = e => {
        e.preventDefault();
        setStreet(getText)

    }
    const getTextFromInputField = e => {
        const text = e.target.value;
        setGetText(text);


    }
    const result = [];
    const data = getDb();
    const dbDataInObject = JSON.parse(data);
    if (food.length) {
        for (const [key, value] of Object.entries(dbDataInObject)) {
            const ourItems = food.find(food => food.id == key);
            if (ourItems) {
                ourItems.quantity = value;
            }
            result.push(ourItems);
        }
    }
    // console.log(result)


    // for (const [key, value] of Object.entries(dbDataInObject)) {
    //     console.log(key, value)
    // }
    // console.log(result)

    // console.log(food)
    // console.log(JSON.parse(data))


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
                        result.length && result.map(food => <ShowSingleItem key={food.id} removeItem={removeItem} food={food}></ShowSingleItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckOut;