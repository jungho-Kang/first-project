import { useNavigate } from "react-router-dom";

import BasicBtn from "../../../components/button/BasicBtn";
import CustomInput from "../../../components/input/CustomInput";
import CustomInputBtn from "../../../components/input/CustomInputBtn";
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import { BtnAreaDiv, FormDiv, FormInnerDiv, MyPageWrapDiv } from "./myinfo";

function EditProfilePage() {
  const navigate = useNavigate();
  return (
    <div>
      <MypageTop />

      <MyPageWrapDiv>
        <MypageTab />
        <FormDiv>
          <FormInnerDiv>
            <h3>프로필 수정</h3>
            <CustomInput label={"name"} type={"text"} userName={"홍길동"} />
            <CustomInput label={"닉네임"} type={"text"} userName={"크롱오이"} />
            <CustomInput label={"ID"} type={"text"} userName={"tngus52"} />
            <CustomInput
              label={"Email"}
              type={"email"}
              userName={"aa@gmail.com"}
            />
            <CustomInputBtn
              type={"password"}
              label={"비밀번호"}
              btntxt={"비밀번호변경"}
              onClick={() => {
                navigate("/myinfo/updatepw");
              }}
            />

            <BtnAreaDiv>
              <BasicBtn
                btnname={"뒤로가기"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#eee",
                  color: "#555",
                }}
                onClick={() => {
                  navigate("/myinfo");
                }}
              />
              <BasicBtn
                btnname={"회원탈퇴"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#FF5757",
                  color: "#fff",
                }}
                onClick={() => {
                  navigate("/myinfo/deletemember");
                }}
              />
            </BtnAreaDiv>
            <BasicBtn
              btnname={"저장"}
              style={{ marginTop: "25px" }}
              onClick={() => {
                navigate("/myinfo");
              }}
            />
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default EditProfilePage;
