import styled from "@emotion/styled";

const Popup = ({ isOpen, onClose, message, onConfirm, type = "alert" }) => {
  if (!isOpen) {
    console.log("팝업 안 뜸: isOpen이 false");
    return null;
  }

  return (
    <PopupOverlay>
      <PopupContent>
        <h3>알림</h3>
        <p>{message}</p>
        {type === "confirm" ? (
          <ButtonGroup>
            <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
            <CancelButton onClick={onClose}>취소</CancelButton>
          </ButtonGroup>
        ) : (
          <Button onClick={onClose}>확인</Button>
        )}
      </PopupContent>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: white;
  min-width: 320px;
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;

  h3 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #000;
    font-weight: 600;
  }

  p {
    margin-bottom: 25px;
  }
`;

const Button = styled.button`
  padding: 10px 46px;
  background-color: #1270b0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

export default Popup;
