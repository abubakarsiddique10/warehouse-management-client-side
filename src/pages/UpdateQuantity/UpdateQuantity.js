import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
const UpdateQuantity = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://powerful-falls-87605.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div>
            <Container>
                <h1>Uptade {id}</h1>
            </Container>
        </div>
    )
}
export default UpdateQuantity;