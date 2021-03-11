import React, { Component } from 'react';
import axios from "axios";
import qs from 'qs';
// import PropTypes from 'prop-types';
// import AuthService from '../services/AuthService';
import { withRouter } from "react-router-dom";
import {UserContext} from '../context/currentUser';
// const fetch = require("node-fetch");

const API_URL = 'http://127.0.0.1:8000/account/api/login';

class Login extends Component {

    constructor(props) {    
        super(props);    
		this.state = {      
            email: null,
            password: null
        }; 
		this.submitHandler = this.submitHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

	static contextType = UserContext;

	submitHandler = async (event) => {
        event.preventDefault();
       
		let jwt_token;
		const data = qs.stringify({email: this.state.email, password: this.state.password});
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			};
		const response = await axios.post(
			API_URL,
			data,
			headers
		).catch(error => {
			console.log(error.response)
		});;
		
		if (typeof(response) !== 'undefined') {
			jwt_token= response.data.Token
			window.localStorage.setItem("user", JSON.stringify(response.data));
            this.context.setCurrentUser(jwt_token) 
            this.props.history.push('/');
		  }
	
        // if (typeof(jwt_token)!=='undefined') {
        //     this.context.setCurrentUser(jwt_token) 
        //     this.props.history.push('/');
        // }
    }

    handleInputChange(event) {
        // this.props.history.push('/');
        const target = event.target;
        let email;
        let password;
        if (target.name === "email") {
            email = target.value;
        } else if (target.name === "password") {
            password = target.value;
        }
        if (typeof(password) !== "undefined") {
            this.setState({
                password: password    
            });
        }
        if (typeof(email) !== "undefined") {
            this.setState({
                email: email
            });
        } 
    }

    render() {
      return (
		<body className="login-content">
			<div className="login-panel">
			<form onSubmit={this.submitHandler}>
                    <div className="title">XXX区块链后台管理平台<br/>管理员登录</div>
                    <input id="username" type="text" name="email" placeholder="type your username" 
                    onChange={this.handleInputChange}/>
                    <input id="password" type="password" name="password" placeholder="type your password" 
                    onChange={this.handleInputChange}/>
                    <div style={{height: "5px"}}></div>
                    <input type="checkbox"  value="type your password" /><label>Remeber the password</label>
                    <input type="submit" value="login"/>
                    <div className="error-info"></div>
                </form>
				<div className="error-info"></div>
			</div>
			</body>
            );
        }
  }

export default withRouter(Login);



