import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import './Inventory.css';
const Inventory = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    /* const handaleUpdate = (getProduct, id) => {
        const myQuantity = getProduct.quantity + 1;
        const newQuantity = { quantity: myQuantity };
        console.log(getProduct);
        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newQuantity)
        })
    } */
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
                            <td title={products._id} >{products._id?.slice(0, 10) + '...'}</td>
                            <td><img src={products.img} alt="" /></td>
                            <td>{products.phoneName}</td>
                            <td>{products.supplierName}</td>
                            <td>{products.quantity}</td>
                            <td>{products.Price}</td>
                            <td title={products.description}>{products.description?.slice(0, 20) + '...'}</td>
                            <td><Button >Delivered</Button></td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </section>
    )
}
export default Inventory;
