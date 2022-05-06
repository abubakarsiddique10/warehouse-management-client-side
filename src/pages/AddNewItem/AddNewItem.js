import React from "react";
import { Button, Container, Form } from "react-bootstrap";
const AddNewItem = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const phoneName = event.target.name.value;
        const quantity = event.target.quantity.value;
        const Price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const img = event.target.image.value;
        const description = event.target.description.value;

        const product = { img, phoneName, description, supplier, quantity, Price, };

        // send data to server
        fetch(('http://localhost:5000/products'), {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
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
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
export default AddNewItem;