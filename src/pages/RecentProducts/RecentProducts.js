import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
const RecentProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-falls-87605.herokuapp.com/recents')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <section style={{ paddingTop: '70px', paddingBottom: '80px' }}>
            <Container>
                <h1 className="text-center mb-4">Recent Products</h1>
                <div className="w-100">
                    <Table responsive className="">
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
                </div>
            </Container>
        </section>
    )
}
export default RecentProducts;
