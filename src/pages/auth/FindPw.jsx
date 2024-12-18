import Button from "../../components/button/Button";
import { LayerDiv, LoginDiv } from "../../components/common";
import Input from "../../components/input/Input";
import LayerLogo from "../../components/layer/LayerLogo";
import Inputbtn from "../../components/input/Inputbtn";

function FindPw() {
  return (
    <LoginDiv>
      <LayerDiv>
        {/* 로고 */}
        <LayerLogo />
        {/* input 태그 */}
        <Input label={"Email"} type={"text"}></Input>

        <Inputbtn></Inputbtn>
        {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
        <Button btnname={"확인"}></Button>
      </LayerDiv>
    </LoginDiv>
  );
}

export default FindPw;
