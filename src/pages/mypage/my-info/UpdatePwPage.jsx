import { useNavigate } from "react-router-dom";
import BasicBtn from "../../../components/button/BasicBtn";
import CustomInput from "../../../components/input/CustomInput";
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import { BtnAreaDiv, FormDiv, FormInnerDiv, MyPageWrapDiv } from "./myinfo";

function UpdatePwPage() {
  const navigate = useNavigate();
  return (
    <div>
      <MypageTop />

      <MyPageWrapDiv>
        <MypageTab />
        <FormDiv>
          <FormInnerDiv>
            <h3>비밀번호 재설정</h3>

            <CustomInput type={"password"} label={"비밀번호"} />
            <CustomInput type={"password"} label={"비밀번호 확인"} />

            <BtnAreaDiv>
              <BasicBtn
                btnname={"취소"}
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
                btnname={"설정완료"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#5469d4",
                  color: "#fff",
                }}
                onClick={() => {
                  navigate("/myinfo");
                }}
              />
            </BtnAreaDiv>
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default UpdatePwPage;
