import React from 'react';
import {Button, Card, Col, ButtonGroup, ButtonToolbar, Row} from "react-bootstrap";
import actions from "../Context/Actions/actions";

const Product = (prop) => {
    let {id, productName, price, images, category, Cart} = prop.value;
    let setProducts = prop.setProducts
    const addToCart = () => {
        console.log({cart : 1 })
        setProducts({type: actions.UPDATE_CART, payload: {id: id, cart: 1}});
    }

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
        <Col xs={12} md={4} className={"mt-4"}>
            <Card>
                <Card.Header><img src={images} width={200} height={200}/></Card.Header>
                <Card.Body>
                    <h4>{category} - {productName}</h4>
                    <p>Price: {price}</p></Card.Body>
                <Card.Footer>
                    {Cart === 0 ?
                        <Button className={"btn btn-app-primary"} onClick={addToCart}>Add To Cart</Button>
                        :
                        <React.Fragment>
                            <Row>
                                <Col xs={8} md={8}>
                                    <ButtonToolbar className={"align-center"}>
                                        <ButtonGroup aria-label="firstGroup" className={"mr-4"}>
                                            <Button variant="secondary" onClick={minus}>-</Button>
                                        </ButtonGroup>
                                        <ButtonGroup aria-label="firstGroup" className={"mr-4"}>
                                            <h3>{Cart}</h3>
                                        </ButtonGroup>
                                        <ButtonGroup aria-label="firstGroup">
                                            <Button variant="success" onClick={plus}>+</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                                <Col xs={3} md={3}>
                                    <Button variant="danger" onClick={removeCart}>Remove</Button>
                                </Col>
                            </Row>


                        </React.Fragment>
                    }
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;