import { useNavigate } from "react-router-dom";
import { PopupDiv } from "./popup";

const ConfirmPopup = ({ style, onClose, message, popupTit, onClickOk }) => {
  const navigate = useNavigate();

  return (
    <PopupDiv>
      <div className="layer">
        <h1>{popupTit}</h1>
        <span style={style}>{message}</span>
        <div className="btn-area">
          <button className="btn-close" onClick={onClose}>
            취소
          </button>
          <button className="btn-confirm" onClick={onClose}>
            확인
          </button>
        </div>
      </div>
    </PopupDiv>
  );
};
export default ConfirmPopup;
