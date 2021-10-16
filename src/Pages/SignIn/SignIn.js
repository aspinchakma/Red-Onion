import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logoImg from "../../images/logo2.png";
import './SignIn.css';

const SignIn = () => {
    const { signInWithGoogle, signInWithFacebook, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const destination = location.state?.from || './home';
    const signInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(destination);
                setIsLoading(false)

            })


    }


    const handleSubmitButton = e => {
        e.preventDefault();
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
                            <input type="email" name="" id="" placeholder="Email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword1">

                            <input type="password" name="" id="" placeholder="Password" required />
                        </Form.Group>
                        <Button onClick={handleSubmitButton} variant="primary" type="submit">
                            Login
                        </Button>
                        <p className=" mt-3 already-have-account row">
                            <Link to="/signUp" className="col-lg-6 text-left">Create an account ?</Link>
                            <span className="already-have-account col-lg-6 text-right forgot">Forgot password</span>
                        </p>
                    </Form>
                    <p className="text-center">OR</p>
                    <div className="icon-container">
                        <img className="mx-2" onClick={signInGoogle} src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo" />
                        <img className="mx-2" onClick={signInWithFacebook} src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook logo" />
                    </div>

                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </div >
    );
};

export default SignIn;