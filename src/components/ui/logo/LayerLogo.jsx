import { Link } from "react-router-dom";
import { FormLogo } from "./logo";

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
