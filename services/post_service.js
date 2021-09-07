import axios from 'axios'; 
import { serialize } from './helpers';

export default {
    getPost: params => axios.get(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/post' + serialize(params))
};
