import { useNavigate } from "react-router-dom";
import { PopupDiv } from "./popup";
import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";

const ConfirmPopup = ({ style }) => {
  const navigate = useNavigate();
  const { popup } = useContext(PopupContext);
  if (!popup.isVisible) {
    return null;
  }

  return (
    <PopupDiv>
      <div className="layer">
        <h1>{popup.tit}</h1>
        <span style={style}>{popup.message}</span>
        <div className="btn-area">
          <button className="btn-close" onClick={popup.onCancel}>
            {popup.cancelTxt}
          </button>
          <button className="btn-confirm" onClick={popup.onConfirm}>
            {popup.confirmTxt}
          </button>
        </div>
      </div>
    </PopupDiv>
  );
};
export default ConfirmPopup;
