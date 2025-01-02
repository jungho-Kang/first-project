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

  useEffect(() => {
    console.log("컴포넌트 마운트 시 스크롤 위치:");
    window.addEventListener(
      "scroll",
      function () {
        setIsScrolled(true);
      },
      true,
    );
  }, []);


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
