import React from "react";
import ScrollToTopBtn from "../module/ScrollToTop";
class Footer extends React.Component {
  render() {
    return (
      <footer className="c-footer">
      <div className="c-footer__inner">
        <div className="c-footer__logo"> <img src="assets/images/logo.png" alt="" /></div>
        <ul className="c-footer__menu"> 
          <li> <a href>Về Spiderum</a></li>
          <li> <a href>Chuyên mục            </a></li>
          <li> <a href>Điều khoản sử dụng</a></li>
          <li> <a href="https://huongluafood.com/">Đặc sản miền tây</a></li>
        </ul>
      </div>
      <div className="c-footer__bottom"> 
        <div className="c-footer__info"> 
          <p><strong>  Công ty Cổ Phần Felizz   </strong></p>
          <p> Trực thuộc Công ty Cổ Phần Spiderum Việt Nam (Spiderum Vietnam JSC)</p>
          <p> Người chịu trách nhiệm nội dung: Trần Việt Anh</p>
          <p> Giấy phép MXH số 341/GP-TTTT do Bộ TTTT cấp ngày 27 tháng 6 năm 2016</p>
        </div>
        <div className="c-footer__name"> 
          <p> <strong> © 2021 Công ty Cổ phần Felizz</strong></p>
        </div>
      </div>
      <ScrollToTopBtn/>
      
    </footer>
    );
  }
}
export default Footer;