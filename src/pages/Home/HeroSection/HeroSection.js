import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from '../../images/phone.jpg'
import Phone from "../../Phones/Phone/Phone";
const HeroSection = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhones(data));
    }, [])
    return (
        <>
            <section className="border">
                <Container>
                    <Row md={1} lg={2} className='padding'>
                        <Col className="d-flex align-items-center">
                            <h1>Experience Better underline
                                Learning.</h1>
                        </Col>
                        <Col>
                            <img className="img-fluid" src={img}></img>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section style={{ background: '#edeff5' }}>
                <Container>
                    <h1 className="text-center py-4">Mobile Phones</h1>
                    <Row xs={1} md={2} lg={3} className="g-4 padding pt-0">
                        {
                            phones.map(phone => <Phone key={phone.id} phone={phone} />)
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HeroSection;