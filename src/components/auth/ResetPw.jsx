import Button from "../button/BasicBtn";
import CustomInputBtn from "../input/CustomInput";

const ResetPw = () => {
  const handleClickUpdatePw = () => {};
  return (
    <div>
      <h3>비밀번호 재설정</h3>
      <span>새로운 비밀번호를 등록해 주세요.</span>
      {/* input btn 태그 */}
      <CustomInputBtn label={"비밀번호"} type={"password"} />
      <CustomInputBtn label={"비밀번호 확인"} type={"password"} />
      {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
      <Button
        btnname={"확인"}
        onClick={() => {
          handleClickUpdatePw();
        }}
      ></Button>
    </div>
  );
};

export default ResetPw;
