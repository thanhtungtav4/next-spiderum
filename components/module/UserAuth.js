import React, { useState, useContext} from 'react';
import { AuthContext } from "../../services/AuthProvider";
import Image from 'next/image';
import Link from 'next/link';
import styles  from "../../styles/Home.module.css";

function UserAuth() {
  const {loggedIn, userDetails, token} = useContext(AuthContext);
  if (loggedIn == true) {
    return(
      <>
       <li>
        <div className={styles.auth}>
        <Image 
            objectFit="cover"
            objectPosition="center"
            placeholder="blur" 
            width="40px"
            height="40px"
            layout="responsive" 
            itemProp="image" 
            src={userDetails?.image ? process.env.NEXT_PUBLIC_REST_API + userDetails?.image : process.env.NEXT_PUBLIC_APP_IMG} 
            blurDataURL={userDetails?.image ? process.env.NEXT_PUBLIC_REST_API + userDetails?.image : process.env.NEXT_PUBLIC_APP_IMG}
            alt={userDetails?.name}
          />
        </div>
      </li>
      </>
    )
  }
  return (
    <>
    <li className={styles.btnLogin}>
      <Link href="/auth/login">Login</Link>
    </li>
    </>
  );
}
export default UserAuth;