import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import img from '../../images/phone.jpg'
import Phone from "../../Phones/Phone/Phone";
import Loading from "../../Shared/Loading/Loading";
const HeroSection = () => {
    const [user, loading] = useAuthState(auth);
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setPhones(data));
    }, []);
    if (loading) {
        return <Loading />
    }
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
                            <img className="img-fluid" src="https://i.ibb.co/znmMLHY/banner2-removebg-preview.png"></img>
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