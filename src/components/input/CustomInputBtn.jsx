import styled from "@emotion/styled";
import { forwardRef } from "react";
import { ErrorP, InitMessageP } from "../../pages/mypage/my-info/myinfo";
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
      min-width: 85px;
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
    flex-grow: 1;
    height: 45px;
    line-height: 45px;
    margin-top: 8px;
    padding: 10px 5px;
    border-radius: 4px;
    border: 1px solid #dedede;
    outline: transparent;
  }
`;

const CustomInputBtn = forwardRef(
  (
    {
      onClick,
      btntxt,
      label,
      type,
      name,
      register,
      errors,
      initmessage,
      value,
      onChange,
      btnstyle,
      btntype,
    },
    ref,
  ) => {
    // console.log(register);
    return (
      <InputBtnArea>
        <label htmlFor="">{label}</label>
        <div>
          <input
            type={type}
            {...register?.(name)}
            value={value}
            onChange={onChange}
            ref={ref}
          />
          <button type={btntype} style={btnstyle} onClick={onClick}>
            {btntxt}
          </button>
        </div>
        {errors?.[name] ? (
          <ErrorP>{errors[name]?.message}</ErrorP>
        ) : (
          <InitMessageP>{initmessage}</InitMessageP>
        )}
      </InputBtnArea>
    );
  },
);
// 화살표함수에 forwardRef로 컴포넌트를 감싸서 경고떠서(실행영항은 없음)
// 컴포넌트이름을 수동으로 설정 해줌
CustomInputBtn.displayName = "CustomInputBtn";
export default CustomInputBtn;
