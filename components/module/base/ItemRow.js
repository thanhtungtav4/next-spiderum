import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

function ItemRow({data}){
    return (
          <article className="m-news__item">
            <Link href="/about">
              <a className="m-news__img">
                <Image itemProp="image" src={data?.image ? process.env.NEXT_PUBLIC_REST_API + data?.image : 'https://picsum.photos/440/176'} layout="fill" alt={data?.title} />
              </a>
            </Link>
            
            <div className="m-news__content">
              <div className="m-news__heading"> 
                <div className="m-news__cate">
                <Link href="/cate"> 
                  <a>
                    {data?.category?.name}
                  </a>
                  </Link>
                  <span>5 phút đọc </span></div>
                <div className="m-news__save"> <i className="gg-bookmark" /></div>
              </div>
              <Link href="/about">
                <a>
                  <h2 className="m-title" itemProp="name">{data?.title}</h2>
                </a>
              </Link>
              <Link href="/about">
                <div className="m-news__ext">{data?.description}</div>
              </Link>
              
            </div>
            
            <div className="m-news__info">
               <a className="m-news__auth" href="#"> 
                  <img src="https://picsum.photos/id/237/200/300" alt="auth" />
                  <div className="m-news__name" itemProp="author"> Anh Thư 
                    <div className="m-news__date">{data?.created_at}</div>
                  </div>
                </a>
              <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21</span></a></div>
            </div>
          </article>
    );
}
export default ItemRow;