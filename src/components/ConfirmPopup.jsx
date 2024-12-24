import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const ConfirmPopup = ({ onClose, navi }) => {
  const navigate = useNavigate();

  const PopupDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    .layer {
      background-color: #fff;
      padding: 50px;
      max-width: 460px;
      min-height: 200px;
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

      h1 {
        text-align: center;
        font-weight: 500;
        font-size: 22px;
      }
      span {
        line-height: 1.5em;
        display: block;
        color: #555;
        padding: 20px 0 30px;
        font-size: 14px;
      }

      .btn-area {
        display: flex;
        gap: 10px;
        button {
          width: 50%;
          height: 45px;
          border-radius: 4px;
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
  console.log(navi);
  return (
    <PopupDiv>
      <div className="layer">
        <h1>팝업제목</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          quidem sit. Excepturi nobis doloribus corrupti?
        </span>
        <div className="btn-area">
          <button className="btn-close" onClick={onClose}>
            취소
          </button>
          <button
            className="btn-confirm"
            onClick={() => {
              navigate(navi);
            }}
          >
            확인
          </button>
        </div>
      </div>
    </PopupDiv>
  );
};
export default ConfirmPopup;
