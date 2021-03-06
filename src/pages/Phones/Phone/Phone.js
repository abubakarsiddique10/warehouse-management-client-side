import React from "react";
import './Phone.css'
import { Button, Card, Col, ToastContainer, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Phone = ({ phone }) => {

    const navigate = useNavigate();
    const { name, img, Price, description, phoneName, supplierName, quantity, _id } = phone;
    const handleCheckOut = (id) => {
        console.log('hello', id);
        navigate(`/inventory/${id}`);
    }
    return (
        <Col>
            <Card className="h-100 border-0">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{phoneName}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className="sub-details">
                        <div>
                            <span>Supplier: {supplierName}</span>
                        </div>
                        <div>
                            <h6>Quantity: {quantity}</h6>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => handleCheckOut(_id)}>Stock Update</Button>
                    <h5>{Price}</h5>
                </Card.Footer>
            </Card>
        </Col>
    )
}
export default Phone;

