import React from 'react';
import actions from "../Context/Actions/actions";
import {Col, Row, Card, ButtonToolbar, ButtonGroup, Button} from "react-bootstrap";

const Cart = (prop) => {
    let {id, productName, price, images, category, Cart} = prop.value;
    let setProducts = prop.setProducts

    const plus = () => {
        let cart = Cart + 1
        setProducts({type: actions.UPDATE_CART, payload: {id: id, cart: cart}});
    }

    const minus = () => {
        let cart = Cart - 1
        setProducts({type: actions.UPDATE_CART, payload: {id: id, cart: cart}});
    }
    const removeCart = () => {
        setProducts({type: actions.UPDATE_CART, payload: {id: id, cart: 0}});
    }
    return (
        <React.Fragment>
            <Row className={"mt-2"}>
                <Col xs={12} md={12}>
                    <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={5} md={3}>
                                <img src={images} width={100} height={100}/>
                            </Col>
                            <Col xs={5} md={5} className={"text-left"}>
                                <span><b>{productName}</b></span><br />
                                <span>price: {price}</span>

                                <Row className={"mt-3"}>
                                    <Col xs={12} md={8}>
                                        <ButtonToolbar className={"align-center"} >
                                            <ButtonGroup aria-label="firstGroup" className={"mr-4"}>
                                                <Button variant="secondary" className={"btn-sm"} onClick={minus}>-</Button>
                                            </ButtonGroup>
                                            <ButtonGroup aria-label="firstGroup" className={"mr-4"}>
                                                <h5>{Cart}</h5>
                                            </ButtonGroup>
                                            <ButtonGroup aria-label="firstGroup">
                                                <Button variant="success" className={"btn-sm"} onClick={plus}>+</Button>
                                            </ButtonGroup>

                                        </ButtonToolbar>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <p>{Cart * price}</p>
                                    </Col>
                                </Row>

                            </Col>
                            <Col xs={12} md={2} className={"text-right"}>
                                <Button variant="danger" className={"btn-sm"} onClick={removeCart}>Remove</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </React.Fragment>
    );
};

export default Cart;