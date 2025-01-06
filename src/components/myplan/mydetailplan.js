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

// 메모팝업
export const MemoPopupDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100%;
  height: 100vh;
  /* background-color: rgba(255, 255, 255, 0.2); */
  .layer {
    position: relative;
    max-width: 420px;
    width: 100%;
    /* min-height: 550px; */
    background-color: #f6faff;
    border-radius: 12px;
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    padding: 55px 30px;
    h4.tit {
      text-align: center;
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 30px;
      word-break: keep-all;
      line-height: 1.2em;
      em {
        color: rgb(0, 119, 255);
      }
    }

    div {
      border: 1px solid #eee;

      padding: 10px;
      b {
        font-weight: 400;
        color: #555;
      }
      p {
        margin-top: 0.6em;
        font-size: 14px;
        font-weight: 500;
        color: rgb(0, 119, 255);
      }
    }
    .scheduleInfo {
      /* background: rgb(231, 242, 255); */
      background: #eee;
      > div {
        background: #fff;
        b {
          font-size: 14px;
        }
      }
    }
    .price {
      background: rgb(231, 242, 255);
      display: flex;
      align-items: center;
      gap: 10px;
      /* border: 1px solid rgb(0, 119, 255); */
      margin: 10px 0;

      > div {
        width: 50%;
        text-align: center;
        background: #fff;
        border: 2px solid rgb(155, 202, 255);

        p {
        }
      }
    }
    .memo {
      background: #fff;
      border: 1px solid rgb(155, 202, 255);
      b {
        display: block;
        margin-bottom: 0.6em;
      }
      span {
        display: block;
        font-size: 14px;
        line-height: 1.4em;
        height: 78px;
        color: #777;
        overflow-y: auto;
        word-break: keep-all;
      }
    }
  }
  button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-color: transparent;
    color: #fff;
    background-color: rgb(53, 53, 53);
    transition: all 0.3s;
    &:hover {
      background-color: rgb(117, 117, 117);
    }
  }
`;
