import { Link, useNavigate } from "react-router-dom";
import { TitleDiv, WrapDiv } from "../../components/common";
import { ImgLi, ImgUl } from "./plan";

function CityPage() {
  // const navigate = useNavigate();
  return (
    <WrapDiv>
      <TitleDiv>일정 계획</TitleDiv>
      <ImgUl>
        <Link to={`/planning/schedule/1`}>
          <ImgLi>서울 이미지</ImgLi>
        </Link>
        <ImgLi>서울 이미지</ImgLi>
        <ImgLi>서울 이미지</ImgLi>
      </ImgUl>
      <ImgUl>
        <ImgLi>서울 이미지</ImgLi>
        <ImgLi>서울 이미지</ImgLi>
        <ImgLi>서울 이미지</ImgLi>
      </ImgUl>
    </WrapDiv>
  );
}
export default CityPage;
