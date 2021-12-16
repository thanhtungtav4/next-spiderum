import React, {useState, useEffect, useContext} from 'react'
import PostService from '../services/post_service'
import ItemRow from '../components/module/base/ItemRow'
import style from '../styles/search.module.css'
import axios from 'axios';
import stylecraw from '../styles/Crawler.module.css'
import { AuthContext } from "../services/AuthProvider";


function Crawler() {
  const {loggedIn, userDetails, token, auth} = useContext(AuthContext);
  const [Url, seturl ] = useState('');
  const [Categorys, setCategorys] = useState([]);
  const [is_Categorys, setIs_Categorys] = useState([]);
  const [Status, setStatus] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [is_ERR, setIs_ERR] = useState(false);
  const [is_save, setIs_save] = useState('');
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
    console.log(e.target.value)
    setStatus(e.target.value);
  }
  const handleChange = async ( e ) => {
    e.preventDefault();
    setIs_Categorys(e.target.value);
  }
  const handleCrawler = async ( e ) => {
    e.preventDefault();
    if(token){
      const header ={
          "Authorization" : `Bearer ${token}`
      } 
      const response = axios.post(process.env.NEXT_PUBLIC_SHOP_URL + '/api/v1/crawler', {
          headers: header,
          category: is_Categorys,
          status: Status,
          url: Url
         }).then(res => {
          if (res?.status === 200) {
            setLoading(false),
            setIs_save(res?.data)
          }
        })
        .catch(
          err => setIs_ERR(true)
        );
    }
    // const response = await PostService.postCrawler({
    //   category: is_Categorys,
    //   status: Status,
    //   url: Url

    // }).then(res => {
    //   if (res?.status === 200) {
    //     setLoading(false),
    //     setIs_save(res?.data)
    //   }
    // })
    // .catch(
    //   err => setIs_ERR(true)
    //   // err =>console.log(err)
    // );

 }
  return (
    <div className="row">
      <div className={stylecraw.sCraw}>

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
      </div>
      <p className={stylecraw.sCraw}>Nhập URL Từ dantri.com.vn</p>
      <form onSubmit={ ( e ) => handleCrawler( e ) } method="post" className={style.search}>
        <input type="text" onInput={ ( e ) => seturl( e.target.value ) } placeholder="URL..." required />
        <button className="fa fa-search" type="submit" >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 465.001 465.001" style={{enableBackground: 'new 0 0 465.001 465.001'}} xmlSpace="preserve">
        <g>
          <path d="M387.438,55.846c-2.187-3.518-6.81-4.598-10.33-2.409c-3.518,2.188-4.596,6.812-2.409,10.329   c22.861,36.768,26.93,77.891,26.317,105.915c-0.516,23.601-4.343,42.179-6.117,49.621l-82.994,31.964l45.73-45.1   c1.18-1.164,1.941-2.686,2.165-4.328c0.169-1.241,4.107-30.861,1.232-70.174c-2.674-36.551-12.057-88.534-41.577-128.611   C317-0.282,312.304-0.993,308.97,1.462c-3.335,2.457-4.047,7.152-1.591,10.487c48.311,65.589,39.695,168.187,37.847,185.389   l-20.024,19.748c1.499-6.685,2.299-13.586,2.299-20.61c0-52.383-42.617-95-95-95s-95,42.617-95,95c0,7.024,0.8,13.926,2.3,20.611   l-20.027-19.751c-1.86-17.199-10.529-119.708,37.849-185.387c2.457-3.335,1.745-8.03-1.591-10.487   c-3.335-2.457-8.03-1.744-10.486,1.591c-29.52,40.077-38.903,92.061-41.577,128.611c-2.875,39.313,1.063,68.933,1.232,70.174   c0.224,1.643,0.985,3.164,2.165,4.328l45.73,45.1l-82.991-31.963C66.05,202.228,51.288,126.51,90.301,63.766   c2.187-3.518,1.109-8.142-2.409-10.329c-3.518-2.188-8.144-1.109-10.33,2.409c-24.9,40.045-29.277,84.434-28.564,114.619   c0.768,32.563,7.312,55.563,7.59,56.525c0.651,2.255,2.32,4.074,4.51,4.918l127.457,49.089   c-4.367,5.099-7.824,10.948-10.186,17.308l-94.375-8.456c-3.599-0.337-6.92,1.969-7.893,5.451   c-0.259,0.926-6.338,23.009-6.869,53.247c-0.708,40.362,9.007,76.027,28.096,103.142c1.46,2.074,3.781,3.184,6.139,3.184   c1.492,0,2.999-0.444,4.311-1.368c3.387-2.385,4.2-7.063,1.815-10.45c-35.271-50.1-24.743-117.388-20.456-137.685l85.873,7.694   c-0.171,1.823-0.268,3.666-0.268,5.529c0,0.896,0.027,1.786,0.068,2.672l-55.295,12.096c-3.011,0.659-5.313,3.093-5.802,6.136   c-0.505,3.138-11.84,77.383,34.086,123.309c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.196   c2.929-2.93,2.929-7.678,0-10.607c-34.107-34.106-32.018-88.658-30.46-105.326l49.499-10.827   c4.552,14.329,14.549,26.256,27.555,33.327v25.336c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-19.736   c4.028,0.893,8.207,1.378,12.5,1.378s8.472-0.485,12.5-1.378v19.736c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5v-25.336   c13.006-7.071,23.003-18.998,27.555-33.327l49.499,10.827c1.558,16.677,3.645,71.222-30.46,105.326   c-2.929,2.93-2.929,7.678,0,10.607c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196   c45.926-45.926,34.591-120.171,34.086-123.309c-0.49-3.043-2.791-5.477-5.802-6.136l-55.295-12.096   c0.041-0.886,0.068-1.775,0.068-2.672c0-1.863-0.097-3.706-0.268-5.529l85.881-7.695c4.309,20.275,14.887,87.472-20.464,137.686   c-2.384,3.387-1.572,8.065,1.815,10.45c1.313,0.924,2.819,1.368,4.311,1.368c2.357-0.001,4.679-1.109,6.139-3.184   c19.088-27.114,28.804-62.779,28.096-103.142c-0.53-30.238-6.61-52.321-6.869-53.247c-0.973-3.481-4.288-5.783-7.893-5.451   l-94.375,8.456c-2.362-6.359-5.818-12.209-10.185-17.308l127.457-49.089c2.19-0.844,3.859-2.663,4.51-4.918   c0.278-0.963,6.822-23.963,7.59-56.525C416.715,140.279,412.338,95.891,387.438,55.846z M232.501,361.349   c-23.576,0-42.756-19.181-42.756-42.756c0-3.448,0.408-6.811,1.176-10.042c0.084-0.271,0.155-0.547,0.209-0.831   c2.359-9.106,7.634-17.1,14.973-22.819c0.406-0.254,0.796-0.532,1.149-0.861c3.784-2.748,8.07-4.916,12.76-6.346   c3.962-1.208,6.194-5.399,4.986-9.361c-1.208-3.963-5.398-6.196-9.361-4.986c-5.242,1.599-10.112,3.878-14.533,6.72   c-29.223-12.492-48.602-41.575-48.602-73.59c0-44.112,35.888-80,80-80s80,35.888,80,80c0,32.014-19.379,61.098-48.602,73.59   c-4.422-2.842-9.292-5.121-14.534-6.72c-3.965-1.21-8.153,1.024-9.361,4.986c-1.208,3.962,1.024,8.153,4.986,9.361   c4.709,1.436,9.012,3.616,12.808,6.382c0.362,0.332,0.754,0.627,1.17,0.881c7.303,5.716,12.552,13.687,14.904,22.764   c0.054,0.284,0.125,0.561,0.209,0.831c0.768,3.23,1.176,6.594,1.176,10.042C275.257,342.168,256.077,361.349,232.501,361.349z" />
          <path d="M240.001,186.476c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v10c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V186.476z" />
          <path d="M202.501,148.976c-4.142,0-7.5,3.357-7.5,7.5v10c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-10   C210.001,152.333,206.643,148.976,202.501,148.976z" />
          <path d="M262.501,173.976c4.142,0,7.5-3.357,7.5-7.5v-10c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v10   C255.001,170.618,258.358,173.976,262.501,173.976z" />
        </g>
      </svg> 
        </button>
      </form>
     <div>
      <>
        {is_ERR == true && Loading == true   &&
          <h2>
            Lỗi
          </h2>
        }
        {is_ERR == false && Loading == false  && is_save != ''  &&
          <h2>
            Lấy Dữ Liệu Thành Công
          </h2>
        }
        
      </>
      </div>
    </div>
    
  );
}
export default Crawler;