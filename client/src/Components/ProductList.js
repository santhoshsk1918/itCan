import React, {useContext} from 'react';
import {Container, Row} from "react-bootstrap";
import {ProductContext} from "../Context/ProductContext";
import Product from "./Product";

const ProductList = () => {
    let {products, setProducts} = useContext(ProductContext);
    return (
        <Container>
            <Row>
                {products.map((item) => <Product key={item.id} value={item} setProducts={setProducts} />)}
            </Row>
        </Container>
    );
};

export default ProductList;