import React, { useState, useEffect, useContext } from "react"
import Image from 'next/image'
import Router from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import { AuthContext } from "../../../services/AuthProvider";
import ItemVertical from '../../../components/module/base/ItemVertical'

function Like() {
  const {loggedIn, userDetails, token, auth} = useContext(AuthContext);
  const [ LikePost, setLikePost ] = useState([]);
  useEffect(async () => {
    if(token){
        const header ={
            "Authorization" : `Bearer ${token}`
        } 
        const dataUser = await axios.get(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/like', {
            headers: header,
          })
          .then(function (dataUser) {
            if (dataUser?.status === 200) {
               setLikePost(dataUser.data);
            }
          })
          .catch(
            err =>console.log(err),
        );
      }
      else{
        Router.push('/auth/login')
      }
    },[token]);
    //console.log(LikePost?.data);
  return (
      <>
    <section className="c-banner">
        <div className="c-banner__inner"> 
        <Image objectFit="cover"
                    objectPosition="center"
                    placeholder="blur" 
                    width="1200px"
                    height="350px"
                    layout="responsive" 
                    itemProp="image" 
                    src={userDetails?.banner ? process.env.NEXT_PUBLIC_REST_API + userDetails?.banner : process.env.NEXT_PUBLIC_APP_IMG} 
                    blurDataURL={userDetails?.banner ? process.env.NEXT_PUBLIC_REST_API + userDetails?.banner : process.env.NEXT_PUBLIC_APP_IMG}
                    alt={userDetails?.name} />
        </div>
    </section>
            <div className="row">
            <div className="col-3 widget__user">     
              <div className="widget">
                <div className="widget-body">
                  <div className="widget__avata"> 
                    <Image objectFit="cover"
                          objectPosition="center"
                          placeholder="blur" 
                          width="200px"
                          height="200px"
                          layout="responsive" 
                          itemProp="image" 
                          src={userDetails?.image ? process.env.NEXT_PUBLIC_REST_API + userDetails?.image : process.env.NEXT_PUBLIC_APP_IMG} 
                          blurDataURL={userDetails?.image ? process.env.NEXT_PUBLIC_REST_API + userDetails?.image : process.env.NEXT_PUBLIC_APP_IMG}
                          alt={userDetails?.name} />
                  </div>
                  <h1 className="widget__name">{userDetails?.name}</h1>
                  <p className="widget__username">@{userDetails?.username}</p>
                  <p className="widget__userbio">{userDetails?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="tab"> 
                <h2 className="m-ttl2">Bài Viết Yêu Thích</h2>
              </div>
              <div className="m-news is_vertical">
                {

                LikePost?.data?.map((post, index) => (
                    <>
                    <article className="m-news__item" key={index}>
                    <Link href={`/posts/${encodeURIComponent(post?.articles?.slug)}`}>
                        <a className="m-news__img">
                        <Image 
                            itemProp="image" 
                            src={post?.articles?.image ? process.env.NEXT_PUBLIC_REST_API + post?.articles?.image : process.env.NEXT_PUBLIC_APP_IMG} 
                            layout="fill" alt={post?.articles?.title} 
                            placeholder="blur" 
                            blurDataURL={post?.articles?.image ? process.env.NEXT_PUBLIC_REST_API + post?.articles?.image : process.env.NEXT_PUBLIC_APP_IMG}
                        />
                        </a>
                        </Link>  
                        <div className="m-news__content">
                        <div className="m-news__heading"> 
                            <div className="m-news__cate"> 
                            <Link href={`/${encodeURIComponent(post?.articles?.category?.slug)}`}> 
                            <a>
                                {post?.articles?.category?.name}
                            </a>
                            </Link>
                            </div>
                        </div>
                        <Link href={`/posts/${encodeURIComponent(post?.articles?.slug)}`}>
                            <a>
                            <h2 className="m-title" itemProp="name">{post?.articles?.title}</h2>
                            </a>
                        </Link>
                        <Link href={`/posts/${encodeURIComponent(post?.articles?.slug)}`}>
                            <a className="m-news__ext">{post?.articles?.description}
                            </a>
                        </Link>
                        <div className="m-news__info">
                            <div className="m-news__more"> 
                                <p>{post?.articles?.created_at}</p>
                            </div>
                        </div>
                        </div>
                    </article>
                    </>
                    //<ItemVertical key={index} data={post}/>
                  ))
                }
              </div>
            </div>
          </div>
          </>
  );
}
export default Like;