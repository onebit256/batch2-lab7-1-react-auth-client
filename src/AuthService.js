import axios from "axios";
import qs from 'qs';
import config from '../config';

const API_URL = config.API_URL;
const dd =0;

class AuthService {

  async login(email, password) {
    let jwt_token;
    const data = qs.stringify({email, password});
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
        localStorage.setItem("user", JSON.stringify(response.data));
      }

    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
      
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
