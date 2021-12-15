import React, { useState } from 'react'
import PostService from '../services/post_service'
import ItemRow from '../components/module/base/ItemRow'
import style from '../styles/search.module.css'
import { render } from 'react-dom';

function Search() {
  const [ svalue, setSvalue ] = useState('');
  const [posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const handleSearch = async ( e ) => {
    e.preventDefault();
    const response = await PostService.getPost({
      seach: svalue,
    }).then(res => {
      if (res?.status === 200) {
        setPosts(res.data.data);
        setLoading(false);
      }
    })
    .catch(err =>console.log(err));
    
 }
  return (
    <div className="row">
      <form onSubmit={ ( e ) => handleSearch( e ) } method="post" className={style.search}>
        <input type="text" onInput={ ( e ) => setSvalue( e.target.value ) } placeholder="Search..." required />
        <button className="fa fa-search" type="submit" >
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="28px" height="28px"><path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"/><path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"/><path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z" transform="rotate(-45.001 38.24 38.24)"/><path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"/><path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"/></svg>
        </button>
      </form>
      <div className={`col-9 ${style.mxauto}`} >
          <div className="m-news is_vertical">
          <>
           {posts.length > 0  && Loading == false > 0  ? (
                posts.map((dataPost, index) => (
                <ItemRow key={index} data={dataPost}/>
              ))
            ) : posts.length <= 0  && Loading == true ? (
              <p className={style.mxauto}>Nhập nội dung tìm kiếm :)</p>
            ) : (
             <p className={style.mxauto}>Không tìm thấy dữ liệu...</p>
            )}
          </>
          </div>
      </div>
    </div>
  );
}
export default Search;