import React, { useRef } from "react";
import './Login.css';
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Shared/Loading/Loading";
const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passwordRef = useRef('');

    // sign in with google and facebook
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser] = useSignInWithFacebook(auth);

    // sign in with email and password
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();

        fetch('https://powerful-falls-87605.herokuapp.com/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken);
            })
    };

    // send reset password in email
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const handleVarififcation = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast('sent reset password');
    }

    if (user || googleUser || fbUser) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading />
    }

    return (
        <section className="login-section">
            <Container className="">
                <div className="container-form">
                    <h1 className="text-center mb-3">Login</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <p className="mb-0 text-danger">{error && error.message}</p>
                        <p style={{ cursor: 'pointer' }} onClick={handleVarififcation} className="mb-0">Forget Password</p>
                        <Button className="w-100 my-3 fs-5" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <div className="text-center mb-1">
                        <Button onClick={() => signInWithGoogle()} className="bg-dark ">SignIn Google</Button>
                        <Button onClick={() => signInWithFacebook()} className="bg-dark ">SignIn Facebook</Button>
                    </div>
                    <p className="text-center">Please registration your account?<Link className="ms-1 text-decoration-none" to='/registration'>Registration</Link></p>
                </div>
                <ToastContainer />
            </Container >
        </section >
    )
}
export default Login;
