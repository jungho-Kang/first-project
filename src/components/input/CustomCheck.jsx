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
    color: #757575;
    margin-right: 10px;
  }
  input:checked + em {
    color: #ff0062;
  }
  b {
    font-weight: 600;
    color: #3450da;
    font-size: 14px;
  }
`;

const CustomCheck = ({ label, text, checked, onChange }) => {
  return (
    <CheckBoxDiv>
      <label htmlFor={label}>
        <input
          type="checkbox"
          name=""
          id={label}
          checked={checked}
          onChange={onChange}
        />
        <em>
          <FaCheck />
        </em>
        {text} <b>(필수)</b>
      </label>
    </CheckBoxDiv>
  );
};

export default CustomCheck;
