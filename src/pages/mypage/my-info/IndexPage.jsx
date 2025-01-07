import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../contexts/LoginContext";
// comp
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import { BtnBasic } from "../../../components/common";
// styled
import {
  BtnAreaDiv,
  FormDiv,
  FormInnerDiv,
  FormItemDiv,
  MyPageWrapDiv,
} from "./myinfo";

function IndexPage() {
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);
  // console.log(user);
  return (
    <div>
      <MypageTop />

      <MyPageWrapDiv>
        <MypageTab />
        <FormDiv>
          <FormInnerDiv>
            {/* 타이틀 */}
            <div className="tit-area">
              <h3>프로필</h3>
            </div>

            {/* 프로필정보 */}
            <FormItemDiv>
              <p>Name</p>
              <span>{user.name}</span>
            </FormItemDiv>
            <FormItemDiv>
              <p>NickName</p>
              <span>{user.nickName}</span>
            </FormItemDiv>
            <FormItemDiv>
              <p>Email</p>
              <span>{user.email}</span>
            </FormItemDiv>

            {/* 버튼 - 비밀번호 수정 , 닉네임 수정 */}
            <BtnAreaDiv>
              <BtnBasic
                style={{ backgroundColor: "#232a4f", marginTop: 30 }}
                onClick={() => {
                  navigate("/myinfo/updatepw");
                }}
              >
                비밀번호 변경
              </BtnBasic>
              <BtnBasic
                style={{ backgroundColor: "#1180FF", marginTop: 30 }}
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
