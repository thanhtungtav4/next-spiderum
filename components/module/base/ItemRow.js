import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

function ItemRow({data}){
    return (
          <article className="m-news__item">
            <Link href={`/posts/${encodeURIComponent(data?.slug)}`}>
              <a className="m-news__img">
                <Image 
                  itemProp="image"
                  src={data?.image ? process.env.NEXT_PUBLIC_REST_API + data?.image : process.env.NEXT_PUBLIC_APP_IMG}
                  layout="fill" alt={data?.title} 
                  placeholder="blur" 
                  blurDataURL={data?.image ? process.env.NEXT_PUBLIC_REST_API + data?.image : process.env.NEXT_PUBLIC_APP_IMG}
                />
              </a>
            </Link>
            
            <div className="m-news__content">
              <div className="m-news__heading"> 
                <div className="m-news__cate">
                <Link href={`/${encodeURIComponent(data?.category?.slug)}`}> 
                  <a>
                    {data?.category?.name}
                  </a>
                  </Link>
                  <span>5 phút đọc </span></div>
                <div className="m-news__save"> <i className="gg-bookmark" /></div>
              </div>
              <Link href={`/posts/${encodeURIComponent(data?.slug)}`}>
                <a>
                  <h2 className="m-title" itemProp="name">{data?.title}</h2>
                </a>
              </Link>
              <Link href={`/posts/${encodeURIComponent(data?.slug)}`}>
                <a className="m-news__ext">{data?.description}
                </a>
              </Link>
              
            </div>
            
            <div className="m-news__info">
              <Link href={`/user/${encodeURIComponent(data?.users?.username)}`}>
               <a className="m-news__auth"> 
                <div className="image__auth">
                <Image 
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur" 
                  width="40px"
                  height="40px"
                  layout="responsive" 
                  itemProp="image" 
                  src={data?.users?.image ? process.env.NEXT_PUBLIC_REST_API + data?.users?.image : process.env.NEXT_PUBLIC_APP_IMG} 
                  blurDataURL={data?.users?.image ? process.env.NEXT_PUBLIC_REST_API + data?.users?.image : process.env.NEXT_PUBLIC_APP_IMG}
                  alt={data?.users?.name}
                />
                </div>
                <div className="m-news__name" itemProp="author"> {data?.users?.name ? data?.users?.name : process.env.NEXT_PUBLIC_USER_NAME}
                  <div className="m-news__date">{data?.created_at}</div>
                </div>
                </a>
              </Link>
              <div className="m-news__more"> 
                <a>
                  <i className="gg-shape-triangle">
                  </i><span>21</span>
                </a>
                <a>
                  <i className="gg-eye"/>
                  <span>21000</span>
                </a>
                <a>
                  <i className="gg-transcript" />
                  <span>21</span>
                </a>
              </div>
            </div>
          </article>
    );
}
export default ItemRow;