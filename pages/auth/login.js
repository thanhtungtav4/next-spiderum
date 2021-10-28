
import React, {SyntheticEvent, useState} from 'react';
import Head from "next/head";
import axios from 'axios';
import {useRouter} from "next/router";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    let login_token = null;

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        const headers = {
            "Content-Type" : `multipart/form-data`
        };

        let data = new FormData();
        data.append( 'username', username );
        data.append( 'password', password );

        let result = await axios( {
            method:'post',
            url: 'login-verify',
            baseURL: API_URL,
            data: data,
            headers: headers,
        } );

        let response = result.data;

        if( response['success'] ){
            console.log("Login Successful");
            login_token = response['token'];
        } else {
            console.log("Failed to Login");
        }

    }
    
    const submit = async (SyntheticEvent) => {
        e.preventDefault();
        console.log(e);
        // await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/user/login`, {
        //     credentials: 'same-origin',
        //     method: 'POST',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json',
        //       credentials: 'include',
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password
        //     })
        //   })

        // await router.push('/');
    }
    return (
        <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input type="email" className="form-control" placeholder="Email" required
               onChange={e => setEmail(e.target.value)}
        />

        <input type="password" className="form-control" placeholder="Password" required
               onChange={e => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
    );
};

export default Login;