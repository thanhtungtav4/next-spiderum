import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tags from '../../components/module/base/Tags'
import PostService from '../../services/post_service';

const PostDetail = ({ posts }) => {
  return (
    <>
        <section className="m-content"> 
          <div className="m-content__inner">
            <div className="m-content__head"> 
              <Link href={`/${encodeURIComponent(posts?.category?.slug)}`}>
              <a className="m-content__category">{posts?.category?.name}</a>
              </Link>
              <h1 className="m-content__ttl" itemProp="name"> {posts?.title}</h1>
              <p className="m-content__description"> {posts?.description}</p>
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
                <div className="m-content__auth--name"> <a href="#">{posts?.users?.name}</a>
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
            {posts?.tags > 0? (
              <Tags tags={posts?.tags}/>
              ) : (
                <>
                </>
              )}
              <div className="m-tool">
                <div className="m-tool__ntl"> <a href="#"> <i className="gg-shape-triangle" /><span> <strong>21</strong></span></a><a href><i className="gg-eye" /><span>21000</span></a></div>
                <div className="m-tool__ntr"> <a href="#"><i> 
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={25} width={25}>
                        <path className="cls-1" d="M475,251.36c0-124.29-100.71-225-225-225S25,127.07,25,251.36c0,112.3,82.28,205.39,189.84,222.28V316.4H157.69v-65h57.15V201.79c0-56.39,33.57-87.53,85-87.53,24.62,0,50.37,4.39,50.37,4.39V174H321.82c-27.95,0-36.66,17.35-36.66,35.14v42.23h62.4l-10,65H285.16V473.64C392.72,456.75,475,363.66,475,251.36Z" fill="#3b5999" />
                      </svg></i></a><a href="#"><i className="gg-bookmark" /></a></div>
              </div>
            </div>
          </div>
          <div className="m-sticky">
            <div className="m-sticky__vote"> <a href="#">
                <svg width={19} height={17} viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.32031 3.98438L3.00781 12.5H13.6719L8.32031 3.98438ZM8.32031 0.820312L16.6797 14.1797H0L8.32031 0.820312Z" />
                </svg></a>
              <div className="m-sticky__count">88</div><a href="#">
                <svg width={19} height={17} viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.67969 11.0156L13.9922 2.5L3.32812 2.5L8.67969 11.0156ZM8.67969 14.1797L0.320311 0.820314L17 0.820312L8.67969 14.1797Z" />
                </svg></a>
            </div>
            <div className="m-sticky__auth"> <a href><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=100" alt="" /></a></div>
            <div className="m-sticky__post"><a href><i className="gg-bookmark" /></a>
              <div className="m-sticky__cmn"><a href>
                  <svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 0.25H2.25C0.984375 0.25 0 1.26953 0 2.5V12.625C0 13.8906 0.984375 14.875 2.25 14.875H5.625V17.8281C5.625 18.1094 5.80078 18.25 6.04688 18.25C6.11719 18.25 6.1875 18.25 6.29297 18.1797L10.6875 14.875H15.75C16.9805 14.875 18 13.8906 18 12.625V2.5C18 1.26953 16.9805 0.25 15.75 0.25ZM16.3125 12.625C16.3125 12.9414 16.0312 13.1875 15.75 13.1875H10.125L9.66797 13.5391L7.3125 15.2969V13.1875H2.25C1.93359 13.1875 1.6875 12.9414 1.6875 12.625V2.5C1.6875 2.21875 1.93359 1.9375 2.25 1.9375H15.75C16.0312 1.9375 16.3125 2.21875 16.3125 2.5V12.625Z" />
                  </svg></a></div>
              <div id="btn_share"><i className="gg-share" /></div>
            </div>
            <div className="m-sticky__share" id="toggle_share">
              <div className="m-sticky__share--item"><a href><i> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={25} width={25}>
                      <path d="M475,251.36c0-124.29-100.71-225-225-225S25,127.07,25,251.36c0,112.3,82.28,205.39,189.84,222.28V316.4H157.69v-65h57.15V201.79c0-56.39,33.57-87.53,85-87.53,24.62,0,50.37,4.39,50.37,4.39V174H321.82c-27.95,0-36.66,17.35-36.66,35.14v42.23h62.4l-10,65H285.16V473.64C392.72,456.75,475,363.66,475,251.36Z" fill="#3b5999" />
                    </svg></i></a></div>
              <div className="m-sticky__share--item"><a href><i>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={20} width={20}>
                      <path d="M135.42,135.42C72.38,135.42,20.83,187,20.83,250S72.38,364.58,135.42,364.58h41.66a20.83,20.83,0,1,0,.59-41.66H135.42a72.92,72.92,0,0,1,0-145.84h41.66a20.83,20.83,0,1,0,.59-41.66H135.42Zm187.5,0a20.83,20.83,0,1,0-.59,41.66h42.25a72.92,72.92,0,1,1,0,145.84H322.92a20.83,20.83,0,1,0-.59,41.66h42.25c63,0,114.59-51.54,114.59-114.58S427.62,135.42,364.58,135.42ZM125,229.17a20.83,20.83,0,1,0-.59,41.66H375a20.83,20.83,0,1,0,.59-41.66H125Z" fill="#666" />
                    </svg></i></a></div>
              <div className="m-sticky__share--item"><a href><i> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" height={25} width={25}>
                      <path d="M444.63,150.2c.31,4.35.31,8.7.31,13.05C444.94,296,343.9,449,159.21,449A283.74,283.74,0,0,1,5,403.9a206,206,0,0,0,24.25,1.25,201.12,201.12,0,0,0,124.68-42.91A100.61,100.61,0,0,1,60,292.6a127,127,0,0,0,19,1.55,106.09,106.09,0,0,0,26.43-3.42A100.44,100.44,0,0,1,24.9,192.17v-1.24a101.13,101.13,0,0,0,45.39,12.74A100.57,100.57,0,0,1,39.2,69.36,285.48,285.48,0,0,0,246.27,174.45a113,113,0,0,1-2.49-23,100.52,100.52,0,0,1,173.8-68.71,197.74,197.74,0,0,0,63.74-24.25,100.15,100.15,0,0,1-44.15,55.34A201.2,201.2,0,0,0,495,98.27a216,216,0,0,1-50.37,51.93Z" fill="#55acee" />
                    </svg></i></a></div>
              <div className="m-sticky__share--item"><a href><i> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px">
                      <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" />
                      <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z" />
                    </svg></i></a></div>
            </div>
          </div>
        </section>
        <h2 className="m-ttl2">Bài viết nổi bật khác</h2>
        <section className="m-news is_row">
          <div className="m-news__item">
            <div className="m-news__img"><img src="https://picsum.photos/500/400?random=92" alt="news" /></div>
            <div className="m-news__content">
              <div className="m-news__heading"> 
                <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                <div className="m-news__save"> <i className="gg-bookmark" /></div>
              </div><a href="#">
                <h2 className="m-title">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
              <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
            </div>
            <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                <div className="m-news__name" itemProp="author"> Anh Thư 
                  <div className="m-news__date">24 tháng 5</div>
                </div></a>
              <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21</span></a></div>
            </div>
          </div>
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
 return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/post/${params.slug}`)
  const posts = await res.json()
  if (Object.keys(posts).length != 0 ) {
    return {
      props: { posts, postsRelated }, // will be passed to the page component as props
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
