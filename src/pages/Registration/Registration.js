import React from "react";
import './Registration.css';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Registration = () => {
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = { name, email, password };
        console.log(name, email, password)
    }
    return (
        <section className="registration-section">
            <Container>
                <div className="container-form">
                    <h1 className="text-center mb-3">Registration</h1>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Your name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <Button className="w-100 my-3 fs-5" variant="primary" type="submit">
                            Register Now
                        </Button>
                    </Form>

                    <div className="text-center mb-1">
                        <Button className="bg-dark ">SignIn Google</Button>
                        <Button className="bg-dark ">SignIn Github</Button>
                    </div>

                    <p className="text-center">Already have an account?<Link className="ms-1 text-decoration-none" to='/login'>Sign In</Link></p>

                </div>
            </Container >
        </section >
    )
}
export default Registration;