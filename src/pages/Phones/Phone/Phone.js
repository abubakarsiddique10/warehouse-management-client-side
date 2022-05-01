import React from "react";
import './Phone.css'
import { Button, Card, Col, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faClock, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
const Phone = ({ phone }) => {
    const { name, img, Price, description, phoneName, supplierName, quantity } = phone;
    const handleCheckOut = () => {
        console.log('hello')
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
                            <span>Quantity: {quantity}</span>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={handleCheckOut}>Stock Update</Button>
                    <h5>{Price}</h5>
                </Card.Footer>
            </Card>
        </Col>
    )
}
export default Phone;

