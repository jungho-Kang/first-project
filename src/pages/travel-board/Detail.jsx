import { LineDiv, TitleDiv, WrapDiv } from "../../components/common";
import PlanListResult from "../../components/list-result/PlanListResult";
import { PostCity } from "../planning/plan";
import { FlexLayoutDiv, SubTitleDiv } from "./board";

function Detail() {
  return (
    <WrapDiv>
      <TitleDiv>여행로그</TitleDiv>
      <FlexLayoutDiv>
        <SubTitleDiv>2박3일 부산여행</SubTitleDiv>
        <PostCity>부산</PostCity>
      </FlexLayoutDiv>
      <LineDiv></LineDiv>
      <PlanListResult></PlanListResult>
    </WrapDiv>
  );
}

export default Detail;
