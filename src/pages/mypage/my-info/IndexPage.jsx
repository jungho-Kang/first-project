import FormItem from "../../../components/layer/FormItem";
import BasicBtn from "../../../components/button/BasicBtn";
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import { BtnAreaDiv, FormDiv, FormInnerDiv, MyPageWrapDiv } from "./myinfo";
import { useNavigate } from "react-router-dom";

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
            <FormItem label={"name"} userName={"홍길동"} />
            <FormItem label={"닉네임"} userName={"크롱오이"} />
            <FormItem label={"Email"} userName={"aa@gmail.com"} />
            <FormItem label={"ID"} userName={"tngus52"} />
            <BtnAreaDiv>
              <BasicBtn
                btnname={"비밀번호 변경"}
                style={{ backgroundColor: "232a4f" }}
                onClick={() => {
                  navigate("/myinfo/updatepw");
                }}
              />
              <BasicBtn
                btnname={"회원정보 수정"}
                onClick={() => {
                  navigate("/myinfo/editprofile");
                }}
              />
            </BtnAreaDiv>
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default IndexPage;
