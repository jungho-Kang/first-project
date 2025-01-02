import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
// comp
import Header from "./header/Header";
import Footer from "./footer/Footer";
// style
import { MainDiv } from "./common";

const Layout = ({ children, paramPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // 스크롤 이벤트
  const handleScroll = useCallback(() => {
    // console.log("현재 스크롤 위치:", window.scrollY);
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);
  useEffect(() => {
    // console.log("컴포넌트 마운트 시 스크롤 위치:", window.scrollY);
    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  const { pathname } = useLocation();

  // console.log(pathname);
  return (
    <div>
      {pathname === "/auth" ||
      pathname === "/auth/findpw" ||
      pathname === "/auth/signup" ||
      pathname === `/planning/makeplanner/${paramPath}` ? null : (
        <Header isScrolled={isScrolled} />
      )}
      <MainDiv>{children}</MainDiv>
      {pathname === "/auth" ||
      pathname === "/auth/findpw" ||
      pathname === "/auth/signup" ||
      pathname === `/planning/makeplanner/${paramPath}` ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
