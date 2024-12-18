import { useNavigate } from "react-router-dom";
import { WrapDiv } from "../../components/common";
import { ImgLi, ImgUl } from "./plan";

function City() {
  const navigate = useNavigate();
  navigate("/planning/schedule");

  return (
    <WrapDiv>
      <h1>일정 계획</h1>
      <ImgUl>
        <ImgLi>서울 이미지</ImgLi>
        <ImgLi>서울 이미지</ImgLi>
        <ImgLi>서울 이미지</ImgLi>
      </ImgUl>
      <ImgUl>
        <ImgLi>서울 이미지</ImgLi>
        <ImgLi>서울 이미지</ImgLi>
        <ImgLi>서울 이미지</ImgLi>
      </ImgUl>
      <ImgUl>
        <ImgLi>서울 이미지</ImgLi>
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
export default City;
