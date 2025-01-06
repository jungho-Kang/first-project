import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("스크롤시킴");
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
