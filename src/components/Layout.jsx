import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// comp
import Footer from "./footer/Footer";
import Header from "./header/Header";
// style
import { MainDiv } from "./common";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { pathname } = useLocation();

  // 헤더와 푸터 숨기기
  const hideLayoutRoutes = [
    "/auth",
    "/planning/makeplanner",
    "/myplanlist/editplanner",
  ];

  // 스크롤 이벤트
  useEffect(() => {
    // console.log("컴포넌트 마운트 시 스크롤 위치:");
    window.addEventListener(
      "scroll",
      function () {
        setIsScrolled(true);
      },
      true,
    );
  }, []);

  useEffect(() => {
    if (!pathname.startsWith("/planning/makeplanner")) {
      sessionStorage.removeItem("plan_info");
    }
  }, [pathname]);

  const hideLayout = hideLayoutRoutes.some(route => pathname.startsWith(route));
  // console.log(pathname);
  return (
    <div>
      {!hideLayout && <Header isScrolled={isScrolled} />}
      <MainDiv>{children}</MainDiv>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default Layout;
