import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, Table } from "react-bootstrap";
const RecentProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recents')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <section style={{ paddingTop: '70px', paddingBottom: '80px' }}>
            <Container>
                <h1 className="text-center mb-4">Recent Products</h1>
                <Table className="w-100">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>IMAGE</th>
                            <th>PHONE</th>
                            <th>AMOUNT</th>
                            <th>QUANTITY</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr key={product._id}>
                                <td><img src={product.img} alt="" /></td>
                                <td>{product.phoneName}</td>
                                <td>{product.Price}</td>
                                <td>{product.quantity}</td>
                                <td>Active</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
                {/* <Row xs={1} md={2} lg={3} className="g-4 padding pt-0">
                    {
                        products.map(product => <Col>
                            <Card className="h-100 border-0">
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.phoneName}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <div className="sub-details">
                                        <div>
                                            <span>Supplier: {product.supplierName}</span>
                                        </div>
                                        <div>
                                            <h6>Quantity: {product.quantity}</h6>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <Button >Stock Update</Button>
                                    <h5>{product.Price}</h5>
                                </Card.Footer>
                            </Card>
                        </Col>)
                    }
                </Row> */}
            </Container>
        </section>
    )
}
export default RecentProducts;