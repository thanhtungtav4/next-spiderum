import Head from 'next/head';
import React, {useState, useEffect} from 'react'
import SectionPostHost from '../components/module/Item/SectionPostHost';
import SectionPostRowSlider from '../components/module/Item/SectionPostRowSlider';
import SectionLayoutTab from '../components/module/Item/SectionLayoutTab';
import { useContext } from "react";
//import { AuthContext } from "../services/AuthProvider";

function Home({postData}) {
  //const { status, user } = useContext(AuthContext);
  return ( 
      <>
        <h2 className="m-ttl2">Đừng bỏ lỡ </h2>
        <SectionPostHost />
        <h2 className="m-ttl2">BÀI VIẾT CỦA THÁNG</h2>
        <SectionPostRowSlider />
        <SectionLayoutTab postData={postData}/>
      </>
    )
}
export const getServerSideProps = async ({ query }) => {
  // Fetch the first page as default
  const page = query.page || 1
  let postData = null
  // Fetch data from external API
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/post/?page=${page}`)
    if (res.status !== 200) {
      throw new Error("Failed to fetch")
    }
    postData = await res.json()
  } catch (err) {
    postData = { error: { message: err.message } }
  }
  // Pass data to the page via props
  return { props: { postData } }
}
export default Home
