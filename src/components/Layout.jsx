import Header from "./header/Header";
import Footer from "./footer/Footer";
import { MainDiv } from "./common";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      {pathname === "/auth" ||
      pathname === "/auth/findpw" ||
      pathname === "/auth/signup" ||
      pathname === "/planning/makeplanner" ? null : (
        <Header />
      )}
      <MainDiv>{children}</MainDiv>
      {pathname === "/auth" ||
      pathname === "/auth/findpw" ||
      pathname === "/auth/signup" ||
      pathname === "/planning/makeplanner" ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
