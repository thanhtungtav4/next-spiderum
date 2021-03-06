
import React, {SyntheticEvent, useState} from 'react';
import Head from "next/head";
import {useRouter} from "next/router";
import PostService from '../../services/post_service';
import axios from 'axios';
import Link from 'next/link';
import styles  from "../../styles/Login.module.css";

const Register = () => {
    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loginToken, setloginToken] = useState('');
    const [message, setMessage] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        totail: '',
    });
    const router = useRouter();

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        const response = await axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/user/register', {
            name: name,
            username: username,
            email: email,
            password : password,
          }, { 
              withCredentials: true, 
              credentials: 'include'
         })
          .then(function (response) {
            if (response?.status === 200) {
                setMessage({
                    totail : response.data.success,
                });
                // redirect 1 second after doSomething() finishes.
                window.setTimeout(() => {
                    router.push('/auth/login');
                }, 1000)
            };
          })
          .catch((error) => {
            // Error 😨
            if (error.response) {
                setMessage({
                        name : error.response.data.name,
                        username : error.response.data.username,
                        email : error.response.data.email,
                        password : error.response.data.password
                    });
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
          });
     }
    return (
        <div className={styles.auth}>
           
            <form onSubmit={ ( e ) => handleSubmit( e ) } method="post">
                <a className={styles.logo}>
                    <img src="https://auth.spiderum.com/assets-auth/images/spiderum-logo.png"/>
                </a>
                <br/>
                <label htmlFor="">* Full name</label><br />
                <input onInput={ ( e ) => setName( e.target.value ) }  type="text" id="name" value={ name } />
                <p className={styles.err}>{message?.name}</p>
                <br/>
                <label htmlFor="">* Username</label>
                <br/>
                <input onInput={ ( e ) => setUsername( e.target.value ) }  type="text" id="username" value={ username } />
                <p className={styles.err}>{message?.username}</p>
                <label htmlFor="">* Email</label>
                <br/>
                <input onInput={ ( e ) => setEmail( e.target.value ) }  type="email" id="email" value={ email } />
                <p className={styles.err}>{message?.email}</p>
                <label htmlFor="">* Password</label>
                <br/>
                <input onInput={ ( e ) => setPassword( e.target.value ) } type="password" id="password" value={ password } />
                <p className={styles.err}>{message?.password}</p>
                <input type="submit" value="Đăng Ký" className={styles.btn}/>
                {message?.totail != 0 &&
                   <p className={styles.sus}>{message?.totail}</p>
                }
                <p>Bạn đã có tài khoản? <Link href="/auth/login">Đăng Nhập</Link></p> 
            </form>
        </div>
    );
};

export default Register;