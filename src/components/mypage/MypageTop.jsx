import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
// styled
import { MyPageTopDiv } from "./mypage";

const MypageTop = () => {
  const { user } = useContext(LoginContext);
  return (
    <MyPageTopDiv>
      <div className="top">
        <h2 className="tit">My Page</h2>
      </div>
      <div className="user-photo">
        <div className="photo"></div>
        <p className="nick">{user.nickName}</p>
      </div>
    </MyPageTopDiv>
  );
};
export default MypageTop;
