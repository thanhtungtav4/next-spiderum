import React, { useState, useEffect } from "react"
import HeadMeta from '../components/module/HeadMeta'
import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import ItemVertical from '../components/module/base/ItemVertical'

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
      <section className="m-banner">
        <div className="m-banner__inner" style={{backgroundImage: "url(" + Background + ")"}} />
        <div className="m-banner__info">{categorys?.name} </div>
      </section>
      <div className="row">
        <div className="col-9">
          <div className="tab"> 
            <h2 className="m-ttl2">DÀNH CHO BẠN</h2>
          </div>
          <div className="m-news is_vertical">
            {
              categorys.postByCategory?.data.map((post, index) => (
                <ItemVertical key={index} data={post}/>
              ))
            }
            <ReactPaginate
              containerClassName={'m-pagination w-100'}
              activeClassName={'is_active'}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              initialPage={categorys?.postByCategory?.current_page - 1}
              pageCount={categorys?.postByCategory.last_page}
              onPageChange={handlePagination}
            />
          </div>
        </div>
        <div className="col-3">     
          <div className="widget">
            <div className="widget-head"> CÓ THỂ BẠN QUAN TÂM</div>
            <div className="widget-body"> 
              <article className="widget-item"> 
                <div className="widget-item__img"> <a  rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
                <div className="widget-item__content"> <a > 
                    <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                  <div className="widget-item__author"><a className="m-author" >a lost star </a><span>14 tháng 12 2018</span></div>
                </div>
              </article>
              <article className="widget-item"> 
                <div className="widget-item__img"> <a  rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
                <div className="widget-item__content"> <a > 
                    <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                  <div className="widget-item__author"><a className="m-author" >a lost star </a><span>14 tháng 12 2018</span></div>
                </div>
              </article>
              <article className="widget-item"> 
                <div className="widget-item__img"> <a  rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
                <div className="widget-item__content"> <a > 
                    <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                  <div className="widget-item__author"><a className="m-author" >a lost star </a><span>14 tháng 12 2018</span></div>
                </div>
              </article>
              <article className="widget-item"> 
                <div className="widget-item__img"> <a  rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
                <div className="widget-item__content"> <a > 
                    <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                  <div className="widget-item__author"><a className="m-author" >a lost star </a><span>14 tháng 12 2018</span></div>
                </div>
              </article>
              <article className="widget-item"> 
                <div className="widget-item__img"> <a  rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
                <div className="widget-item__content"> <a > 
                    <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                  <div className="widget-item__author">
                  <a className="m-author" >a lost star </a>
                  <span>14 tháng 12 2018</span></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export const getServerSideProps = async (context) => {
  try {  
    const {params, query} = context
    const page = query.page || 1
    const data = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/category/${params.slug}?page=${page}`)
    const categorys = await data.json();
    if (Object.keys(categorys).length != 0 ) {
      return {
        props: { 
          categorys,
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