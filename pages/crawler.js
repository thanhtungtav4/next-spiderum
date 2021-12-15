import React, {useState, useEffect} from 'react'
import PostService from '../services/post_service'
import ItemRow from '../components/module/base/ItemRow'
import style from '../styles/search.module.css'


function Crawler() {
  const [Url, seturl ] = useState('');
  const [Categorys, setCategorys] = useState([]);
  const [is_Categorys, setIs_Categorys] = useState([]);
  const [Status, setStatus] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(async () =>{
    const response = await PostService.getCategory({
    }).then(res => {
      if (res?.status === 200) {
        setCategorys(res?.data);
      }
    })
    .catch(err =>console.log(err));
  }, []);
  const handleStatus = async ( e ) => {
    e.preventDefault();
    setStatus(e.target.value);
  }
  const handleChange = async ( e ) => {
    e.preventDefault();
    setIs_Categorys(e.target.value);
  }
  const handleCrawler = async ( e ) => {
    e.preventDefault();
    const response = await PostService.postCrawler({
      category: is_Categorys,
      status: Status,
      url: Url

    }).then(res => {
      if (res?.status === 200) {
        console.log(res);
      }
    })
    .catch(err =>console.log(err));
 }
  return (
    <div className="row">
      <select onChange={ ( e ) => handleChange( e ) } name="category" id="category">
        {
          Categorys.map((Category, index) => (
            <option key={index}  value={Category?.id}>{Category?.name}</option>
          ))
        }
      </select>
      <select onChange={ ( e ) => handleStatus( e ) } name="status" id="status">
       <option value='PUBLISHED'>PUBLISHED</option>
       <option value='DRAFT'>DRAFT</option>
      </select>
      <form onSubmit={ ( e ) => handleCrawler( e ) } method="post" className={style.search}>
        <input type="text" onInput={ ( e ) => seturl( e.target.value ) } placeholder="URL..." required />
        <button className="fa fa-search" type="submit" >
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="28px" height="28px"><path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"/><path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"/><path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z" transform="rotate(-45.001 38.24 38.24)"/><path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"/><path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"/></svg>
        </button>
      </form>
    </div>
  );
}
export default Crawler;