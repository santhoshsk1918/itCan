import React from 'react';
import UserContextProvider from "./Context/UserContext";
import HomeComponent from "./Components/HomeComponent";
import ProductContextProvider from "./Context/ProductContext";

function App() {
    return (
        <React.Fragment>
            <UserContextProvider>
                <ProductContextProvider>
                    <HomeComponent />
                </ProductContextProvider>
            </UserContextProvider>
        </React.Fragment>
    );
}

export default App;
