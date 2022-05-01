import React from "react";
import './Login.css';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {

    const [signInWithEmailAndPassword, user, loadin, error] = useSignInWithEmailAndPassword(auth)

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset()
    }
    console.log(user);
    console.log(error)
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
                        <p className="text-danger mb-0">{error?.message}</p>
                        <Button className="w-100 my-3 fs-5" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <div className="text-center mb-1">
                        <Button className="bg-dark ">SignIn Google</Button>
                        <Button className="bg-dark ">SignIn Github</Button>
                    </div>
                    <p className="text-center">Please registration your account?<Link className="ms-1 text-decoration-none" to='/registration'>Registration</Link></p>
                </div>
            </Container >
        </section >
    )
}
export default Login;
