import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import HeadMeta from "../module/HeadMeta";
import MenuTopBottom from "../module/MenuTop";


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
            <div className="c-header__logo">
              <a className="c-header__img" href="/">
                <img className="m-onlypc" src="assets/images/logo.png" alt="logo alt" />
                <img className="m-onlysp" src="assets/images/logosp.png" alt="logo alt" />
              </a>
            </div>
            <ul className="c-header__icon">
              <li><a href="#"><i className="gg-search" /></a></li>
              <li><a href="/"><i className="gg-mail" /></a></li>
              <li><a href="/"><i className="gg-sun" /></a></li>
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