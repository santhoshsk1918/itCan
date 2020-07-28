import React, {useContext} from 'react';
import {ProductContext} from "../Context/ProductContext";
import actions from "../Context/Actions/actions";
import Cart from "./Cart";
import {Button, Col, Row} from "react-bootstrap";
import {UserContext} from "../Context/UserContext";

const CartList = (prop) => {
    let {products, setProducts} = useContext(ProductContext);
    const {loggedInUser} = useContext(UserContext);
    let cartList = products.filter((item) => {return item.Cart !== 0})
    let cartNumber = products.reduce((result, item) => { return item.Cart + result}, 0)
    let cartValue = products.reduce((result, item) => { return item.Cart * item.price +  result}, 0)
    const loginUser = () => {
        prop.history.push("/login")
    }
    return (
        <React.Fragment>

            {cartNumber === 0
                ?
                <React.Fragment>
                    <div className={"align-center"}>
                        <h3>Empty Cart Please Continue Shopping</h3>
                    </div>
                </React.Fragment>
                :
                <React.Fragment>
                    <h3>Cart Details</h3>
                    <Row>
                        <Col xs={12} md={8}>
                            {cartList.map((item) => <Cart key={item.id} value={item} setProducts={setProducts} /> )}
                        </Col>
                        <Col xs={12} md={4}>
                            <p className={"mt-3"}>Final Price: <b>{cartValue}</b></p>
                            {loggedInUser.isLoggedIn
                                ?
                                <React.Fragment>

                                    <Button className={"btn btn-app-primary"}>Check out</Button>
                                </React.Fragment>
                                :
                                <Button className={"btn btn-app-primary"} onClick={loginUser}>Login to proceed</Button>
                            }
                        </Col>
                    </Row>

                </React.Fragment>
            }
        </React.Fragment>
    );
};

export default CartList;