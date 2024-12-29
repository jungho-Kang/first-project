import { useNavigate } from "react-router-dom";
import { PopupDiv } from "./popup";

const ConfirmPopup = ({ onClose, navi }) => {
  const navigate = useNavigate();

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
