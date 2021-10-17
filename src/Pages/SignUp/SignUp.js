import Button from '@restart/ui/esm/Button';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './SignUp.css';
import logoImg from "../../images/logo2.png"
import { Link } from 'react-router-dom';

const SignUp = () => {
    const auth = getAuth()


    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const getUserName = e => {
        const name = e.target.value;
        setUserName(name)
    }
    const getUserEmail = e => {
        const email = e.target.value;
        setUserEmail(email)
    }
    const getUserPassword = e => {
        const password = e.target.value;
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            return setPasswordError('Ensure password has two uppercase letters.')
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            return setPasswordError('Ensure password has two digits.')
        }
        if (!/.{8}/.test(password)) {
            return setPasswordError('Ensure password is of length 8.')
        }
        setUserPassword(password)
        if (password) {
            return setPasswordError('')
        }

    }


    const getUserConfirmPassword = e => {
        const confirmPassword = e.target.value;
        setUserConfirmPassword(confirmPassword)
    }

    const handleSubmitButton = (e) => {
        console.log(userPassword, userPassword)
        e.preventDefault();
        if (userPassword !== userConfirmPassword) {
            return setError('Do not match you password')
        }
        if (userName.length < 3) {
            return setError('Please write your full name')
        }
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then(result => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setError('we send verify message on your email and login')
                    })
                updateProfile(auth.currentUser, {
                    displayName: userName
                })
                    .then(() => {
                    }).catch(error => {

                    })
            }).catch(error => {
                const errorMessage = error.message;
                const resizeError = errorMessage.slice(22, 35);
                const resizeErrorTwo = errorMessage.slice(22, 42)
                if (resizeError === 'invalid-email') {
                    setError('Please write valid email')
                };
                if (resizeErrorTwo === 'email-already-in-use') {
                    setError('Email already in use')
                }

            })





    }

    return (
        <div className="main-form-section">
            <div className="row container mx-auto">
                <div className="col-lg-4">

                </div>
                <div className="col-lg-4">
                    <Form className="form-container">
                        <Form.Group className="mb-4 logo-container" controlId="formLogo">
                            <img
                                width="200px"
                                src={logoImg}
                                alt="Red Onion Logo" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <input type="text" onBlur={getUserName} placeholder="Name" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <input type="email" onBlur={getUserEmail} name="" id="" placeholder="Email" required />

                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword1">

                            <input type="password" onChange={getUserPassword} name="" id="" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicPassword1">
                            <div className="passwordError">
                                <p>{passwordError}</p>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword2">

                            <input type="password" name="" onBlur={getUserConfirmPassword} id="" placeholder="Confirm Password" required />
                        </Form.Group>

                        <div className="error-message mb-1"><p >{error}</p></div>
                        <Button onClick={handleSubmitButton} variant="primary" type="submit">
                            Sign up
                        </Button>
                        <p className="text-center mt-3 already-have-account">
                            <Link to="/signIn">Already have an account ?</Link>
                        </p>
                    </Form>
                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </div>
    );
};

export default SignUp;