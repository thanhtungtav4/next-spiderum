import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { AuthContext } from "../../../services/AuthProvider"

function Bookmark({data, reload}) {
    const {loggedIn, userDetails, token, auth} = useContext(AuthContext);
    const [isBookmark, setIsBookmark] = useState(false);
    useEffect(async () => {
        if(loggedIn == true){
            const header ={
                "Authorization" : `Bearer ${token}`
            } 
            axios.defaults.withCredentials = true;
            const  dataToggle = await axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/bookmark/check', {
                headers: header,
                id: data,
            })
            .then(function (dataToggle) {
                if (dataToggle?.status == 200) {
                    setIsBookmark(dataToggle?.data);
                }
            })
            .catch(
                err =>console.log(err),
            );
        }
      }, [reload]);
    async function toggleBookMark(){
    if(loggedIn == true){
        const header ={
            "Authorization" : `Bearer ${token}`
        } 
        axios.defaults.withCredentials = true;
        const  dataToggle = await axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/bookmark/', {
            headers: header,
            id: data,
        })
        .then(function (dataToggle) {
            if (dataToggle?.status == 200) {
                setIsBookmark(dataToggle?.data);
            }
            if (dataToggle?.status == 401) {
                Router.push('/auth/login')  
            }
        })
        .catch(
            err =>console.log(err.status),
            err =>Router.push('/auth/login')  
        );
    }
  }

  if(isBookmark == true){
    return (
        <div onClick={toggleBookMark}> 
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="35px" height="35px"><path fill="#a3a3cd" d="M75,75V24c0-4.418-3.582-8-8-8H30c-2.761,0-5,2.239-5,5v55h49C74.552,76,75,75.552,75,75z"/><path fill="#666aad" d="M41,76V16H30c-2.76,0-5,2.24-5,5v55H41z"/><path fill="#fefdef" d="M72,79.5c0,1.959,1.252,3.882,3,4.5H29.5c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5H75C73.252,75.618,72,77.541,72,79.5z"/><path fill="#fcba7f" d="M48.5 13.5L48.5 44.5 40.5 40.5 32.5 44.5 32.5 13.5z"/><path fill="#1f212b" d="M75,85H29.5c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5H75c0.487,0,0.903,0.351,0.985,0.831c0.083,0.479-0.193,0.949-0.652,1.111c-1.33,0.471-2.333,2-2.333,3.558s1.003,3.087,2.333,3.558c0.459,0.162,0.734,0.632,0.652,1.111C75.903,84.649,75.487,85,75,85z M29.5,76c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h42.648C71.43,82.005,71,80.768,71,79.5s0.43-2.505,1.148-3.5H29.5z"/><path fill="#1f212b" d="M71.5 79h-40c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h40c.276 0 .5.224.5.5S71.776 79 71.5 79zM71.5 81h-31c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h31c.276 0 .5.224.5.5S71.776 81 71.5 81zM26 79.5h-2V21c0-3.309 2.691-6 6-6h2.5v2H30c-2.206 0-4 1.794-4 4V79.5zM76 75h-2V24c0-3.859-3.14-7-7-7H48.5v-2H67c4.962 0 9 4.037 9 9V75zM40.5 60c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5s.5.224.5.5v19C41 59.776 40.776 60 40.5 60zM40.5 65c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C41 64.776 40.776 65 40.5 65zM40.5 68c-.276 0-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5s.5.224.5.5v1C41 67.776 40.776 68 40.5 68z"/><path fill="#1f212b" d="M48.5,45c-0.077,0-0.153-0.018-0.224-0.053L40.5,41.059l-7.776,3.889c-0.156,0.076-0.339,0.067-0.486-0.021C32.09,44.834,32,44.673,32,44.5v-31c0-0.276,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.224,0.5,0.5v31c0,0.173-0.09,0.334-0.237,0.426C48.683,44.975,48.591,45,48.5,45z M40.5,40c0.077,0,0.153,0.018,0.224,0.053L48,43.691V14H33v29.691l7.276-3.639C40.347,40.018,40.423,40,40.5,40z"/></svg>
         </div>
      );
  }
  if(isBookmark == false){
    return (
        <div onClick={toggleBookMark}> 
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="35px" height="35px"><path d="M 32.5 13 A 0.50005 0.50005 0 0 0 32 13.5 L 32 15 L 30 15 C 26.698375 15 24 17.698375 24 21 L 24 79.5 C 24 82.525577 26.474423 85 29.5 85 L 75 85 A 1.0001 1.0001 0 0 0 75.333984 83.056641 C 74.059145 82.605925 73 81.032932 73 79.5 C 73 77.967068 74.059145 76.394075 75.333984 75.943359 A 1.0001 1.0001 0 0 0 76 74.931641 L 76 24 C 76 19.041484 71.958516 15 67 15 L 49 15 L 49 13.5 A 0.50005 0.50005 0 0 0 48.5 13 L 32.5 13 z M 33 14 L 48 14 L 48 43.691406 L 40.792969 40.087891 A 0.50005 0.50005 0 0 0 40.492188 39.992188 A 0.50005 0.50005 0 0 0 40.205078 40.089844 L 33 43.691406 L 33 14 z M 30 17 L 32 17 L 32 44.5 A 0.50005 0.50005 0 0 0 32.722656 44.947266 L 40 41.308594 L 40 59.5 A 0.50005 0.50005 0 1 0 41 59.5 L 41 41.308594 L 48.277344 44.947266 A 0.50005 0.50005 0 0 0 49 44.5 L 49 17 L 67 17 C 70.877484 17 74 20.122516 74 24 L 74 74 L 29.5 74 C 28.173347 74 26.95258 74.476278 26 75.265625 L 26 21 C 26 18.779625 27.779625 17 30 17 z M 40.492188 61.992188 A 0.50005 0.50005 0 0 0 40 62.5 L 40 64.5 A 0.50005 0.50005 0 1 0 41 64.5 L 41 62.5 A 0.50005 0.50005 0 0 0 40.492188 61.992188 z M 40.492188 65.992188 A 0.50005 0.50005 0 0 0 40 66.5 L 40 67.5 A 0.50005 0.50005 0 1 0 41 67.5 L 41 66.5 A 0.50005 0.50005 0 0 0 40.492188 65.992188 z M 29.5 76 L 72.162109 76 C 71.729126 76.597983 71.414601 77.279616 71.21875 78 L 31.5 78 A 0.50005 0.50005 0 1 0 31.5 79 L 71.042969 79 C 71.02802 79.166494 71 79.331265 71 79.5 C 71 79.668735 71.02802 79.833506 71.042969 80 L 40.5 80 A 0.50005 0.50005 0 1 0 40.5 81 L 71.21875 81 C 71.414601 81.720384 71.729126 82.402017 72.162109 83 L 29.5 83 C 27.555577 83 26 81.444423 26 79.5 C 26 77.555577 27.555577 76 29.5 76 z"/></svg>
         </div>
      );
  }
}

export default Bookmark;