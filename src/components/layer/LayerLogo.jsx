import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const FormLogo = styled.div`
  .logo {
    display: flex;
    justify-content: center;
    a {
      display: block;
      width: 140px;
      height: 40px;
      line-height: 40px;
      background-color: #eee;
      text-align: center;
    }
  }

  > p {
    text-align: center;
    padding: 10px 0 40px;
    color: #777;
  }
`;
const LayerLogo = () => {
  return (
    <FormLogo>
      <div className="logo">
        <Link to={"/"}>다녀올로고</Link>
      </div>
      <p>다녀올 여행지 플래너, 다녀ALL</p>
    </FormLogo>
  );
};
export default LayerLogo;
