import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
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
            <section>
                <Container>
                    <img className="img-fluid w-100" src="https://i.ibb.co/RcfkKqY/banner1.jpg"></img>
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
                    <Link to='/ManageInventories'><Button className="d-block w-25 mx-auto mt-4">Manage Inventories</Button></Link>
                </Container>
            </section>
            <RecentProducts></RecentProducts>
        </>
    )
}
export default HeroSection;