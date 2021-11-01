import axios from 'axios'; 
import { serialize } from './helpers';

export default {
    getPost: params => axios.get(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/post' + serialize(params)),
    postLogin: params => axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/user/login' + serialize(params)),xsrfHeaderName: "X-XSRF-TOKEN",withCredentials: true
};
