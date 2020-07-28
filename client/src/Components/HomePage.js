import React, {useContext, useEffect, useState} from 'react';
import {Col, Row, Card, Button, Image} from 'react-bootstrap';
import storeImg from "../Assets/Images/myshop.png"
import InputElement from "./Common/InputElement";
import {GoogleLogin} from "react-google-login";
import axios from 'axios'
import actions from "../Context/Actions/actions";
import {UserContext} from "../Context/UserContext";

const HomePage = (prop) => {
    // eslint-disable-next-line
    let {loggedInUser, setLoggedInUser} = useContext(UserContext);
    let [login, setLogin] = useState({userName: "", password: "", userNameError: "", passwordError: "", name: "", nameError: "", isRegister: false})
    const clientID = "408275971342-gvk5hn6m7gqpqc5gmktootdaetrb225c.apps.googleusercontent.com"
    let [user, setUser] = useState({username: "", name: "", provider: "", providerId: "", password: ""})

    const googleSuccessLogin = (response) => {
        setUser({
            username: response.profileObj.email,
            name: response.profileObj.name,
            provider: "google",
            providerId: response.profileObj.googleId,
            password: ""
        });
    }



    useEffect(() => {
        if(user.username !== ""){
            saveNewUser();
        }
        return () => {
            console.log("Un mounting");
        }
        // eslint-disable-next-line
    }, [user])


    const saveNewUser = () => {
        axios.post("/users/signup", user)
            .then((resp) => {
                console.log(resp.data);
                setLoggedInUser({type: actions.LOGIN_USER, payload: resp.data})
                prop.history.push("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const googleErrorLogin = (response) => {
        console.log(response);
        window.alert("Some thing went wrong Please try again");
    }


    const loginDetailsChanged = (type, e) => {
        e.persist();
        console.log(type);
        if (type === "userName") {
            setLogin((prevState) => {
                return {
                    ...prevState, userName: e.target.value
                }
            })
        } else if (type === "name"){
            setLogin((prevState) => {
                return {
                    ...prevState, name: e.target.value
                }
            })
        }else {
            setLogin((prevState) => {
                return {
                    ...prevState, password: e.target.value
                }
            })
        }
    }

    return (
        <React.Fragment>
            <Row>
                <Col xs={12} md={7} sm={12} style={{"textAlign": "center"}}>

                    <Row className={"mt-5"}>
                        <Col xs={12} md={12}>
                            <Image src={storeImg} rounded style={{"maxWidth": "80%"}}/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={5} sm={12} className={"mt-5 text-center"} >
                    <GoogleLogin clientId={clientID} buttonText="Sign in with Google" onSuccess={googleSuccessLogin} onFailure={googleErrorLogin} cookiePolicy={'single_host_origin'} />
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default HomePage;