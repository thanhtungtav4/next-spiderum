import { useState, useEffect, createContext } from "react";
import axios from 'axios';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ userDetails, setUserDetails ] = useState([]);
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    useEffect(async () =>{
        if(token){
          const header ={
              "Authorization" : `Bearer ${token}`
          } 
          const dataUser = await axios.get(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/user', {
              headers: header,
            })
            .then(function (dataUser) {
              if (dataUser?.status === 200) {
                 // console.log(dataUser.data);
                 setUserDetails(dataUser.data);
                 setLoggedIn(true);
              }
            })
            .catch(
              err =>console.log(err),
              // err =>setLoggedIn(false),
              // err => localStorage.removeItem('token'),
          );
        }
        else{
            setLoggedIn(false),
            localStorage.removeItem('token')
        }
      }, [token]);
      const logout = value => {
          setLoggedIn(false);
          console.log('haha');
      }
      // const login = value => {
      //   setLoggedIn(true);
      // }
    const contextValue = {
        token,
        loggedIn,
        userDetails,
        auth: {
          logout,
        }
    };

    return (
        <AuthContext.Provider value={ contextValue }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
