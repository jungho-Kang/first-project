import styled from "@emotion/styled";
import { ErrorP, InitMessageP } from "../../pages/mypage/my-info/myinfo";

const TextForm = styled.div`
  padding: 10px 0;
  label {
    font-size: 15px;
    font-weight: 600;
  }
  input {
    width: 100%;
    margin-top: 8px;
    padding: 10px 5px;
    height: 45px;
    line-height: 45px;
    border-radius: 4px;
    border: 1px solid #dedede;
    outline: transparent;
  }
`;

function CustomInput({
  label,
  type,
  name,
  register,
  errors,
  initmessage,
  value,
  onChange,
}) {
  return (
    <TextForm>
      <label htmlFor="">
        <p>{label}</p>
        <input
          type={type}
          {...register?.(name)}
          value={value}
          onChange={onChange}
        />
        {errors?.[name] ? (
          <ErrorP>{errors[name]?.message}</ErrorP>
        ) : (
          <InitMessageP>{initmessage}</InitMessageP>
        )}
      </label>
    </TextForm>
  );
}
export default CustomInput;
