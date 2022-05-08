import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './Inventory.css';
const Inventory = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);
    let quantity = parseInt(products.quantity);
    const hendleUpdate = id => {
        quantity--;
        const updateQuantity = { quantity };
        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateQuantity),
        })
    }

    const addQuantiy = event => {
        event.preventDefault();
        let quantity = parseInt(event.target.number.value);
        const updateQuantity = { quantity };
        console.log(quantity)
        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <section>
            <Container>
                <table className="w-100">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>PRODUCTS</th>
                            <th>SUPPLIER</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{products._id}</td>
                            <td><img src={products.img} alt="" /></td>
                            <td>{products.phoneName}</td>
                            <td>{products.supplierName}</td>
                            <td>{products.quantity}</td>
                            <td>{products.Price}</td>
                            <td> {products.description}</td>
                            <td><Button onClick={() => hendleUpdate(products._id)}>Delivered</Button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-5 text-center">
                    <Form onSubmit={addQuantiy}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add Your Restock Items</Form.Label>
                            <Form.Control type="text" name="number" placeholder="Add Your Quantity" required />
                        </Form.Group>
                        <Button className="w-50 my-3 fs-5" variant="primary" type="submit">
                            Restock
                        </Button>
                    </Form>
                </div>
            </Container>
        </section>
    )
}
export default Inventory;
