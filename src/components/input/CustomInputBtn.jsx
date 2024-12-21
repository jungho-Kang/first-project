import styled from "@emotion/styled";

const CustomInputBtn = ({ label, type, btntxt, name, register, errors }) => {
  //   const CodeInputDiv = styled.div`
  //     border: 1px solid #000;
  //   `;

  const InputBtnArea = styled.div`
    padding: 10px 0;
    label {
      font-size: 15px;
      font-weight: 600;
    }
    > div {
      display: flex;
      align-items: end;
      gap: 10px;
      button {
        font-size: 16px;
        font-weight: 600;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        background-color: #5469d4;
        transition: all 0.3s;
        border: 1px solid transparent;

        padding: 0px 15px;
        height: 45px;
        line-height: 45px;
      }
    }
    input {
      width: calc(70%);
      height: 45px;
      line-height: 45px;
      margin-top: 8px;
      padding: 10px 5px;
      border-radius: 4px;
      border: 1px solid #dedede;
      outline: transparent;
    }
  `;
  // console.log(register);
  return (
    <InputBtnArea>
      <label htmlFor="">{label}</label>
      <div>
        <input type={type} {...register?.(name)} />
        <button>{btntxt}</button>
      </div>
      {errors?.[name] && <p>{errors[name]?.message}</p>}
    </InputBtnArea>
  );
};
export default CustomInputBtn;
