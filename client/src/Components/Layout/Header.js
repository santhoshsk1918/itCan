import React, {useContext} from 'react';
import {Navbar, Nav, Badge} from 'react-bootstrap';
import {UserContext} from "../../Context/UserContext";
import actions from "../../Context/Actions/actions";
import {Link} from "react-router-dom";
import {ProductContext} from "../../Context/ProductContext";

const Header = (props) => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const {products} = useContext(ProductContext);
    let cartNumber = products.reduce((result, item) => { return item.Cart + result}, 0)
    const logoutUser = () => {
        setLoggedInUser({type: actions.LOGOUT_USER, payload: null});
    }
    return (
        <React.Fragment>
            <Navbar bg="app-primary" expand="lg">
                <Navbar.Brand href="/" id={"storeHeader"} className={"text-app-secondary"}>ITCAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        {loggedInUser.isLoggedIn ?
                            <React.Fragment>
                                <Link to={"/"} className={"text-app-secondary"}>Home</Link>
                                <Link to={"/cart"} className={"text-app-secondary ml-2"}>Cart {cartNumber == 0 ? null : <sup>{cartNumber}</sup>}</Link>
                                <Link onClick={logoutUser} className={"text-app-secondary ml-2"}>Logout</Link>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Link to={"/"} className={"text-app-secondary"}>Home</Link>
                                <Link to={"/cart"} className={"text-app-secondary ml-2"}>Cart {cartNumber == 0 ? null : <sup>{cartNumber}</sup>}</Link>
                                <Link to={"/login"} className={"text-app-secondary ml-2"}>Log in</Link>
                            </React.Fragment>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;