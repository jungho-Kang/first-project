import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaCircleUser, FaUser } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { LoginContext } from "../../contexts/LoginContext";
import Logo from "../Logo";
import {
  GnbUl,
  HeaderDiv,
  HeaderWrapDiv,
  LoginDiv,
  LoginOutDiv,
} from "./headerStyle";

const Header = () => {
  const { isLogin, handleClick } = useContext(LoginContext);
  const [myMenuOpen, setMyMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 로그아웃
  const handleLogOut = () => {
    handleClick(false);
  };
  // 마이페이지 버튼 토글
  const handleMyMenuToggle = () => {
    setMyMenuOpen(!myMenuOpen);
  };

  // 메뉴
  const menuItems = [
    { path: "/about", label: "다녀ALL" },
    { path: "/guide", label: "이용방법" },
    { path: "/planning", label: "일정만들기" },
    { path: "/board", label: "다녀ON" },
  ];
  return (
    <HeaderDiv>
      <HeaderWrapDiv>
        <div className="left">
          <Link to={"/"}>
            <Logo />
          </Link>
          <GnbUl>
            {menuItems.map((item, index) => (
              <li className="menu" key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
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
              <button
                onClick={() => {
                  handleMyMenuToggle();
                }}
              >
                <FaCircleUser />
              </button>
              {myMenuOpen ? (
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
                        handleLogOut();
                      }}
                    >
                      <RiLogoutBoxRLine />
                      로그아웃
                    </button>
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </LoginDiv>
          )}
        </div>
      </HeaderWrapDiv>
    </HeaderDiv>
  );
};

export default Header;
