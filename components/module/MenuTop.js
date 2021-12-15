import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
function MenuTop(){
    const [toggleState, setToggleState] = useState({
        menuA: "",
        menuB: ""
    });

    function toggle() {
        setToggleState({
            menuA: toggleState.menuA === "" ? "is_active" : "",
            menuB: toggleState.menuB = ""
        });
    }
    function toggle2() {
        setToggleState({
            menuB: toggleState.menuB === "" ? "is_active" : "",
            menuA: toggleState.menuA = ""
        });
      }
    return (
      <>
        <div className="c-header__navBottom">         
            <div className={`c-header__btn ${toggleState.menuA}`} onClick={toggle}> <span><i className="gg-album" /></span><strong> CÁC CHỦ ĐỀ </strong><span> <i className="gg-chevron-down" /></span></div>
            <div className={`c-header__btn m-onlysp ${toggleState.menuB}`} onClick={toggle2} ><span><i className="gg-loadbar-doc" /></span><strong>CẬP NHẬT</strong><span> <i className="gg-chevron-down"> </i></span></div>
            <ul className={`c-header__menu ${toggleState.menuB}`}>
              <li>  <Link href="/giao-duc"><a>Giáo Dục</a></Link></li>
              <li>  <Link href="/kinh-doanh"><a>Kinh doanh</a></Link></li>
              <li>  <Link href="/su-kien"><a>Sự kiện</a></Link></li>
              <li>  <Link href="/cong-nghe"><a>Công nghệ</a></Link></li>
            </ul>
        </div>
        <ul className={`c-header__togge ${toggleState.menuA}`}> 
            <li> <Link href="/giao-duc"><a> <Image src="https://picsum.photos/30/30?random=1" alt="" width={30} height={30}/><span>Giáo Dục</span></a></Link></li>
            <li> <Link href="/kinh-doanh"><a> <Image src="https://picsum.photos/30/30?random=2" alt="" width={30} height={30}/><span>Kinh doanh</span></a></Link></li>
            <li> <Link href="/su-kien"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Sự kiện</span></a></Link></li>
            <li> <Link href="/cong-nghe"><a> <Image src="https://picsum.photos/30/30?random=3" alt="" width={30} height={30}/><span>Công nghệ</span></a></Link></li>
            <li> <Link href="/suc-khoe"><a> <Image src="https://picsum.photos/30/30?random=4" alt="" width={30} height={30}/><span>Sức Khỏe</span></a></Link></li>
            <li> <Link href="/phap-luat"><a> <Image src="https://picsum.photos/30/30?random=5" alt="" width={30} height={30}/><span>Pháp luật</span></a></Link></li>
            <li> <Link href="/the-thao"><a> <Image src="https://picsum.photos/30/30?random=6" alt="" width={30} height={30}/><span>Thể thao</span></a></Link></li>
            <li> <Link href="/an-sinh"><a> <Image src="https://picsum.photos/30/30?random=7" alt="" width={30} height={30}/><span>An sinh</span></a></Link></li>
        </ul>
        
      </>
    );
}
export default MenuTop;