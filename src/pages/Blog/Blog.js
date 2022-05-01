import React from "react";
import { Container } from "react-bootstrap";
const Blog = () => {
    return (
        <section>
            <Container>
                <div className="my-5">
                    <h3 className="mb-3">Difference between javascript and nodejs?</h3>
                    <table className="fs-5">
                        <thead>
                            <tr className="bg-dark text-white">
                                <th className="p-2">Javascript</th>
                                <th>NodeJs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3">avascript is a programming language that is used for writing scripts on the website</td>
                                <td>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr style={{ background: '#EDEFF5' }}>
                                <td className="p-3">It is basically used on the client-side</td>
                                <td>It is mostly used on the server side</td>
                            </tr>
                            <tr>
                                <td className="p-3">Javascript is used in frontend development</td>
                                <td>NodeJs is used in server side development</td>
                            </tr>
                            <tr style={{ background: '#EDEFF5' }}>
                                <td className="p-3">Javascript can only be run in the browsers</td>
                                <td>We can run Javascript outside the<br /> browser with the help of nodejs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mb-5">
                    <h3 className="mb-3">Defference between Sql And NoSql?</h3>
                    <table className="fs-5">
                        <thead>
                            <tr className="bg-dark text-white">
                                <th className="p-2">SQL Database</th>
                                <th>NoSQL Database</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3">Relational database management system</td>
                                <td>Non relational database system</td>
                            </tr>
                            <tr style={{ background: '#EDEFF5' }}>
                                <td className="p-3">These databases have fixed or static predefine schema</td>
                                <td>They have dynamic schema</td>
                            </tr>
                            <tr>
                                <td className="p-3">Typically required</td>
                                <td>Typically not required</td>
                            </tr>
                            <tr style={{ background: '#EDEFF5' }}>
                                <td className="p-3">Vertically scalable</td>
                                <td>Horizontally scalable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb-5 fs-5">
                    <h3 className="mb-3">What is the purpose of JWT and how does it work?</h3>
                    <div>
                        <span>Whta is the purpose of JWT</span>
                        <p>In short, JWTs are used as a secure way to authenticate users and share information.</p>
                        <span>how does it work</span>
                        <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Blog;
