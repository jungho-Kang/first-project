import ConfirmPopup from "../components/popup/ConfirmPopup";

import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popup, setPopup] = useState({
    inVisible: false,
    tit: "",
    message: "",
    onConfirm: null,
    onCancel: null,
    conFirmTxt: "확인",
    cancelTxt: "취소",
  });

  const showPopup = ({
    tit,
    message,
    onConfirm,
    onCancel,
    confirmTxt,
    cancelTxt,
  }) => {
    setPopup({
      isVisible: true,
      tit,
      message,
      onConfirm: onConfirm || closePopup,
      onCancel: onCancel || closePopup,
      confirmTxt: confirmTxt || "확인",
      cancelTxt: cancelTxt || "취소",
    });
  };

  const closePopup = () => {
    setPopup(prev => ({ ...prev, isVisible: false }));
  };

  // 페이지 로드 시 sessionStorage에서 값 읽어오기
  useEffect(() => {}, []);

  return (
    <PopupContext.Provider
      value={{
        popup,
        setPopup,
        showPopup,
        closePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
