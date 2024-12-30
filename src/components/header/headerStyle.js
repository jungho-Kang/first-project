import styled from "@emotion/styled";
import { WrapDiv } from "../common";
export const HeaderDiv = styled.header`
  padding: 10px 20px;
  height: 68px;
  background-color: #fff;
  color: #333;
  /* border-bottom: 1px solid #eee; */
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: ${props =>
    props.isScrolled
      ? "rgba(0, 0, 0, 0.04) 0px 6px 18px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px"
      : "none"};
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

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
  background-color: transparent;
`;

export const GnbUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  li {
    text-align: center;
    &:nth-of-type(1) a {
      letter-spacing: -0.01em;
    }
    > a {
      display: block;
      padding: 0 10px;
      min-width: 90px;
      font-weight: 600;
      transition: all 0.3s;
      color: #333;
      letter-spacing: 0.05em;
    }
    > a:hover {
      color: #17a1fa;
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
    padding: 2px 16px;
    height: 40px;
    line-height: 36px;
  }
  button {
    background-color: #1270b0;
    color: #fff;
    border-color: #1270b0;
  }
`;
export const LoginDiv = styled.div`
  position: relative;
  top: 6px;
  right: 0;
  z-index: 9;
  > button {
    font-size: 40px;
    color: #1270b0;
    height: 40px;
    border-radius: 100%;
    border: none;
    transition: all 0.3s;
    :hover {
      transform: scale(1.08);
    }
  }

  ul {
    border: 1px solid rgb(211, 211, 211);
    position: absolute;
    right: 0;
    top: 50px;
    overflow: hidden;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    border-radius: 8px;
    li {
      width: 100%;
      > * {
        display: flex;
        gap: 10px;
        width: 160px;
        padding: 12px;
        font-size: 14px;
        background-color: #fefefe;
        color: rgba(0, 0, 0, 0.7);
        transition: all.3s;
        :hover {
          background-color: rgb(238, 247, 255);
          color: #1270b0;
        }
      }
      a {
        border-bottom: 1px solid rgb(241, 241, 241);
      }
      button {
        text-align: left;
        border: none;
        svg {
          transform: translateY(1.2px);
        }
      }
    }
  }
`;
