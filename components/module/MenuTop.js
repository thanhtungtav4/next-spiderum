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
              <li>  <Link href="/bao-moi"><a>Báo mới</a></Link></li>
              <li>  <Link href="/thanh-nien"><a>Thanh niên</a></Link></li>
              <li>  <Link href="/dan-tri"><a>Dân Trí</a></Link></li>
              <li>  <Link href="/truyen-cam-hung"><a>Quan điểm - Tranh luận</a></Link></li>
              <li>  <Link href="/cong-nghe"><a>Công nghệ</a></Link></li>
              <li>  <Link href="/"><a>Thời tiết</a></Link></li>
            </ul>
        </div>
        <ul className={`c-header__togge ${toggleState.menuA}`}> 
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ  </span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
        </ul>
        
      </>
    );
}
export default MenuTop;