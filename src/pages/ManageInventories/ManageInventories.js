import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import './ManageInventories.css';

const ManageInventories = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('https://powerful-falls-87605.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setPhones(data));
    }, []);
    const handleDelete = id => {
        const url = `https://powerful-falls-87605.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                const remaining = phones.filter(phone => phone._id !== id);
                setPhones(remaining)
            })
    }
    return (
        <section>
            <Container>
                {<table className="w-100">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>phones</th>
                            <th>SUPPLIER</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    {
                        phones.map(phone => <tbody key={phone._id}>
                            <tr>
                                <td title={phone._id} ></td>
                                <td><img src={phone.img} alt="" /></td>
                                <td>{phone.phoneName}</td>
                                <td>{phone.supplierName}</td>
                                <td>{phone.quantity}</td>
                                <td>{phone.Price}</td>
                                <td title={phone.description}>{phone.description?.slice(0, 20) + '...'}</td>
                                <td><Button onClick={() => handleDelete(phone._id)}>Delete</Button></td>
                            </tr>
                        </tbody>)
                    }
                </table>}
            </Container>
        </section >
    )
}
export default ManageInventories;
