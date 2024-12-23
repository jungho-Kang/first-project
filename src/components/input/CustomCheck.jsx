import styled from "@emotion/styled";
import { FaCheck } from "react-icons/fa";
const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
  > * {
    cursor: pointer;
  }
  input {
    display: none;
  }
  em {
    color: #ddd;
    margin-right: 10px;
  }
  input:checked + em {
    color: #ff0000;
  }
  b {
    color: #3450da;
    font-size: 14px;
  }
  span {
    font-weight: 600;
  }
`;

const CustomCheck = ({ label, text, checked, onChange }) => {
  return (
    <CheckBoxDiv>
      <label htmlFor={label}>
        <input
          type="checkbox"
          id={label}
          checked={checked}
          onChange={onChange}
        />
        <em>
          <FaCheck />
        </em>
        <span>
          {text} <b>(필수)</b>
        </span>
      </label>
    </CheckBoxDiv>
  );
};

export default CustomCheck;
