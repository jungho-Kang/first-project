import styled from "@emotion/styled";
import { WrapDiv } from "../../../components/common";

export const MyPageWrapDiv = styled(WrapDiv)`
  padding: 50px 0 160px;
  max-width: 1024px;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormInnerDiv = styled.div`
  max-width: 480px;
  width: 100%;
  h3 {
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    padding: 80px 0 40px;
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

// -------------------------------
export const ErrorP = styled.p`
  display: block;
  margin-top: 5px;
  line-height: 1.3em;
  font-weight: 400;
  color: #ff0000;
`;
export const InitMessageP = styled.p`
  display: block;
  margin-top: 5px;
  line-height: 1.3em;
  font-weight: 400;
  color: #999;
`;
