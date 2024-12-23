import { Link, useNavigate } from "react-router-dom";
// import { WrapDiv } from "../common";
import {
  GnbUl,
  HeaderDiv,
  HeaderWrapDiv,
  LoginDiv,
  LoginOutDiv,
} from "./headerStyle";
import Logo from "../Logo";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Header = () => {
  const { isLogin, handleClick } = useContext(LoginContext);
  const navigate = useNavigate();
  return (
    <HeaderDiv>
      <HeaderWrapDiv>
        <div className="left">
          <Link to={"/"}>
            <Logo />
          </Link>
          <GnbUl>
            <li className="menu">
              <Link to={"/about"}>다녀ALL</Link>
            </li>
            <li className="menu">
              <Link to={"/guide"}>이용방법</Link>
            </li>
            <li className="menu">
              <Link to={"/planning"}>일정만들기</Link>
            </li>
            <li className="menu">
              <Link to={"/board"}>여행로그</Link>
            </li>
          </GnbUl>
        </div>
        <div className="right">
          {isLogin ? (
            <LoginOutDiv>
              <Link to={"/auth/signup"} className="signup-btn">
                회원가입
              </Link>
              <button
                onClick={() => {
                  navigate("/auth");
                }}
              >
                로그인
              </button>
            </LoginOutDiv>
          ) : (
            <LoginDiv>
              <Link to={"/myinfo"}>마이페이지</Link>
              <ul>
                <li>
                  <Link to={"/myplanlist"}>
                    <BsFillSuitcase2Fill />
                    내일정
                  </Link>
                </li>
                <li>
                  <Link to={"/myinfo"}>
                    <FaUser />
                    내정보
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleClick(false);
                    }}
                  >
                    <RiLogoutBoxRLine />
                    로그아웃
                  </button>
                </li>
              </ul>
            </LoginDiv>
          )}
        </div>
      </HeaderWrapDiv>
    </HeaderDiv>
  );
};

export default Header;
