import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from "../../images/logo2.png"

const SignIn = () => {
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
                        <p className="text-center mt-3 already-have-account">
                            <Link to="/signUp">Create an account ?</Link>
                        </p>
                    </Form>
                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </div>
    );
};

export default SignIn;