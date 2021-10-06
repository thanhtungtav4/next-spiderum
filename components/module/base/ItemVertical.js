import React from 'react';
import Image from 'next/image'

function ItemVertical({data}){
    return (
        <>
         <article className="m-news__item">
                <div className="m-news__img"><Image itemProp="image" src={data?.image ? process.env.NEXT_PUBLIC_REST_API + data?.image : 'https://picsum.photos/440/176'} layout="fill" alt={data?.title}/></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">{data?.category?.name}</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="/singer.html">
                    <h2 className="m-title" itemProp="name">{data?.title}</h2></a>
                  <div className="m-news__ext">{data?.description}</div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://picsum.photos/id/227/200/300" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">{data?.created_at}</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21      </span></a></div>
                  </div>
                </div>
              </article>
        </>
    );
}
export default ItemVertical;