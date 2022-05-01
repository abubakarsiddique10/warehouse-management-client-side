import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Phone from "./Phone/Phone";
const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhones(data));
    }, [])
    return (
        <section style={{ background: '#edeff5' }}>
            <Container>
                <h1>Mobiles Phone</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        phones.map(phone => <Phone key={phone.id} phone={phone} />)
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Phones;