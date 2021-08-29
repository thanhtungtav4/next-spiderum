import React from "react";
class Header extends React.Component {
  render() {
    return(
      <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Trang chủ - Spiderum</title>
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />
      {/* Primary Meta Tags*/}
      <meta name="title" content="Trang chủ - Spiderum" />
      <meta name="description" content="Trang chủ - Spiderum trang tin tức" />
      {/* Open Graph / Facebook*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content />
      <meta property="og:title" content="Trang chủ - Spiderum" />
      <meta property="og:description" content="Trang chủ - Spiderum trang tin tức" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1629927506216-fcdf656d74de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
      {/* Twitter*/}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content />
      <meta property="twitter:title" content="Trang chủ - Spiderum" />
      <meta property="twitter:description" content="Trang chủ - Spiderum trang tin tức" />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1629927506216-fcdf656d74de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
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
          <div className="c-header__navBottom">         
            <div className="c-header__btn" id="navicon"> <span><i className="gg-album" /></span><strong> CÁC CHỦ ĐỀ </strong><span> <i className="gg-chevron-down" /></span></div>
            <div className="c-header__btn m-onlysp" id="navicon2"><span><i className="gg-loadbar-doc" /></span><strong>CẬP NHẬT</strong><span> <i className="gg-chevron-down"> </i></span></div>
            <ul className="c-header__menu" id="siteNav2">
              <li> <a href="/category.html">Khoa học - Công nghệ</a></li>
              <li> <a href="/category.html">Truyền cảm hứng</a></li>
              <li> <a href="/category.html">Thể thao</a></li>
              <li> <a href="/category.html">Quan điểm - Tranh luận</a></li>
              <li> <a href="/category.html">Thời tiết</a></li>
              <li> <a href="/category.html">Công nghệ</a></li>
            </ul>
          </div>
          <ul className="c-header__togge" id="siteNav"> 
            <li><a href> <img src="https://spiderum.com/assets/images/categories/laptop-min.jpg" alt="" /><span>Khoa học - Công nghệ</span></a></li>
            <li><a href> <img src="https://spiderum.com/assets/images/categories/laptop-min.jpg" alt="" /><span>Khoa học - Công nghệ</span></a></li>
            <li><a href> <img src="https://spiderum.com/assets/images/categories/laptop-min.jpg" alt="" /><span>Khoa học - Công nghệ  </span></a></li>
            <li><a href> <img src="https://spiderum.com/assets/images/categories/laptop-min.jpg" alt="" /><span>Khoa học - Công nghệ</span></a></li>
            <li><a href> <img src="https://spiderum.com/assets/images/categories/laptop-min.jpg" alt="" /><span>Khoa học - Công nghệ</span></a></li>
            <li><a href> <img src="https://spiderum.com/assets/images/categories/laptop-min.jpg" alt="" /><span>Khoa học - Công nghệ     </span></a></li>
          </ul>
        </div>
      </header>
    </div>
    )
  }
}
export default Header;