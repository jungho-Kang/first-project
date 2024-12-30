import { BtnBasic } from "./button";

const BasicBtn = ({ btnname, onClick, type, style }) => {
  return (
    <BtnBasic onClick={onClick} type={type} style={style}>
      {btnname}
    </BtnBasic>
  );
};
export default BasicBtn;
