import React, {createContext, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
const jwt = require("jsonwebtoken");
// import AuthService from '../services/AuthService'

export const UserContext = createContext();

const API_URL = 'http://127.0.0.1:8000/account/api/login';

function UserContextProvider(props){

    const [currentUser, setCurrentUser] = useState();

    const history = useHistory();

    function getCurrentUser() {
        const a = JSON.parse(window.localStorage.getItem('user'));
        if (!a) {
            history.push("/login");
        } else {
            try {
                jwt.verify(a.Token, "anystring");
                return JSON.parse(window.localStorage.getItem('user'));
              } catch (e) {
                console.error(e);
                history.push("/login");
              }
        }
        
    }


    
    function logout() {
        window.localStorage.removeItem("user");
    }

    
 

return (
    <UserContext.Provider value={{...props, logout, getCurrentUser, currentUser, setCurrentUser}}>
        {props.children}
    </UserContext.Provider>
)}

export default UserContextProvider;