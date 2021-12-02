import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { AuthContext } from "../../../services/AuthProvider"

function Heart({data, reload}) {
    const {loggedIn, userDetails, token, auth} = useContext(AuthContext);
    const [isHeart, setIsHeart] = useState(false);
    const [isCount, setIsCount] = useState(0);
    useEffect(async () => {
        if(loggedIn == true){
            const header ={
                "Authorization" : `Bearer ${token}`
            } 
            axios.defaults.withCredentials = true;
            const  dataToggleHeart = await axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/like/check', {
                headers: header,
                id: data,
            })
            .then(function (dataToggleHeart) {
                if (dataToggleHeart?.status == 200) {
                    setIsCount(dataToggleHeart?.data?.count);
                    setIsHeart(dataToggleHeart?.data?.status);
                }
            })
            .catch(
                err =>console.log(err),
            );
        }
      }, [reload]);
    async function toggleHeart(){
    if(loggedIn == true){
        const header ={
            "Authorization" : `Bearer ${token}`
        } 
        axios.defaults.withCredentials = true;
        const  dataToggleHeart = await axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/like/', {
            headers: header,
            id: data,
        })
        .then(function (dataToggleHeart) {
            if (dataToggleHeart?.status == 200) {
                setIsCount(dataToggleHeart?.data?.count);
                setIsHeart(dataToggleHeart?.data?.status);
            }
            if (dataToggleHeart?.status == 401) {
                Router.push('/auth/login')  
            }
        })
        .catch(
            err =>console.log(err.status),
            err =>Router.push('/auth/login')  
        );
    }
  }

  if(isHeart == true){
    return (
        <div onClick={toggleHeart}>         
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" aria-hidden="true" fill='#d52525'>
                <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
            </svg>
            <span> <strong className="numheart">{isCount}</strong></span>
         </div>
      );
  }
  if(isHeart == false){
    return (
        <div onClick={toggleHeart}> 
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
            </svg>
            <span> <strong className="numheart">{isCount}</strong></span>
        </div>
      );
  }
}
export default Heart;