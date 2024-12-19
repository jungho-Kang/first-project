import Button from "../button/Button";
import Inputbtn from "../input/Inputbtn";

const FindPassword = () => {
  const handleClickUpdatePw = () => {};

  return (
    <>
      <h3>비밀번호 찾기</h3>
      <span>가입시 등록한 이메일 주소로 인증번호를 발송해 드립니다.</span>

      {/* input btn 태그 */}
      <Inputbtn label={"Email"} type={"text"} btntxt={"인증"} />
      <Inputbtn label={"인증번호"} type={"text"} btntxt={"확인"} />
      {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
      <Button
        btnname={"확인"}
        onClick={() => {
          handleClickUpdatePw();
        }}
      ></Button>
    </>
  );
};

export default FindPassword;
