import Head from 'next/head';
import React, {useState, useEffect} from 'react'
import SectionPostHost from '../components/module/Item/SectionPostHost';
import SectionPostRowSlider from '../components/module/Item/SectionPostRowSlider';
import SectionLayoutTab from '../components/module/Item/SectionLayoutTab';

function Home() {
  return ( 
      <>
        <h2 className="m-ttl2">Đừng bỏ lỡ </h2>
        <SectionPostHost />
        <h2 className="m-ttl2">BÀI VIẾT CỦA THÁNG</h2>
        <SectionPostRowSlider />
        <SectionLayoutTab/>
      </>
    )
}
// export async function getStaticProps() {
//   const res = await axios.get('http://newsapi.io/api/v1/post/?cursorPaginate=1&numPaginate=3')
//   return {
//     props: {
//       posts : res.data.data,
//     },
//     revalidate: 10,
//   }
// }
export default Home
