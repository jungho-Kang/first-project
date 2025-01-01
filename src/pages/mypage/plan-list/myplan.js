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
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    transition: all 0.3s ease;
    border: 5px solid #fff;
    &:hover {
      transform: scale(1.02);
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    }
    &:hover .city-pic {
      transform: scale(1.02) translate(-50%, -50%);
    }

    .city-pic {
      position: absolute;
      object-fit: cover;
      top: 50%;
      left: 50%;
      transform: scale(1) translate(-50%, -50%);
      transition: all 0.3s ease;
    }
    .city-color {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.88;
      transition: all 0.3s ease;
    }
    .txt-box {
      position: absolute;

      h4 {
        font-size: 34px;
        font-weight: 700;
        color: #fff;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      }
      p {
        text-align: center;
        line-height: 2.5em;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 600;
        /* text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.35); */
      }
    }
    .date {
      position: absolute;
      bottom: 10px;
      /* color: rgba(234, 68, 53, 0.55); */
      color: rgb(255, 255, 255, 0.8);
      font-weight: 700;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
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
