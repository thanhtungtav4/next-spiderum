
import React, {SyntheticEvent, useState} from 'react';
import Head from "next/head";
import {useRouter} from "next/router";
import PostService from '../../services/post_service';
import axios from 'axios';

const Login = () => {
    let [ username, setUsername ] = useState('');
    let [ password, setPassword ] = useState('');

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        const headers = {
            "Content-Type" : `multipart/form-data`,
            credentials: 'same-origin',
            Accept: 'application/json',
        };
        axios.defaults.withCredentials = true;
        const response = await PostService.postLogin({
                email: username,
                password : password
          }).then(res => {
            if (res?.status === 200) {
             console.log(res)
            }
          })
          .catch(err =>console.log(err));
    }
    return (
        <div>
        <div>
            <form onSubmit={ ( e ) => handleSubmit( e ) } action="" method="post">
                <div>
                    <label htmlFor="">Username</label><br />
                    <input onInput={ ( e ) => setUsername( e.target.value ) } type="text" id="username" value={ username } />
                </div>
                <div>
                    <label htmlFor="">Password</label><br />
                    <input onInput={ ( e ) => setPassword( e.target.value ) } type="password" id="password" value={ password } />
                </div>
                <div>
                    <input type="submit" value="Login" />
                    {/* <button onClick={get_user} type="button" >Get User</button> */}
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;