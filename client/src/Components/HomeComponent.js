import React, {useContext} from 'react';
import {UserContext} from "../Context/UserContext";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import HomePage from "./HomePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import {Container} from "react-bootstrap";
import ProductList from "./ProductList";
import CartList from "./CartList";

const HomeComponent = () => {
    return (

        <React.Fragment>
            <Router>
                <Header/>
                <Container fluid className={"main-app"}>

                    <Switch>
                        <Route exact path={"/"} component={ProductList}/>
                        <Route exact path={"/cart"} component={CartList}/>
                        <Route exact path={"/login"} component={HomePage}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Container>
                <Footer/>
            </Router>
        </React.Fragment>
    );
};

export default HomeComponent;