import React, { useState, useEffect } from "react"
import HeadMeta from '../../components/module/HeadMeta'
import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import ItemVertical from '../../components/module/base/ItemVertical'

export default function CategoryPage({categorys}) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const Background = categorys?.image ? process.env.NEXT_PUBLIC_REST_API + categorys?.image : process.env.NEXT_PUBLIC_APP_IMG
  // Triggers fetch for new page
  const handlePagination = page => {
  const path = router.pathname
  const query = router.query
  query.page = page.selected + 1
  router.push({
    pathname: path,
    query: query,
  })
  }
  return(
      <>
      <HeadMeta 
      title={categorys?.name}
      image={process.env.NEXT_PUBLIC_REST_API + categorys?.image}
      url={process.env.NEXT_PUBLIC_SHOP_URL + "/" + categorys?.slug}
      />
      <section className="c-banner">
          <div className="c-banner__inner"> <img src="https://picsum.photos/1200/500?random=11" alt="" /></div>
        </section>
        <div className="row">
          <div className="col-3 widget__user">     
            <div className="widget">
              <div className="widget-body">
                <div className="widget__avata"> <img src="https://picsum.photos/200/200?random=11" alt="" /></div>
                <h1 className="widget__name">Nguyễn Thanh tùng</h1>
                <p className="widget__username">@Tungnt</p>
                <p className="widget__userbio">Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... Nếu muốn ủng hộ tác giả, các bạn có thể làm theo hướng dẫn sau.              </p>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="tab"> 
              <h2 className="m-ttl2">DÀNH CHO BẠN</h2>
            </div>
            <div className="m-news is_vertical">
              <article className="m-news__item">
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=11" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21      </span></a></div>
                  </div>
                </div>
              </article>
              <article className="m-news__item">
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=13" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21                                    </span></a></div>
                  </div>
                </div>
              </article>
              <article className="m-news__item">
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=14" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21      </span></a></div>
                  </div>
                </div>
              </article>
              <article className="m-news__item">
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=16" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21 </span>
                        <article className="m-news__item" /></a></div>
                  </div>
                </div>
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=16" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21   </span></a></div>
                  </div>
                </div>
              </article>
              <article className="m-news__item">
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=121" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21          </span></a></div>
                  </div>
                </div>
              </article>
              <article className="m-news__item">
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=19" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21 </span></a></div>
                  </div>
                </div>
              </article>
              <article className="m-news__item">
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=16" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21</span></a></div>
                  </div>
                </div>
              </article>
              <article className="m-news__item">
                <div className="m-news__img"><img itemProp="image" src="https://picsum.photos/200/300?random=16" alt="news" /></div>
                <div className="m-news__content">
                  <div className="m-news__heading"> 
                    <div className="m-news__cate"> <a href="#">Quan điểm - Tranh luận</a><span>5 phút đọc </span></div>
                    <div className="m-news__save"> <i className="gg-bookmark" /></div>
                  </div><a href="#">
                    <h2 className="m-title" itemProp="name">Fuckbois, PUA, Single Mom, Red Pills và tác dụng phụ của thuốc.</h2></a>
                  <div className="m-news__ext"> Văn hoá phương Tây du nhập vào kéo theo hàng loạt những...Văn hoá phương Tây du nhập vào kéo theo hàng loạt những... </div>
                  <div className="m-news__info"> <a className="m-news__auth" href="#"> <img src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/c666b030f75911ea8b09fbdb5cbee9ca.jpg" alt="auth" />
                      <div className="m-news__name" itemProp="author"> Anh Thư 
                        <div className="m-news__date">24 tháng 5</div>
                      </div></a>
                    <div className="m-news__more"> <a href><i className="gg-shape-triangle"> </i><span>21</span></a><a href><i className="gg-eye" /><span>21000</span></a><a href><i className="gg-transcript" /><span>21                   </span></a></div>
                  </div>
                </div>
              </article>
              <ul className="m-pagination w-100">
                <li className="is_active"> <a href>1</a></li>
                <li> <a href>2 </a></li>
                <li> <a href />3</li>
                <li> <a href>4</a></li>
                <li> <a href>5</a></li>
                <li> <a href>Next »                 </a></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
}

// export const getServerSideProps = async (context) => {
//   try {  
//     const {params, query} = context
//     const page = query.page || 1
//     const data = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/category/${params.slug}?page=${page}`)
//     const categorys = await data.json();
//     if (Object.keys(categorys).length != 0 ) {
//       return {
//         props: { 
//           categorys,
//         }, // will be passed to the page component as props
//       }
//     }
//     else{
//       return {
//         notFound: true,
//       }
//     }
//     } catch (error) {
//       return {
//         notFound: true,
//       }
//     }
// };