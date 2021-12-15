import axios from 'axios'; 
import { serialize } from './helpers';

export default {
    getCategory: params => axios.get(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/category' + serialize(params)),
    getPost: params => axios.get(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/post' + serialize(params)),
    postLogin: params => axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/user/login' + serialize(params)),xsrfHeaderName: "X-XSRF-TOKEN",withCredentials: true, credentials: 'include',
    postCrawler: params => axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/crawler' + serialize(params)),xsrfHeaderName: "X-XSRF-TOKEN",withCredentials: true, credentials: 'include',
};
