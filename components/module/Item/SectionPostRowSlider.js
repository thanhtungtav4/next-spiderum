import React, {useState, useEffect} from 'react';
import ItemRow from '../base/ItemRow';
import Slider from "react-slick";
import PostService from '../../../services/post_service';
import {PlaceholderItemSlider} from '../base/PlaceholderItem';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function SectionPostRowSlider(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        }
      },
    ]
  };
  const [PostsSlider, setPostsSlider] = useState([]);
  const [LoadingSlider, setLoadingSlider] = useState(true);
  useEffect(async () =>{
    const response = await PostService.getPost({
      cursorPaginate: 1,
      currentMonth: true,
      limit: 20
    }).then(res => {
      if (res?.status === 200) {
        setPostsSlider(res.data);
        setLoadingSlider(false);
      }
    })
    .catch(err =>console.log(err));
  }, []);
  return (
     <>
     {PostsSlider.length > 0  && LoadingSlider == false > 0 ? (
      <Slider {...settings} className="m-news is_row is_slider">
        {
          PostsSlider.map((dataPostSlider, index) => (
            <ItemRow key={index} data={dataPostSlider}/>
          ))
        }
      </Slider>
    ) : (
      <div className="m-news is_row">
        <PlaceholderItemSlider/>
        <PlaceholderItemSlider/>
        <PlaceholderItemSlider/>
      </div>
    )}
     </>
    );
  }
export default SectionPostRowSlider;