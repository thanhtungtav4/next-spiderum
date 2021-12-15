import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

function ItemVertical({data}){
    return (
        <>
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
                    </div>
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
                      <div>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="27px" height="27px"><path d="M 32.5 13 A 0.50005 0.50005 0 0 0 32 13.5 L 32 15 L 30 15 C 26.698375 15 24 17.698375 24 21 L 24 79.5 C 24 82.525577 26.474423 85 29.5 85 L 75 85 A 1.0001 1.0001 0 0 0 75.333984 83.056641 C 74.059145 82.605925 73 81.032932 73 79.5 C 73 77.967068 74.059145 76.394075 75.333984 75.943359 A 1.0001 1.0001 0 0 0 76 74.931641 L 76 24 C 76 19.041484 71.958516 15 67 15 L 49 15 L 49 13.5 A 0.50005 0.50005 0 0 0 48.5 13 L 32.5 13 z M 33 14 L 48 14 L 48 43.691406 L 40.792969 40.087891 A 0.50005 0.50005 0 0 0 40.492188 39.992188 A 0.50005 0.50005 0 0 0 40.205078 40.089844 L 33 43.691406 L 33 14 z M 30 17 L 32 17 L 32 44.5 A 0.50005 0.50005 0 0 0 32.722656 44.947266 L 40 41.308594 L 40 59.5 A 0.50005 0.50005 0 1 0 41 59.5 L 41 41.308594 L 48.277344 44.947266 A 0.50005 0.50005 0 0 0 49 44.5 L 49 17 L 67 17 C 70.877484 17 74 20.122516 74 24 L 74 74 L 29.5 74 C 28.173347 74 26.95258 74.476278 26 75.265625 L 26 21 C 26 18.779625 27.779625 17 30 17 z M 40.492188 61.992188 A 0.50005 0.50005 0 0 0 40 62.5 L 40 64.5 A 0.50005 0.50005 0 1 0 41 64.5 L 41 62.5 A 0.50005 0.50005 0 0 0 40.492188 61.992188 z M 40.492188 65.992188 A 0.50005 0.50005 0 0 0 40 66.5 L 40 67.5 A 0.50005 0.50005 0 1 0 41 67.5 L 41 66.5 A 0.50005 0.50005 0 0 0 40.492188 65.992188 z M 29.5 76 L 72.162109 76 C 71.729126 76.597983 71.414601 77.279616 71.21875 78 L 31.5 78 A 0.50005 0.50005 0 1 0 31.5 79 L 71.042969 79 C 71.02802 79.166494 71 79.331265 71 79.5 C 71 79.668735 71.02802 79.833506 71.042969 80 L 40.5 80 A 0.50005 0.50005 0 1 0 40.5 81 L 71.21875 81 C 71.414601 81.720384 71.729126 82.402017 72.162109 83 L 29.5 83 C 27.555577 83 26 81.444423 26 79.5 C 26 77.555577 27.555577 76 29.5 76 z"/></svg>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
        </>
    );
}
export default ItemVertical;