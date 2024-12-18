import styled from "@emotion/styled";
import { WrapDiv } from "../common";
export const HeaderDiv = styled.header`
  padding: 10px 20px;
  height: 68px;
  background-color: #fff;
  color: #333;
  border-bottom: 1px solid #eee;
  background-color: rgba(255, 255, 255, 0.7);
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%; */

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    > a.logo {
      display: block;
      border: 1px solid #bbb;
      background-color: #eee;
      width: 120px;
      height: 38px;
      line-height: 38px;
      text-align: center;
    }
  }
  .right {
    display: flex;
    /* position: relative; */
  }
`;
export const HeaderWrapDiv = styled(WrapDiv)`
  display: flex;
  justify-content: space-between;
`;

export const GnbUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  li {
    text-align: center;
    > a {
      display: block;
      padding: 0 10px;
      min-width: 100px;
      font-weight: 400;
      transition: all 0.3s;
    }
    > a:hover {
      color: #3825e4;
      font-weight: 500;
    }
  }
`;

export const BtnStyle = styled.button``;

export const LoginOutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  * {
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 8px 16px;
  }
  /* display: none; */
`;
export const LoginDiv = styled.div`
  position: relative;
  display: none;
  top: 15px;
  right: 0;
  > a {
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 8px 16px;
  }
`;
