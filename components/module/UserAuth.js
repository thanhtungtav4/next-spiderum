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
        <Link href={`/user/${encodeURIComponent(userDetails?.username)}/bookmark`}> 
          <a className="m-auth__list pl_0"> 
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="27px" height="27px"><path d="M 32.5 13 A 0.50005 0.50005 0 0 0 32 13.5 L 32 15 L 30 15 C 26.698375 15 24 17.698375 24 21 L 24 79.5 C 24 82.525577 26.474423 85 29.5 85 L 75 85 A 1.0001 1.0001 0 0 0 75.333984 83.056641 C 74.059145 82.605925 73 81.032932 73 79.5 C 73 77.967068 74.059145 76.394075 75.333984 75.943359 A 1.0001 1.0001 0 0 0 76 74.931641 L 76 24 C 76 19.041484 71.958516 15 67 15 L 49 15 L 49 13.5 A 0.50005 0.50005 0 0 0 48.5 13 L 32.5 13 z M 33 14 L 48 14 L 48 43.691406 L 40.792969 40.087891 A 0.50005 0.50005 0 0 0 40.492188 39.992188 A 0.50005 0.50005 0 0 0 40.205078 40.089844 L 33 43.691406 L 33 14 z M 30 17 L 32 17 L 32 44.5 A 0.50005 0.50005 0 0 0 32.722656 44.947266 L 40 41.308594 L 40 59.5 A 0.50005 0.50005 0 1 0 41 59.5 L 41 41.308594 L 48.277344 44.947266 A 0.50005 0.50005 0 0 0 49 44.5 L 49 17 L 67 17 C 70.877484 17 74 20.122516 74 24 L 74 74 L 29.5 74 C 28.173347 74 26.95258 74.476278 26 75.265625 L 26 21 C 26 18.779625 27.779625 17 30 17 z M 40.492188 61.992188 A 0.50005 0.50005 0 0 0 40 62.5 L 40 64.5 A 0.50005 0.50005 0 1 0 41 64.5 L 41 62.5 A 0.50005 0.50005 0 0 0 40.492188 61.992188 z M 40.492188 65.992188 A 0.50005 0.50005 0 0 0 40 66.5 L 40 67.5 A 0.50005 0.50005 0 1 0 41 67.5 L 41 66.5 A 0.50005 0.50005 0 0 0 40.492188 65.992188 z M 29.5 76 L 72.162109 76 C 71.729126 76.597983 71.414601 77.279616 71.21875 78 L 31.5 78 A 0.50005 0.50005 0 1 0 31.5 79 L 71.042969 79 C 71.02802 79.166494 71 79.331265 71 79.5 C 71 79.668735 71.02802 79.833506 71.042969 80 L 40.5 80 A 0.50005 0.50005 0 1 0 40.5 81 L 71.21875 81 C 71.414601 81.720384 71.729126 82.402017 72.162109 83 L 29.5 83 C 27.555577 83 26 81.444423 26 79.5 C 26 77.555577 27.555577 76 29.5 76 z"></path></svg>
            <span>Bài viết đã lưu</span>
          </a>
        </Link>
        <Link href={`/user/${encodeURIComponent(userDetails?.username)}/like`}> 
          <a className="m-auth__list"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path></svg>
            <span>Bài viết yêu thích </span>
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