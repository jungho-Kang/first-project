import BasicBtn from "../button/BasicBtn";
import CustomInputBtn from "../input/CustomInputBtn";

const FindPw = () => {
  const handleClickUpdatePw = () => {};

  return (
    <>
      <h3>비밀번호 찾기</h3>
      <span>가입시 등록한 이메일 주소로 인증번호를 발송해 드립니다.</span>

      {/* input btn 태그 */}
      <CustomInputBtn label={"Email"} type={"text"} btntxt={"인증"} />
      <CustomInputBtn label={"인증번호"} type={"text"} btntxt={"확인"} />
      {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
      <BasicBtn
        btnname={"확인"}
        onClick={() => {
          handleClickUpdatePw();
        }}
      ></BasicBtn>
    </>
  );
};

export default FindPw;
