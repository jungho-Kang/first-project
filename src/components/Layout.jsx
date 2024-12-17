import Header from "./header/Header";
import Footer from "./footer/Footer";
import { MainDiv } from "./common";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainDiv>{children}</MainDiv>
      <Footer />
    </div>
  );
};

export default Layout;
