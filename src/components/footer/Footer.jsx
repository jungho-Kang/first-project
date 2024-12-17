import { Link } from "react-router-dom";
import { FooterDiv, FooterWrap } from "./footerStyle";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterWrap>
        <Link to={"/"}>홈 /</Link>
        <Link to={"/auth"}> 로그인 /</Link>
        <Link to={"/auth/findpw"}> 비밀번호찾기 /</Link>
        <Link to={"/auth/signup"}> 회원가입 /</Link>
        <Link to={"/about"}> 소개 /</Link>
        <Link to={"/about/guide"}> 이용방법 /</Link>
        <Link to={"/planning"}> 일정계획 /</Link>
        <Link to={"/board"}> 여행로그 /</Link>
        <Link to={"/board/detail"}> 게시글상세보기 /</Link>
        <Link to={"/board/writepost"}> 글쓰기/수정 /</Link>
        <Link to={"/myplanlist"}> 내일정 /</Link>
        <Link to={"/myplanlist/detail"}> 내일정상세보기 /</Link>
        <Link to={"/myinfo"}> 내정보 /</Link>
        <Link to={"/myinfo/editprofile"}> 내정보수정 /</Link>
        <Link to={"/myinfo/updatepw"}> 비밀번호변경 /</Link>
        <Link to={"/myinfo/deletemember"}> 회원탈퇴 </Link>
      </FooterWrap>
    </FooterDiv>
  );
};

export default Footer;
