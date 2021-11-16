
import React, {SyntheticEvent, useState, useContext} from 'react';
import Head from "next/head";
import {useRouter} from "next/router";
import PostService from '../../services/post_service';
import axios from 'axios';
import Link from 'next/link';
import { AuthContext } from "../../services/AuthProvider";
import styles  from "../../styles/Login.module.css";

const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loginToken, setloginToken] = useState('');
    const [message, setMessage] = useState({
        totail: null,
        success: null
    });
    const {auth, loggedIn} = useContext(AuthContext);
    const router = useRouter();

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        const response = await axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/user/login', {
            email: username,
            password : password,
          }, { 
              withCredentials: true, 
              credentials: 'include'
         })
          .then(function (response) {
            if (response?.status === 200) {
                setloginToken(response.data.access_token)
                setMessage(response.data)
                localStorage.setItem('token', response.data.access_token);
                auth.login();
                window.setTimeout(() => {
                    router.push('/');
                }, 1000)
            };
          })
          .catch((error) => {
            // Error 😨
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response)
                setMessage({
                        // email : error.response.data.email,
                        totail : error.response.data.message,
                        success: error.response.data.success
                    });

            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
          });
     }
     const get_user = async () =>{
        if(loginToken){
            const header ={
                "Authorization" : `Bearer ${loginToken}`
            } 
            const dataUser = await axios.get(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/user', {
                headers: header,
              })
              .then(function (dataUser) {
                if (dataUser?.status === 200) {
                    console.log(dataUser.data)
                }
              })
              .catch(
                err =>console.log(err),
                setMessage('Email hoặc mật khẩu không hợp lệ')
            );
        }
    }
    return (
        <div className={styles.auth}>
           
            <form onSubmit={ ( e ) => handleSubmit( e ) } method="post">
                <a className={styles.logo}>
                    <img src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png"/>
                </a>
                <br/>
                <label htmlFor="">* Email :</label><br />
                <input onInput={ ( e ) => setUsername( e.target.value ) }  type="email" id="username" value={ username } />
                <p className={styles.err}>{message?.email}</p>
                <label htmlFor="">* Password :</label><br />
                <input onInput={ ( e ) => setPassword( e.target.value ) } type="password" id="password" value={ password } />
                <input type="submit" value="Login" className={styles.btn}/>
                <p className={styles.err}>{message?.totail}</p>
                {message.success != null &&
                   <p className={styles.sus}>{message?.success}</p>
                }
                <p>Không có tài khoản? <Link href="/auth/register">Đăng ký ngay</Link></p>
            </form>
        </div>
    );
};

export default Login;