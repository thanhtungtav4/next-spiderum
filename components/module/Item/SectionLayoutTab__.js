import React, {useState, useEffect} from 'react';
import ItemVertical from '../base/ItemVertical';
import Pagination from '../base/Pagination';
import SectionWedget from './SectionWedget';
import PostService from '../../../services/post_service';
import {PlaceholderItemVerticalTab} from '../base/PlaceholderItem';
function SectionLayoutTab(){
  const [PostsTab, setPostsTab] = useState([]);
  const [LoadingTab, setLoadingTab] = useState(true);
  const [Query, setQuery] = useState([]); 
  useEffect(async () =>{
    const response = await PostService.getPost({
      cursorPaginate: -1,
      limit: 20,
      Query
    }).then(res => {
      if (res?.status === 200) {
        setPostsTab(res.data);
        setLoadingTab(false);
      }
    })
    .catch(err =>console.log(err));
  }, [LoadingTab]);
    return (
        <>
        {LoadingTab == false? (
        <section className="row">
          <div className="col-9">
            <div className="tab"> 
              <h2 className="m-ttl2">DÀNH CHO BẠN</h2>
              <div className="tab__menu"> 
              <a onClick={()=>setQuery('limit : 1'), ()=>setLoadingTab('true')}>
                  <svg width={14} height={18} viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.92969 0.046875C9.59635 1.40104 10.9115 3.04167 11.875 4.96875C12.8385 6.89583 13.3203 8.96615 13.3203 11.1797C13.3203 13.0026 12.6693 14.5651 11.3672 15.8672C10.0651 17.1693 8.48958 17.8203 6.64062 17.8203C4.81771 17.8203 3.25521 17.1693 1.95312 15.8672C0.651042 14.5651 0 13.0026 0 11.1797C0 8.36719 0.898438 5.89323 2.69531 3.75781L2.65625 4.07031C2.65625 4.92969 2.94271 5.65885 3.51562 6.25781C4.11458 6.85677 4.84375 7.15625 5.70312 7.15625C6.53646 7.15625 7.21354 6.85677 7.73438 6.25781C8.25521 5.65885 8.51562 4.92969 8.51562 4.07031C8.51562 3.52344 8.46354 2.92448 8.35938 2.27344C8.28125 1.59635 8.1901 1.0625 8.08594 0.671875L7.92969 0.046875ZM6.40625 15.3203C7.52604 15.3203 8.47656 14.9297 9.25781 14.1484C10.0391 13.3672 10.4297 12.4297 10.4297 11.3359C10.4297 10.1641 10.2604 9.04427 9.92188 7.97656C9.14062 9.04427 7.86458 9.76042 6.09375 10.125C5.33854 10.2812 4.7526 10.5938 4.33594 11.0625C3.94531 11.5052 3.75 12.0521 3.75 12.7031C3.75 13.4323 4.01042 14.0573 4.53125 14.5781C5.05208 15.0729 5.67708 15.3203 6.40625 15.3203Z" />
                  </svg><span>Thịnh hành</span>
                  </a>
              <a>
                  <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.42188 2.64062C4.0625 1 6.02865 0.179688 8.32031 0.179688C10.638 0.179688 12.6042 1 14.2188 2.64062C15.8594 4.25521 16.6797 6.20833 16.6797 8.5C16.6797 10.7917 15.8594 12.7578 14.2188 14.3984C12.6042 16.013 10.638 16.8203 8.32031 16.8203C6.02865 16.8203 4.0625 16.013 2.42188 14.3984C0.807292 12.7578 0 10.7917 0 8.5C0 6.20833 0.807292 4.25521 2.42188 2.64062ZM11.875 13.5L10.9375 9.47656L14.0234 6.78125L9.92188 6.42969L8.32031 2.67969L6.71875 6.46875L2.61719 6.78125L5.74219 9.47656L4.80469 13.5L8.32031 11.3906L11.875 13.5Z" />
                  </svg><span>Mới</span>
                  </a>
              <a>
                  <svg width={19} height={19} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.17969 9.5C9.17969 8.25 9.6224 7.18229 10.5078 6.29688C11.4193 5.38542 12.5 4.92969 13.75 4.92969C15 4.92969 16.0677 5.38542 16.9531 6.29688C17.8646 7.18229 18.3203 8.25 18.3203 9.5H9.17969ZM9.17969 9.5C9.17969 10.75 8.72396 11.8307 7.8125 12.7422C6.90104 13.6276 5.82031 14.0703 4.57031 14.0703C3.32031 14.0703 2.23958 13.6276 1.32812 12.7422C0.442708 11.8307 0 10.75 0 9.5H9.17969ZM9.17969 9.5C7.92969 9.5 6.84896 9.05729 5.9375 8.17188C5.02604 7.26042 4.57031 6.17969 4.57031 4.92969C4.57031 3.67969 5.02604 2.59896 5.9375 1.6875C6.84896 0.776042 7.92969 0.320312 9.17969 0.320312V9.5ZM9.17969 9.5C10.4297 9.5 11.4974 9.95573 12.3828 10.8672C13.2943 11.7526 13.75 12.8203 13.75 14.0703C13.75 15.3203 13.2943 16.401 12.3828 17.3125C11.4974 18.224 10.4297 18.6797 9.17969 18.6797V9.5Z" />
                  </svg><span>Nổi bật</span>
                  </a>
                  </div>
            </div>
            <div className="m-news is_vertical">
            {
                PostsTab.map((dataPostSlider, index) => (
                  <ItemVertical key={index} data={dataPostSlider}/>
                ))
              }
              <Pagination/>
            </div>
          </div>
          <div className="col-3">     
            <SectionWedget/>
          </div>
        </section>
        ) : (
        <>
          <PlaceholderItemVerticalTab/>
          <br></br>
          <PlaceholderItemVerticalTab/>
          <br></br>
          <PlaceholderItemVerticalTab/>
          <br></br>
          <PlaceholderItemVerticalTab/>
          <br></br>
          <PlaceholderItemVerticalTab/>
          <br></br>
          <PlaceholderItemVerticalTab/>
        </>
        )}
        </>
    );
}
export default SectionLayoutTab;