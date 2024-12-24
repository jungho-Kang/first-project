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
  z-index: 9;
  gap: 20px;
  * {
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 8px 16px;
  }
`;
export const LoginDiv = styled.div`
  position: relative;
  top: 15px;
  right: 0;
  z-index: 9;
  > a {
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 8px 16px;
  }

  ul {
    border: 1px solid #bbb;
    position: absolute;
    right: 0;
    top: 30px;
    overflow: hidden;

    border-radius: 8px;
    li {
      width: 100%;

      a {
        background-color: #fefefe;
        display: block;
        width: 160px;
        padding: 12px;
        border-bottom: 1px solid #bbb;
      }
      button {
        width: 160px;
        padding: 12px;
        text-align: left;
        border: none;
        background-color: #fefefe;
      }
    }
  }
`;
