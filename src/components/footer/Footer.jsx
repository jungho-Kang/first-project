import { Link } from "react-router-dom";
// styled
import {
  CopyDiv,
  FooterDiv,
  FooterTopDiv,
  FooterTxtDiv,
  FooterWrap,
} from "./footerStyle";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterWrap>
        <FooterTopDiv>
          <div className="ft-left">
            <Link to={"/"} className="logo">
              <img src="/images/logo.png" alt="ft-logo" />
            </Link>
            <ul className="ft-nav">
              <li>
                <Link to={"/"}>이용약관</Link>
              </li>
              <li>
                <Link to={"/"}>개인정보방침</Link>
              </li>
              <li>
                <Link to={"/about"}>사이트소개</Link>
              </li>
              <li>
                <Link to={"/"}>1:1문의</Link>
              </li>
            </ul>
          </div>
          <ul className="sns-area">
            <li>
              <Link to={"/"}>
                <img src="/images/icon/blog.png" alt="blog" />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <img src="/images/icon/facebook.png" alt="facebook" />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <img src="/images/icon/insta.png" alt="insta" />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <img src="/images/icon/youtube.png" alt="youtube" />
              </Link>
            </li>
          </ul>
        </FooterTopDiv>
        <FooterTxtDiv>
          <p>
            <b>[주식회사]</b> 다녀ALL
          </p>
          <p>
            <b>[사업자등록번호]</b> 504-85-25999{" "}
          </p>
          <p>
            <b>[주소]</b> 대구광역시 중구 중앙대로 394, 제일빌딩 5F
          </p>
        </FooterTxtDiv>
        <CopyDiv>Copyright © 다녀ALL. All Rights Reserved.</CopyDiv>
      </FooterWrap>
    </FooterDiv>
  );
};

export default Footer;
