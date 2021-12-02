import React, { useState, useEffect } from "react"
import Image from 'next/image'
import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import HeadMeta from '../../components/module/HeadMeta'
import ItemVertical from '../../components/module/base/ItemVertical'

export default function UserPage({datausers}) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const handlePagination = page => {
  const path = router.pathname
  const query = router.query
  if(page.selected + 1 != 1){
    query.page = page.selected + 1
  }
  else{
    delete query.page
  }
  router.push({
    pathname: path,
    query: query,
  })
  }
  return(
      <>
      <HeadMeta 
      title={datausers?.name}
      image={process.env.NEXT_PUBLIC_REST_API + datausers?.image}
      url={process.env.NEXT_PUBLIC_SHOP_URL + "/" + datausers?.slug}
      />
      <section className="c-banner">
          <div className="c-banner__inner"> 
            <Image objectFit="cover"
                      objectPosition="center"
                      placeholder="blur" 
                      width="1200px"
                      height="350px"
                      layout="responsive" 
                      itemProp="image" 
                      src={datausers?.user?.banner ? process.env.NEXT_PUBLIC_REST_API + datausers?.user?.banner : process.env.NEXT_PUBLIC_APP_IMG} 
                      blurDataURL={datausers?.user?.banner ? process.env.NEXT_PUBLIC_REST_API + datausers?.user?.banner : process.env.NEXT_PUBLIC_APP_IMG}
                      alt={datausers?.user?.name} />
          </div>
        </section>
        <div className="row">
          <div className="col-3 widget__user">     
            <div className="widget">
              <div className="widget-body">
                <div className="widget__avata"> 
                  <Image objectFit="cover"
                        objectPosition="center"
                        placeholder="blur" 
                        width="200px"
                        height="200px"
                        layout="responsive" 
                        itemProp="image" 
                        src={datausers?.user?.image ? process.env.NEXT_PUBLIC_REST_API + datausers?.user?.image : process.env.NEXT_PUBLIC_APP_IMG} 
                        blurDataURL={datausers?.user?.image ? process.env.NEXT_PUBLIC_REST_API + datausers?.user?.image : process.env.NEXT_PUBLIC_APP_IMG}
                        alt={datausers?.user?.name} />
                </div>
                <h1 className="widget__name">{datausers?.user?.name}</h1>
                <p className="widget__username">@{datausers?.user?.username}</p>
                <p className="widget__userbio">{datausers?.user?.description}</p>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="tab"> 
              <h2 className="m-ttl2">Bài Viết Mới Nhất</h2>
            </div>
            <div className="m-news is_vertical">
              {
                datausers?.post?.data.map((post, index) => (
                  <ItemVertical key={index} data={post}/>
                ))
              }
              <ReactPaginate
                containerClassName={'m-pagination w-100'}
                activeClassName={'is_active'}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                initialPage={datausers?.post?.current_page - 1}
                pageCount={datausers?.post?.last_page}
                onPageChange={handlePagination}
              />
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
    const data = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/user/byuser/${params.slug}?page=${page}`)
    const datausers = await data.json();
    if (Object.keys(datausers).length != 0 ) {
      return {
        props: { 
          datausers,
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