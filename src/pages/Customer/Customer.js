import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Customer = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const customer = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
        }
        fetch('http://localhost:5000/customer', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(customer)
        })
        event.target.reset();
    }
    return (
        <section style={{ paddingTop: '70px', paddingBottom: '80px' }}>
            <Container>
                <h1 className="text-center">Add Customer</h1>
                <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name="phone" type="number" placeholder="Phone" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control name="quantity" type="number" placeholder="Quantity" />
                    </Form.Group>

                    <div className="text-center">
                        <Button className="w-25 me-3" variant="primary" type="submit">
                            Save
                        </Button>
                        <Link to='/customers'>
                            <Button className="w-25 ms-3" variant="primary" type="submit">
                                Continue
                            </Button>
                        </Link>
                    </div>
                </Form>
            </Container>
        </section>
    )
}
export default Customer;