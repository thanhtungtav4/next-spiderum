import React from 'react';
function ItemRow({data}){
    console.log(data);
    return (
          <article className="m-news__item">
            <div className="m-news__img"><img itemProp="image" src={data?.image ? data?.image : 'https://picsum.photos/440/176'} layout="responsive" alt={data?.title} width={440} height={176} /></div>
            <div className="m-news__content">
              <div className="m-news__heading"> 
                <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                <div className="m-news__save"> <i className="gg-bookmark" /></div>
              </div><a href="/singer.html">
                <h2 className="m-title" itemProp="name">{data?.title}</h2></a>
              <div className="m-news__ext"> {data?.description}</div>
            </div>
            <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://picsum.photos/id/237/200/300" alt="auth" />
                <div className="m-news__name" itemProp="author"> Anh Thư 
                  <div className="m-news__date">24 tháng 5</div>
                </div></a>
              <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21</span></a></div>
            </div>
          </article>
    );
}
export default ItemRow;