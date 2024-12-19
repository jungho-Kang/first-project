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
    color: #3450da;
  }
  b {
    font-weight: 600;
    color: #3450da;
    font-size: 14px;
  }
`;

const CustomCheck = ({ label, text }) => {
  return (
    <CheckBoxDiv>
      <label htmlFor={label}>
        <input type="checkbox" name="" id={label} />
        <em>
          <FaCheck />
        </em>
        {text} <b>(필수)</b>
      </label>
    </CheckBoxDiv>
  );
};

export default CustomCheck;
