import React from 'react';
import useAuth from '../../hooks/useAuth';
import deliveryCar from "../../images/Image/Group 1151.png"
import deliveryMan from "../../images/Image/Group 1152.png";
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { street } = useAuth();
    const uniqueTitle = "This is a unique title"
    return (
        <div className="container row mx-auto my-4">

            <div className="col-lg-7 map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8850.75067613344!2d79.0842115824342!3d21.14116261256816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c09597ebc80d%3A0x9b5f9408a5f5f364!2sGulshan%20Plaza%20Biryani%20Restaurant!5e0!3m2!1sen!2sbd!4v1634364385170!5m2!1sen!2sbd" width="650" height="450" style={{ border: "0px" }} allowfullscreen="" title={uniqueTitle} loading="lazy"></iframe>
            </div>

            <div className="col-lg-1">

            </div>
            <div className="col-lg-4 delivery-details py-3">
                <img className="ms-3" width="25%" src={deliveryCar} alt="" />
                <div className="delivery-information-container mt-2">
                    <h4 className="delivery-information-header">Your Location</h4>
                    <p className="delivery-destination">107 Rd No 8</p>
                    <h4 className="delivery-information-header">Shop Address</h4>
                    <p className="delivery-destination">Gulshan plaza Restaurant GPR</p>
                </div>
                <h2 className="my-2">09:30</h2>
                <p className="delivery-destination">Estimated Delivery time</p>
                <div className="d-flex align-items-center delivery-man-details mb-4">
                    <img className="ms-2" width="15%" src={deliveryMan} alt="" />
                    <div className="ms-3 mt-1 ">
                        <h4>Hakim</h4>
                        <p>Your raider</p>
                    </div>
                </div>
                <div className="contact-button-container">
                    <button className="contact-button">Contact</button>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;