import styled from "@emotion/styled";

export const MyplanlistDiv = styled.a`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  /* 아이템 */
  a {
    border: 1px solid #eee;
    width: calc((100% - 90px) / 4);
    height: 233px;
    border-radius: 12px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    border: 5px solid #fff;
    position: relative;
    &:hover {
      transform: scale(1.02);
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    }
    &:hover .city-pic {
      transform: scale(1.02) translate(-50%, -50%);
    }
    &:hover button {
      opacity: 1;
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
      opacity: 0.35;
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

export const PlanItemDiv = styled.div``;
// 삭제 버튼
export const DeleteBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 22px;
  height: 22px;
  border-radius: 3px;
  border: 1px solid #bbb;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  color: #777;
  transition: all 0.3s;
  &:hover {
    background-color: #eee;
    color: #555;
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

// 마이플랜 디테일 페이지
export const DetailContentDiv = styled.div`
  /* border: 1px solid; */
  /* padding: 30px 0 0; */
`;

export const ChoiceDiv = styled.div`
  /* border: 1px solid #eee; */
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  position: relative;
  .date {
    font-size: 16px;
    font-weight: 500;
    width: 75px;
    height: 32px;
    border-radius: 5px;
  }
  .cate-btn {
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    button {
      padding: 6px 12px;
      border-radius: 5px;
      border: transparent;
      color: #fff;
      font-size: 14px;
      transition: all 0.3s;
      &:hover {
        opacity: 0.85;
      }
      :nth-child(1) {
        background-color: #333;
      }
      :nth-child(2) {
        background-color: #1270b0;
      }
      :nth-child(3) {
        background-color: #ea4335;
      }
      :nth-child(4) {
        background-color: #fbbc04;
      }
    }
  }
`;

export const TableDiv = styled.div`
  .empty-list {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 460px;
    color: #999;
  }
  /* 컨텐츠의 사이즈 */
  .t-title,
  ul.t-content {
    li {
      text-align: center;
      &:nth-child(1) {
        width: 12%;
      }
      &:nth-child(2) {
        width: 8%;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 10%;
      }
      &:nth-child(5) {
        width: 10%;
      }
      &:nth-child(6) {
        width: 40%;
      }
    }
  }
  /* 테이블 제목 */
  .t-title {
    display: flex;
    align-items: center;
    height: 45px;
    border-radius: 5px;
    padding: 0 20px;
    background-color: #777;
    color: #fff;
  }
  /* 테이블 컨텐츠 */
  > ul.t-content {
    margin: 10px 0;
    padding: 10px;
    height: 440px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    > li.item {
      margin: 6px 0;
      width: 100%;

      width: 100%;
      &:nth-child(2n) {
        background-color: #eee;
      }
      ul {
        width: 100%;
        height: 60px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        li {
          &:nth-child(1) p {
            font-weight: 500;
          }
          &:nth-child(2) p {
          }
          &:nth-child(3) p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            b {
              font-size: 15px;
              font-weight: 600;
              display: block;
              margin-bottom: 3px;
            }
            strong {
              font-size: 12px;
              color: #777;
            }
          }
          &:nth-child(4) p {
          }
          &:nth-child(5) p {
          }
          &:nth-child(6) p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        p {
          padding: 10px 0;
          color: #333;
          font-size: 14px;
        }
      }
    }
  }

  > ul.t-result {
    border-radius: 5px;
    overflow: hidden;
    color: #fff;
    background-color: #555;
    color: #fff;
    display: flex;
    align-items: center;

    li {
      flex: 1;
      text-align: center;
      height: 50px;
      line-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &:nth-of-type(1) {
        background-color: #000;
        color: #fff;
      }
      &:nth-of-type(2n) {
        border-left: 2px solid #777;
      }
      &:nth-of-type(2n)::before {
        content: ":";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

export const TableTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BtnAreaDiv = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  /* margin-top: 20px; */
  a {
    height: 38px;
    line-height: 38px;
    min-width: 80px;
    padding: 0 20px;
    text-align: center;
    border-radius: 5px;
    background-color: #1270b0;
    color: #fff;
    &:nth-of-type(1) {
      background-color: #333;
    }
  }
`;
