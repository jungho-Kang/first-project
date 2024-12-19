import styled from "@emotion/styled";
const BtnBasic = styled.button`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  border-radius: 5px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #fff;
  background-color: #5469d4;
  transition: all 0.3s;
  border: 1px solid transparent;
  margin-top: 40px;
  :hover {
    opacity: 0.8;
  }
`;
const Button = ({ btnname, onClick, Bg, color, mt, type }) => {
  return (
    <BtnBasic
      onClick={onClick}
      type={type}
      style={{ backgroundColor: Bg, color: color, marginTop: mt }}
    >
      {btnname}
    </BtnBasic>
  );
};
export default Button;
