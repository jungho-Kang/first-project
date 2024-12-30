import { useNavigate } from "react-router-dom";
import BasicBtn from "../../../components/button/BasicBtn";
import CustomInput from "../../../components/input/CustomInput";
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import {
  BtnAreaDiv,
  FormDiv,
  FormInnerDiv,
  MyPageWrapDiv,
  WarningBoxDiv,
} from "./myinfo";

function DeleteMemberPage() {
  const navigate = useNavigate();
  return (
    <div>
      <MypageTop />

      <MyPageWrapDiv>
        <MypageTab />
        <FormDiv>
          <FormInnerDiv>
            <h3>회원탈퇴</h3>
            <WarningBoxDiv>
              <p>회원탈퇴 안내사항</p>
              <span>
                회원 정보 및 여행 일정 데이터 등 개인 서비스 이용 기록은 탈퇴
                즉시 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.
              </span>
            </WarningBoxDiv>
            <CustomInput type={"password"} label={"비밀번호"} />

            <BtnAreaDiv>
              <BasicBtn
                btnname={"취소"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#EEE",
                  color: "#555",
                }}
                onClick={() => {
                  navigate("/myinfo");
                }}
              />
              <BasicBtn
                mt={"25px"}
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
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default DeleteMemberPage;
