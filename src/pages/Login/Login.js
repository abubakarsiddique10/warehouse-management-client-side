import React from "react";
import './Login.css';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }
    return (
        <section className="login-section">
            <Container className="">
                <div className="container-form">
                    <h1 className="text-center mb-3">Login</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <Button className="w-100 my-3 fs-5" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className="text-center">Please registration your account?<Link className="ms-1 text-decoration-none" to='/registration'>Registration</Link></p>
                </div>
            </Container >
        </section >
    )
}
export default Login;
