import React, { useState, useContext} from 'react';
import { AuthContext } from "../../services/AuthProvider";
import Image from 'next/image';
import Link from 'next/link';
import styles  from "../../styles/Home.module.css";

function UserAuth() {
  const {loggedIn, userDetails, token, auth} = useContext(AuthContext);
  const [isauth, setIsauth] = useState("d-none");
  function toggleAuth() {
    setIsauth(isauth === "d-none" ? "" : "d-none");
  }
  if (loggedIn == true) {
    return(
      <>
      <li className="m-auth"  onClick={toggleAuth} >
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
        <div className={`m-auth__box ${isauth}`}>
        <Link href={`/user/${encodeURIComponent(userDetails?.username)}`}> 
          <a className="m-auth__user"> 
            <div className="m-auth__img">
              <Image 
                objectFit="cover"
                objectPosition="center"
                placeholder="blur" 
                width="150px"
                height="150px"
                layout="responsive" 
                itemProp="image" 
                src={userDetails?.image ? process.env.NEXT_PUBLIC_REST_API + userDetails?.image : process.env.NEXT_PUBLIC_APP_IMG} 
                blurDataURL={userDetails?.image ? process.env.NEXT_PUBLIC_REST_API + userDetails?.image : process.env.NEXT_PUBLIC_APP_IMG}
                alt={userDetails?.name}
              />
            </div>
            <div className="m-auth__content"> 
              <p className="displayname">{userDetails?.name}</p>
              <p className="username">{userDetails?.email}</p>
            </div>
          </a>
        </Link>
        <Link href={`/user/${encodeURIComponent(userDetails?.username)}`}> 
          <a className="m-auth__list"> 
            <svg id="Layer_1" _ngcontent-serverapp-c42 data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={18} width={18}>
              <path className="cls-1" _ngcontent-serverapp-c42 d="M109.38,62.5A47.11,47.11,0,0,0,62.5,109.38V390.63a47.11,47.11,0,0,0,46.88,46.87H307.29a15.62,15.62,0,0,0,11-4.58l.16-.16L432.92,318.34a15.62,15.62,0,0,0,4.58-11V109.38A47.11,47.11,0,0,0,390.63,62.5Zm0,31.25H390.63a15.39,15.39,0,0,1,15.62,15.63V291.67H338.54a47.11,47.11,0,0,0-46.87,46.87v67.71H109.38a15.39,15.39,0,0,1-15.63-15.62V109.38A15.4,15.4,0,0,1,109.38,93.75Zm52.08,52.06a15.63,15.63,0,1,0-.44,31.25H338.54a15.63,15.63,0,1,0,.44-31.25H161.46Zm0,72.92A15.63,15.63,0,1,0,161,250H296.88a15.63,15.63,0,0,0,.44-31.25H161.46ZM338.54,322.92h45.62l-61.24,61.24V338.54A15.38,15.38,0,0,1,338.54,322.92Z" />
            </svg>
            <span>Bài viết của bạn </span>
          </a>
        </Link>
            <div className="m-auth__list"  onClick={auth.logout} >
              <svg id="Layer_1" _ngcontent-serverapp-c42 width={16} height={16} viewBox="0 0 16 16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
                <path className="cls-1" _ngcontent-serverapp-c42 d="M14.4399 8.8501H5.88989C5.33989 8.8501 4.88989 8.4001 4.88989 7.8501C4.88989 7.3001 5.33989 6.8501 5.88989 6.8501H14.4399C14.9899 6.8501 15.4399 7.3001 15.4399 7.8501C15.4399 8.4001 14.9999 8.8501 14.4399 8.8501Z" />
                <path className="cls-1" _ngcontent-serverapp-c42 d="M10.5299 13.1C10.2799 13.1 10.0299 13.01 9.83992 12.82C9.43992 12.44 9.42992 11.8 9.80992 11.4L13.1399 7.91996L9.82992 4.60996C9.43992 4.21996 9.43992 3.57996 9.82992 3.18996C10.2199 2.79996 10.8599 2.79996 11.2499 3.18996L15.0699 7.00996C15.5599 7.48996 15.5699 8.29996 15.0899 8.79996L11.2699 12.79C11.0599 12.99 10.7999 13.1 10.5299 13.1ZM13.6399 8.41996C13.6399 8.41996 13.6399 8.42996 13.6399 8.41996V8.41996Z" />
                <path className="cls-1" _ngcontent-serverapp-c42 d="M5.79 16H1C0.45 16 0 15.55 0 15V1C0 0.45 0.45 0 1 0H5.79C6.34 0 6.79 0.45 6.79 1C6.79 1.55 6.34 2 5.79 2H2V13.99H5.78C6.33 13.99 6.78 14.44 6.78 14.99C6.79 15.55 6.34 16 5.79 16Z" />
              </svg>
              <span>Đăng xuất</span>
            </div>
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