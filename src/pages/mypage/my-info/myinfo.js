import styled from "@emotion/styled";
import { WrapDiv } from "../../../components/common";

export const MyPageWrapDiv = styled(WrapDiv)`
  padding: 80px 0 160px;
  max-width: 1024px;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormInnerDiv = styled.div`
  max-width: 480px;
  width: 100%;
  .tit-area {
    padding: 80px 0 60px;
    text-align: center;
    h3 {
      display: inline-block;
      position: relative;
      font-weight: 600;
      font-size: 28px;

      &::before,
      &::after {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: #1180ff;
      }
      &::before {
        left: -25px;
      }
      &::after {
        right: -25px;
      }
    }
  }
`;

// 프로필 페이지
// 폼 모양 (input 아님)
export const FormItemDiv = styled.div`
  margin-bottom: 26px;
  p {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  span {
    display: block;
    border: 1px solid #dedede;
    border-radius: 4px;
    padding: 12px 10px;
  }
`;

export const BtnAreaDiv = styled.div`
  display: flex;
  gap: 15px;
`;
export const WarningBoxDiv = styled.div`
  padding: 30px;
  background-color: #f3f3f3;
  border-radius: 5px;
  line-height: 1.2em;
  word-break: keep-all;
  margin-bottom: 20px;

  p {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
