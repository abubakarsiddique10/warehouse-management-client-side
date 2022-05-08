import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
const Customers = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/customers')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, []);

    return (
        <section>
            <Container>
                <h1 className="my-4">Customers: {customers.length}</h1>
                <Table responsive>
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>QUANTITY</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => <tr key={customer._id}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.quantity}</td>
                                <td>{customer._id}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </section>
    )
}
export default Customers;