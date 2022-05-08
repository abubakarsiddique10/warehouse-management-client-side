import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import './MyItem.css';

const MyItem = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(user?.email)

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://powerful-falls-87605.herokuapp.com/order?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    if (loading) {
        return <Loading />
    }

    const hendleDelete = id => {
        const confirm = window.confirm('Are you delete item');
        if (confirm) {
            fetch(`https://powerful-falls-87605.herokuapp.com/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                })
        }
    }

    return (
        <section>
            <Container>
                <h1>MyItem{orders.length}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>PRODUCTS</th>
                            <th>SUPPLIER</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th>DESCRIPTION</th>
                            <th>ACTIVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr key={order._id}>
                                <td>{order._id}</td>
                                <td><img src={order.img} alt="" /></td>
                                <td>{order.phoneName}</td>
                                <td>{order.supplier}</td>
                                <td>{order.quantity}</td>
                                <td>{order.Price}</td>
                                <td> {order.description}</td>
                                <td><Button onClick={() => hendleDelete(order._id)}>Delete</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </section>
    )
}
export default MyItem;