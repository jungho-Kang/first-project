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
    border-radius: 4px;
    border: 1px solid #dedede;
    outline: transparent;
  }
`;

function CustomInput({ label, type, name, register, errors }) {
  return (
    <TextForm>
      <label htmlFor="">
        <p>{label}</p>
        <input type={type} {...register?.(name)} />
        {errors?.[name] && <p>{errors[name]?.message}</p>}
      </label>
    </TextForm>
  );
}
export default CustomInput;
