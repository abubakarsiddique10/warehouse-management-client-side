import React from "react";
import './Header.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header className="header">
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Phone Corner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/ManageInventories">Manage Inventories</Nav.Link>
                            <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
                            {
                                user && <div className="d-flex">
                                    <Nav.Link as={Link} to="/addnewitem">AddItem</Nav.Link>
                                    <Nav.Link as={Link} to="/myItem">MyItem</Nav.Link>
                                </div>
                            }
                        </Nav>
                        <Nav>
                            {
                                !user ? <Nav.Link as={Link} to="/login">Log In</Nav.Link> : <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;