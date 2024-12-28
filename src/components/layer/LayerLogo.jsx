import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const FormLogo = styled.div`
  .logo {
    display: flex;
    justify-content: center;
    a {
      display: block;
      width: 150px;
      height: 50px;
      line-height: 50px;
      font-size: 0;
      background: url(/images/logo.png) no-repeat center center / contain;
    }
  }

  > p {
    text-align: center;
    padding: 0px 0 40px;
    color: #777;
  }
`;
const LayerLogo = () => {
  return (
    <FormLogo Link to={"/"}>
      <div className="logo">
        <Link to={"/"}>다녀올로고</Link>
      </div>
      <p>다녀올 여행지 플래너, 다녀ALL</p>
    </FormLogo>
  );
};
export default LayerLogo;
