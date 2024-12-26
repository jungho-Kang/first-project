import FormItem from "../../../components/layer/FormItem";
import BasicBtn from "../../../components/button/BasicBtn";
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import { BtnAreaDiv, FormDiv, FormInnerDiv, MyPageWrapDiv } from "./myinfo";
import { useNavigate } from "react-router-dom";
import { BtnBasic } from "../../../components/common";

function IndexPage() {
  const navigate = useNavigate();
  return (
    <div>
      <MypageTop />

      <MyPageWrapDiv>
        <MypageTab />
        <FormDiv>
          <FormInnerDiv>
            <h3>프로필</h3>
            <FormItem label={"닉네임"} userName={"크롱오이"} />
            <FormItem label={"name"} userName={"홍길동"} />
            <FormItem label={"Email"} userName={"aa@gmail.com"} />
            {/* 비밀번호 수정 , 닉네임 수정 */}
            <BtnAreaDiv>
              <BtnBasic
                style={{ backgroundColor: "#232a4f" }}
                onClick={() => {
                  navigate("/myinfo/updatepw");
                }}
              >
                비밀번호 변경
              </BtnBasic>
              <BtnBasic
                onClick={() => {
                  navigate("/myinfo/editprofile");
                }}
              >
                닉네임 수정
              </BtnBasic>
            </BtnAreaDiv>
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default IndexPage;
