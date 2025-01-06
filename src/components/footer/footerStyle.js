import styled from "@emotion/styled";
import { WrapDiv } from "../common";

export const FooterDiv = styled.footer`
  background: #f9f9f9;
  height: 280px;
`;
export const FooterWrap = styled(WrapDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const FooterTopDiv = styled.div`
  display: flex;
  justify-content: space-between;

  // 푸터 logo nav
  .ft-left {
    display: flex;
    > a {
      width: 140px;
      height: 60px;
      img {
        height: 100%;
      }
    }
    > .ft-nav {
      display: flex;
      align-items: center;
      gap: 30px;
      color: #333;
      font-weight: 600;

      li {
        font-size: 15px;
        position: relative;
        &::before {
          content: "";
          width: 2px;
          height: 12px;
          background-color: #555;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -15px;
        }
        &:last-child::before {
          display: none;
        }
      }
    }
  }
  .sns-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    li {
      a {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        display: flex;
        box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s;

        &:hover {
          background-color: #eee;
        }
        img {
          width: 18px;
        }
      }
    }
  }
`;

export const FooterTxtDiv = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  b {
    font-weight: 500;
    color: #777;
  }
  p {
    color: #999;
    padding: 6px;
  }
`;

export const CopyDiv = styled.div`
  font-size: 14px;
  color: #afb6bc;
`;
