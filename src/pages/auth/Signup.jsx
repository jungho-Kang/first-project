import Button from "../../components/button/Button";
import { WrapDiv } from "../../components/common";
import Checkbox from "../../components/input/Checkbox";
import LayerLogo from "../../components/layer/LayerLogo";

function Signup() {
  return (
    <div>
      <WrapDiv>
        {/* 로고 */}
        <LayerLogo />
        <h2>다녀올 회원약관동의</h2>

        <Button btnname={"네 모두 동의 합니다."} />
        <Checkbox label={"agree01"} text={"본인은 만 14세 이상입니다"} />
        <Checkbox label={"agree02"} text={"개인정보 수집에 동의합니다"} />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          similique veritatis. Facilis non nihil aperiam reiciendis perferendis
          veritatis deserunt optio blanditiis. Nobis distinctio fuga
          consequuntur velit quasi. Magni, eaque.
        </div>
        <Checkbox label={"agree03"} text={"이용약관에 동의합니다"} />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          similique veritatis. Facilis non nihil aperiam reiciendis perferendis
          veritatis deserunt optio blanditiis. Nobis distinctio fuga
          consequuntur velit quasi. Magni, eaque.
        </div>
        <Button btnname={"회원가입 완료"} />
      </WrapDiv>
    </div>
  );
}

export default Signup;
