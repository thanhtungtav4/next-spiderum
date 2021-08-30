import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import HeadMeta from "../module/HeadMeta";


class Header extends React.Component {
  state = {
    show: false,
    showmb: false,
  }
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  render() {
    return(
      <>
      <HeadMeta/>
      <header className="c-header">
        <div className="c-header__inner">
          <div className="c-header__navTop">
            <div className="c-header__logo"><a className="c-header__img" href="/"><img className="m-onlypc" src="assets/images/logo.png" alt="logo alt" /><img className="m-onlysp" src="assets/images/logosp.png" alt="logo alt" /></a></div>
            <ul className="c-header__icon">
              <li><a href="#"><i className="gg-search" /></a></li>
              <li><a href="/"><i className="gg-mail" /></a></li>
              <li><a href="/"><i className="gg-sun" /></a></li>
            </ul>
          </div>
          <div>
    </div>
          <div className="c-header__navBottom">         
            <div className={this.state.show ? 'c-header__btn is_active' : 'c-header__btn'} onClick={this.toggle}> <span><i className="gg-album" /></span><strong> CÁC CHỦ ĐỀ </strong><span> <i className="gg-chevron-down" /></span></div>
            <div className="c-header__btn m-onlysp" id="navicon2"><span><i className="gg-loadbar-doc" /></span><strong>CẬP NHẬT</strong><span> <i className="gg-chevron-down"> </i></span></div>
            <ul className="c-header__menu" id="siteNav2">
              <li>  <Link href="/x"><a>Khoa học - Công nghệ</a></Link></li>
              <li>  <Link href="/"><a>Truyền cảm hứng</a></Link></li>
              <li>  <Link href="/"><a>Thể thao</a></Link></li>
              <li>  <Link href="/"><a>Quan điểm - Tranh luận</a></Link></li>
              <li>  <Link href="/"><a>Thời tiết</a></Link></li>
              <li>  <Link href="/"><a>Công nghệ</a></Link></li>
            </ul>
          </div>
          
          <ul className={this.state.show ? 'c-header__togge is_active' : 'c-header__togge'}> 
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ  </span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
            <li> <Link href="/"><a> <Image src="https://picsum.photos/30/30" alt="" width={30} height={30}/><span>Khoa học - Công nghệ</span></a></Link></li>
          </ul>
        </div>
      </header>
    </>
    )
  }
}
export default Header;