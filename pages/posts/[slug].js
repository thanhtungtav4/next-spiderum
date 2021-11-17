import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Tags from '../../components/module/base/Tags'
import ItemRow from '../../components/module/base/ItemRow';
import Sticky from '../../components/module/base/Sticky';

const PostDetail = ({ posts }) => {
  const router = useRouter()
  const is_url = router.pathname;
  return (
    <>
        <Head>
          <title>{posts?.title}</title>
          <meta name="title" content={posts?.title}></meta>
          <meta name="description" content={posts?.description}></meta>
          <meta property="og:url" content={is_url ? is_url : process.env.NEXT_PUBLIC_SHOP_URL} />
          <meta property="og:title" content={posts?.title} />
          <meta property="og:description" content={posts?.description} />
          <meta property="og:image" content={posts?.users?.image ? process.env.NEXT_PUBLIC_REST_API + posts?.users?.image : process.env.NEXT_PUBLIC_APP_IMG} />
          <meta property="twitter:url" content={is_url ? is_url : process.env.NEXT_PUBLIC_SHOP_URL} />
          <meta property="twitter:title" content={posts?.title} />
          <meta property="twitter:description" content={posts?.description} />
          <meta property="twitter:image" content={posts?.users?.image ? process.env.NEXT_PUBLIC_REST_API + posts?.users?.image : process.env.NEXT_PUBLIC_APP_IMG} />
        </Head>
        <section className="m-content"> 
          <div className="m-content__inner">
            <div className="m-content__head"> 
              <Link href={`/${encodeURIComponent(posts?.category?.slug)}`}>
              <a className="m-content__category">{posts?.category?.name}</a>
              </Link>
              <h1 className="m-content__ttl" itemProp="name"> {posts?.title}</h1>
              <p className="m-content__description">{posts?.description}</p>
              <div className="m-content__auth">
              <div className="m-content__auth--img">
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
                </div>
                <div className="m-content__auth--name"> 
                  <a>{posts?.users?.name}</a>
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
                <div className="m-tool__ntl"> <a> <i className="gg-shape-triangle" /><span> <strong>21</strong></span></a><a href><i className="gg-eye" /><span>21000</span></a></div>
                <div className="m-tool__ntr"> <a><i> 
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={25} width={25}>
                        <path className="cls-1" d="M475,251.36c0-124.29-100.71-225-225-225S25,127.07,25,251.36c0,112.3,82.28,205.39,189.84,222.28V316.4H157.69v-65h57.15V201.79c0-56.39,33.57-87.53,85-87.53,24.62,0,50.37,4.39,50.37,4.39V174H321.82c-27.95,0-36.66,17.35-36.66,35.14v42.23h62.4l-10,65H285.16V473.64C392.72,456.75,475,363.66,475,251.36Z" fill="#3b5999" />
                      </svg></i></a><a><i className="gg-bookmark" /></a></div>
              </div>
            </div>
          </div>
          <Sticky data={posts}/>
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

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/post/`)
  const posts = await res.json()
  const paths = posts.data.map((post) => ({
   params: { slug: post.slug.toString()},
 }))
 return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/post/${params.slug}`)
  const posts = await res.json()
  if (Object.keys(posts).length != 0 ) {
    return {
      props: { posts}, // will be passed to the page component as props
      revalidate: 5,
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
  
}



export default PostDetail
