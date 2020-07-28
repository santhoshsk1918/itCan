import React, {useEffect, useReducer} from 'react';
import productReducer from './Reducers/productReducer'
import productJson from "../Assets/products.json"

export const ProductContext = React.createContext(productJson);

const ProductContextProvider = (props) => {
    let initialState = JSON.parse(localStorage.getItem("product")) || productJson;

    const [products, setProducts] = useReducer(productReducer, initialState);

    return (

        <ProductContext.Provider value={{products, setProducts}} >
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;