import styled from "@emotion/styled";

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

const ErrorP = styled.p`
  display: block;
  margin-top: 5px;
  line-height: 1.3em;
  font-weight: 400;
  color: #ff0000;
`;
const InitMessageP = styled.p`
  display: block;
  margin-top: 5px;
  line-height: 1.3em;
  font-weight: 400;
  color: #999;
`;

function CustomInput({ label, type, name, register, errors, initmessage }) {
  return (
    <TextForm>
      <label htmlFor="">
        <p>{label}</p>
        <input type={type} {...register?.(name)} />
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
