import React, { useState , useEffect, useContext} from 'react'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Tags from '../../components/module/base/Tags'
import ItemRow from '../../components/module/base/ItemRow'
import Sticky from '../../components/module/base/Sticky'
import HeadMeta from '../../components/module/HeadMeta'
import { AuthContext } from "../../services/AuthProvider"
import Bookmark from "../../components/module/base/Bookmark"
import Heart from "../../components/module/base/Heart"
import {
  FacebookShareButton,
} from 'next-share';


const PostDetail = ({ posts }) => {
  const {loggedIn, userDetails, token, auth} = useContext(AuthContext);
  const router = useRouter()
  const [isHide, setIsHide] = useState("");
  const [scrollTop, setScrollTop] = useState(0);
  const [pageURL, setPageURL] = useState(0);
  useEffect(async () => {
    setPageURL(window.location.href);
    function onScroll() {
      let pageHeight = document.documentElement.scrollHeight;
      let currentPosition = window.pageYOffset; 
      if (pageHeight - currentPosition > 1300) {
        setIsHide("");
      } else {
        setIsHide("d-none");
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <HeadMeta 
        title={posts?.title} 
        image={process.env.NEXT_PUBLIC_REST_API + posts?.users?.image}
        url={pageURL}
        description={posts?.description}
        />
        <section className="m-content"> 
          <div className="m-content__inner">
            <div className="m-content__head"> 
              <Link href={`/${encodeURIComponent(posts?.category?.slug)}`}>
              <a className="m-content__category">{posts?.category?.name}</a>
              </Link>
              <h1 className="m-content__ttl" itemProp="name"> {posts?.title}</h1>
              <p className="m-content__description">{posts?.description}</p>
              <div className="m-content__auth">
              <Link href={`/user/${encodeURIComponent(posts?.users?.username)}`}>
                <a className="m-content__auth--img">
                  <Image 
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur" 
                    width="56px"
                    height="56px"
                    layout="responsive" 
                    itemProp="image" 
                    src={posts?.users?.image ? process.env.NEXT_PUBLIC_REST_API + posts?.users?.image : process.env.NEXT_PUBLIC_APP_IMG} 
                    blurDataURL={posts?.users?.image ? process.env.NEXT_PUBLIC_REST_API + posts?.users?.image : process.env.NEXT_PUBLIC_APP_IMG}
                    alt={posts?.users?.name}
                  />
                </a>
                </Link>
                <div className="m-content__auth--name"> 
                  <Link href={`/user/${encodeURIComponent(posts?.users?.username)}`}>
                  <a>{posts?.users?.name}</a>
                  </Link>
                  <p> {posts?.created_at} </p>
                </div>
              </div>
            </div>
            <div className="m-content__img"> 
              <Image objectFit="cover"
                     objectPosition="center"
                     placeholder="blur" 
                     width="780px"
                     height="500px"
                     layout="responsive" 
                     itemProp="image" 
                     src={posts?.image ? process.env.NEXT_PUBLIC_REST_API + posts?.image : process.env.NEXT_PUBLIC_APP_IMG} 
                     blurDataURL={posts?.image ? process.env.NEXT_PUBLIC_REST_API + posts?.image : process.env.NEXT_PUBLIC_APP_IMG}
                     alt={posts?.title} />
            </div>
            <div className="m-content__body" dangerouslySetInnerHTML={{
                __html: posts?.content
              }}>
              
            </div>
            <div className="m-content__footer"> 
            {posts?.tags ? (
              <Tags tags={posts?.tags}/>
              ) : (
                <>
                </>
              )}
              <div className="m-tool">
                <div className="m-tool__ntl">
                <Heart data={posts?.id} reload={isHide}/> 
                <Bookmark data={posts?.id} reload={isHide}/> 
                </div>
                <div className="m-tool__ntr"> 
                    <div className="align-items-end">
                      <FacebookShareButton url={pageURL}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={28} width={28}>
                          <path className="cls-1" d="M475,251.36c0-124.29-100.71-225-225-225S25,127.07,25,251.36c0,112.3,82.28,205.39,189.84,222.28V316.4H157.69v-65h57.15V201.79c0-56.39,33.57-87.53,85-87.53,24.62,0,50.37,4.39,50.37,4.39V174H321.82c-27.95,0-36.66,17.35-36.66,35.14v42.23h62.4l-10,65H285.16V473.64C392.72,456.75,475,363.66,475,251.36Z" fill="#3b5999" />
                        </svg>
                      </FacebookShareButton>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`m-sticky ${isHide}`}>
            <Sticky data={posts}/>
          </div>
        </section>
       
        <h2 className="m-ttl2">Bài viết nổi bật khác</h2>
        
        <section className="m-news is_row">
               {
                posts?.related_post.length > 0? (
                  posts?.related_post.map((data, index) => (
                    <ItemRow key={index} data={data}/>
                  ))
                ) : (
                <>
                </>
              )}
        </section>
    </>
  )
}

export const getServerSideProps = async (context) => {
  try {  
    const {params, query} = context
    const data = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/post/${params.slug}`)
    const posts = await data.json();
    if (Object.keys(posts).length != 0 ) {
      return {
        props: { 
          posts,
        }, // will be passed to the page component as props
      }
    }
    else{
      return {
        notFound: true,
      }
    }
    } catch (error) {
      return {
        notFound: true,
      }
    }
};

export default PostDetail
