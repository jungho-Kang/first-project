import styled from "@emotion/styled";
// 확인 팝업
export const PopupDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .layer {
    background-color: #fff;
    padding: 40px;
    max-width: 380px;
    width: 100%;
    min-height: 200px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    h1 {
      text-align: center;
      font-weight: 600;
      font-size: 22px;
      color: rgba(0, 0, 0, 0.75);
    }
    span {
      line-height: 1.5em;
      display: block;
      color: #555;
      padding: 35px 0;
      font-size: 15px;
      word-break: keep-all;
      /* text-align: center; */
    }

    .btn-area {
      display: flex;
      gap: 10px;
      button {
        width: 50%;
        height: 40px;
        border-radius: 5px;
        border: none;
        transition: all 0.3s;
        &:hover {
          opacity: 0.8;
        }
      }
      .btn-close {
      }
      .btn-confirm {
        background-color: #5367d1;
        color: #fff;
      }
    }
  }
`;
