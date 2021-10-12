import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate'
import Router, { withRouter } from 'next/router'
import ItemVertical from '../components/module/base/ItemVertical'

const CategoryPage = ({ categorys, posts}) => {
  const router = useRouter()
  const Background = categorys?.image ? process.env.NEXT_PUBLIC_REST_API + categorys?.image : process.env.NEXT_PUBLIC_APP_IMG
  if (router.isFallback) {
    return(
      <>
          <h1>Loading......</h1>
      </>
    )
  }
  return (
    <>
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
            posts?.map((post, index) => (
              <ItemVertical key={index} data={post}/>
            ))
          }
          
          <ul className="m-pagination w-100">
            <li className="is_active"> <a href>1</a></li>
            <li> <a href>2 </a></li>
            <li> <a href>3 </a></li>
            <li> <a href>4</a></li>
            <li> <a href>5</a></li>
            <li> <a href>Next »                 </a></li>
          </ul>
        </div>
      </div>
      <div className="col-3">     
        <div className="widget">
          <div className="widget-head"> CÓ THỂ BẠN QUAN TÂM</div>
          <div className="widget-body"> 
            <article className="widget-item"> 
              <div className="widget-item__img"> <a href="#" rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
              <div className="widget-item__content"> <a href="#"> 
                  <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                <div className="widget-item__author"><a className="m-author" href="#">a lost star </a><span>14 tháng 12 2018</span></div>
              </div>
            </article>
            <article className="widget-item"> 
              <div className="widget-item__img"> <a href="#" rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
              <div className="widget-item__content"> <a href="#"> 
                  <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                <div className="widget-item__author"><a className="m-author" href="#">a lost star </a><span>14 tháng 12 2018</span></div>
              </div>
            </article>
            <article className="widget-item"> 
              <div className="widget-item__img"> <a href="#" rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
              <div className="widget-item__content"> <a href="#"> 
                  <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                <div className="widget-item__author"><a className="m-author" href="#">a lost star </a><span>14 tháng 12 2018</span></div>
              </div>
            </article>
            <article className="widget-item"> 
              <div className="widget-item__img"> <a href="#" rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
              <div className="widget-item__content"> <a href="#"> 
                  <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                <div className="widget-item__author"><a className="m-author" href="#">a lost star </a><span>14 tháng 12 2018</span></div>
              </div>
            </article>
            <article className="widget-item"> 
              <div className="widget-item__img"> <a href="#" rel="noreferrer"><img itemProp="image" src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/bb475710ff8811e8bd9deb350c986d59.jpg" alt="alt" /></a></div>
              <div className="widget-item__content"> <a href="#"> 
                  <h2 itemProp="name">CHÚNG TA ĐANG YÊU, HAY CHỈ ĐANG ĐEM LÒNG ÁI MỘ?</h2></a>
                <div className="widget-item__author"><a className="m-author" href="#">a lost star </a><span>14 tháng 12 2018                              </span></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/category/`)
  const categorys = await res.json()
  const paths = categorys.map((category) => ({
   params: { slug: category.slug.toString()},
 }))
 return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  try {
  const page = 1;
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/category/${params.slug}?page=${page}`)
  const categorys = await res.json()
  if (Object.keys(categorys).length != 0 ) {
    return {
      props: { 
        categorys,
        posts: categorys.postByCategory.data
      }, // will be passed to the page component as props
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

export default CategoryPage
