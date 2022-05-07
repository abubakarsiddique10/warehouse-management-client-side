import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import img from '../../images/phone.jpg'
import Phone from "../../Phones/Phone/Phone";
import RecentProducts from "../../RecentProducts/RecentProducts";
import Loading from "../../Shared/Loading/Loading";
const HeroSection = () => {
    const [user, loading] = useAuthState(auth);
    const [phones, setPhones] = useState([]);
    const slicePhone = phones.slice(0, 6)
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
            <section style={{ background: '#edeff5', paddingTop: '70px', paddingBottom: '80px' }}>
                <Container>
                    <h1 className="text-center mb-4">Mobile Phones</h1>
                    <Row xs={1} md={2} lg={3} className="g-4 padding pt-0">
                        {
                            slicePhone.map(phone => <Phone key={phone.id} phone={phone} />)
                        }
                    </Row>
                </Container>
            </section>
            <RecentProducts></RecentProducts>
        </>
    )
}
export default HeroSection;