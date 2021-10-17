import Button from '@restart/ui/esm/Button';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logoImg from "../../images/logo2.png";
import './SignIn.css';

const SignIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { signInWithGoogle, signInWithFacebook } = useAuth();
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();

    const destination = location.state?.from || './home';
    const signInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(destination);

            }).catch(error => {
                console.log(error)
            })


    }
    const signInFacebook = () => {
        signInWithFacebook()
            .then(result => {
                history.push(destination)
            }).catch(error => {
                console.log(error)
            })
    }
    const getEmail = e => {
        const email = e.target.value;
        setUserEmail(email)
    }
    const getPassword = e => {
        const password = e.target.value;
        setUserPassword(password)
    }

    const auth = getAuth();

    const handleSubmitButton = e => {
        e.preventDefault();
        if (userEmail.length < 7) {
            return setError('Please Write email')
        }
        if (userPassword.length === 0) {
            return setError('Please type your password')
        }
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(result => {
                const user = result.user;
                history.push(destination)
                setError('')
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage.slice(22, 36))
                const notFound = errorMessage.slice(22, 36);
                if (notFound === 'user-not-found') {
                    return setError('User not found')
                }
                if (errorMessage.slice(22, 36) === "wrong-password") {
                    setError("Your password is wrong")
                }
            })
    }
    const resetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                setError('We send password reset email')
            }).catch(error => {

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

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <input onBlur={getEmail} type="email" name="" id="" placeholder="Email" required />

                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword1">

                            <input onBlur={getPassword} type="password" name="" id="" placeholder="Password" required />
                        </Form.Group>
                        <div className="sign-in-error-message mb-1"><p>{error}</p></div>
                        <Button onClick={handleSubmitButton} variant="primary" type="submit">
                            Login
                        </Button>
                        <p className=" mt-3 already-have-account row">
                            <Link to="/signUp" className="col-lg-6 text-left">Create an account ?</Link>
                            <span onClick={resetPassword} className="already-have-account col-lg-6 text-right forgot">Forgot password</span>
                        </p>
                    </Form>
                    <p className="text-center">OR</p>
                    <div className="icon-container">
                        <img className="mx-2" onClick={signInGoogle} src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo" />
                        <img className="mx-2" onClick={signInFacebook} src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook logo" />
                    </div>

                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </div >
    );
};

export default SignIn;