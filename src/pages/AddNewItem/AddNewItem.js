import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault();
        const product = {
            email: user.email,
            phoneName: event.target.name.value,
            quantity: event.target.quantity.value,
            Price: event.target.price.value,
            supplier: event.target.supplier.value,
            img: event.target.image.value,
            description: event.target.description.value
        }
        // send data to server
        fetch(('http://localhost:5000/order'), {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Your order is booked')
                }
            })
    }
    return (
        <div>
            <Container>
                <div className="container-form">
                    <h1 className="text-center mb-3">Add New Item</h1>
                    <Form onSubmit={handleAddItem}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Phone name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="text" value={user && user.email} readOnly disabled required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Quantity</Form.Label>
                            <Form.Control type="text" name="quantity" placeholder="Phone Quantity" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Price</Form.Label>
                            <Form.Control type="text" name="price" placeholder="Phone Price" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control type="text" name="supplier" placeholder="Supplier Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imgae Url</Form.Label>
                            <Form.Control type="text" name="image" placeholder="Imgae Url" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <textarea placeholder="Description" name="description" style={{ width: '100%', height: '100px' }}></textarea>
                        </Form.Group>

                        <Button className="w-100 my-3 fs-5" variant="primary" type="submit">
                            Add Item
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
export default AddNewItem;