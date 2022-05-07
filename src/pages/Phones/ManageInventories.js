import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ManageInventories = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setPhones(data));
    }, []);
    const handleDelete = id => {
        const confirm = window.confirm('Are you delete item');
        if (confirm) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = phones.filter(phone => phone._id !== id);
                    setPhones(remaining)
                })
        }
    }
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/addnewitem');
    }
    return (
        <section style={{ background: '#edeff5' }}>
            <Container>
                <h1>Manage Inventories</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        phones.map(phone => <Col key={phone._id}>
                            <Card className="h-100 border-0">
                                <Card.Img variant="top" src={phone.img} />
                                <Card.Body>
                                    <Card.Title>{phone.phoneName}</Card.Title>
                                    <Card.Text>{phone.description}</Card.Text>
                                    <div className="sub-details">
                                        <div>
                                            <span>Supplier: {phone.supplierName}</span>
                                        </div>
                                        <div>
                                            <span>Quantity: {phone.quantity}</span>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={() => handleDelete(phone._id)}>Delete</Button>
                                    <h5>{phone.Price}</h5>
                                </Card.Footer>
                            </Card>
                        </Col>)
                    }
                </Row>
                <div className="py-5 text-center">
                    <Button onClick={handleNavigate} className=" w-25">Add New Item</Button>
                </div>
            </Container>
        </section>
    )
}
export default ManageInventories;