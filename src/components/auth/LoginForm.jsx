import { Link } from "react-router-dom";
import { AgreementDiv } from "../../pages/auth/login";
import BasicBtn from "../button/BasicBtn";
import { JoinDiv } from "../common";
import CustomInput from "../input/CustomInput";
import CustomInputBtn from "../input/CustomInputBtn";
import LayerLogo from "../layer/LayerLogo";

const LoginForm = ({ formData, handleChangeFormData, register, errors }) => {
  return (
    <AgreementDiv style={{ padding: "30px 200px 100px" }}>
      <LayerLogo />
      <h2>회원가입</h2>
      <div className="form">
        <CustomInput
          label={"NickName"}
          type={"text"}
          name={"nickName"}
          value={formData.nickName}
          onChange={e => {
            handleChangeFormData(e);
          }}
          register={register}
          errors={errors}
        />
        <CustomInput
          label={"Name"}
          type={"text"}
          name={"name"}
          value={formData.name}
          onChange={e => {
            handleChangeFormData(e);
          }}
          errors={errors}
          register={register}
        />
        <CustomInputBtn
          label={"Email"}
          type={"email"}
          btntxt={"인증번호"}
          name={"email"}
          value={formData.email}
          onChange={e => {
            handleChangeFormData(e);
          }}
          register={register}
          errors={errors}
        />
        <CustomInputBtn
          name={"emailassign"}
          label={"인증코드"}
          type={"text"}
          btntxt={"확인"}
          register={register}
          errors={errors}
        />
        <CustomInput
          label={"Password"}
          type={"password"}
          name={"upw"}
          value={formData.upw}
          onChange={e => {
            handleChangeFormData(e);
          }}
          register={register}
          errors={errors}
        />
        <CustomInput
          label={"Password 확인"}
          type={"password"}
          name={"pwconfirm"}
          register={register}
          errors={errors}
        />
        <BasicBtn btnname={"확인"} />
        <JoinDiv>
          <Link to={"/auth"}>로그인화면 이동</Link>
        </JoinDiv>
      </div>
    </AgreementDiv>
  );
};
export default LoginForm;
