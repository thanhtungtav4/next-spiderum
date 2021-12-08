import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import MenuTopBottom from "../module/MenuTop";
import DarkMode from "../module/DarkMode";
import UserAuth from "../module/UserAuth";

class Header extends React.Component {
  render() {
    return(
      <>
      <header className="c-header">
        <div className="c-header__inner">
          <div className="c-header__navTop">
            <div className="c-header__logo">
              <Link href="/">
              <a className="c-header__img" >
                <img className="m-onlypc" src={process.env.NEXT_PUBLIC_SHOP_URL+`/assets/images/logo.png`} alt="logo alt" />
                <img className="m-onlysp" src={process.env.NEXT_PUBLIC_SHOP_URL+`/assets/images/logosp.png`} alt="logo alt" />
              </a>
              </Link>
            </div>
            <ul className="c-header__icon">
              <Link href="/search">
                <li><i className="gg-search" /></li>
              </Link>
              <Link  href="mailto:nguyenthanhtung74119@gmail.com">
              <li><i className="gg-mail" /></li>
              </Link>
              <UserAuth/>
              <DarkMode/>
            </ul>
          </div>
        <div>
        </div>
        <MenuTopBottom/>
        </div>
      </header>
    </>
    )
  }
}
export default Header;