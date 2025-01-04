import styled from "@emotion/styled";
export const SelectedOption = styled.div`
  width: 90px;
  position: relative;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  text-indent: -20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;

  svg {
    position: absolute;
    right: 12px;
    color: #bbb;
  }
`;
export const OptionsList = styled.div`
  position: absolute;
  top: 35px;
  left: 80px;
  width: 90px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #ddd;
  border-top: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 9;
`;

export const OptionItem = styled.div`
  padding: 10px;
  text-indent: -20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
// 카테고리
export const CateEm = styled.em`
  display: inline-block;
  color: #fff;
  padding: 5px;
  min-width: 40px;
  border-radius: 3px;
  font-size: 12px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;
