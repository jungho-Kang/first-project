import { useNavigate } from "react-router-dom";
import { PopupDiv } from "./popup";

const ConfirmPopup = ({ style, message }) => {
  // const navigate = useNavigate();

  return (
    <PopupDiv>
      <div className="layer">
        {/* <h1>{popup.tit}</h1> */}
        <span style={style}>{message}</span>
        <div className="btn-area">
          {/* <button className="btn-close" onClick={onCancel}>
            취소
          </button> */}
          {/* <button className="btn-confirm" onClick={onConfirm}>
            확인
          </button> */}
        </div>
      </div>
    </PopupDiv>
  );
};
export default ConfirmPopup;
