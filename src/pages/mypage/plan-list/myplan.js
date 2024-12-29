import styled from "@emotion/styled";

export const MyplanlistDiv = styled.a`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  /* 아이템 */
  > a {
    border: 1px solid #eee;
    width: calc((100% - 90px) / 4);
    height: 233px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .txt-box {
      h4 {
        font-size: 34px;
        font-weight: 700;
      }
      p {
        text-align: center;
        line-height: 2.3em;
        color: #999;
      }
    }
    .date {
      position: absolute;
      bottom: 10px;
      color: rgba(234, 68, 53, 0.55);
    }
  }
`;

export const TitleAreaDiv = styled.div`
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
      background-color: #ea4335;
    }
    &::before {
      left: -25px;
    }
    &::after {
      right: -25px;
    }
  }
`;
