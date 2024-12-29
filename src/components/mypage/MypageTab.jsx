import { NavLink } from "react-router-dom";
import { TabMenuDiv } from "./mypage";

const MypageTab = () => {
  return (
    <TabMenuDiv>
      <ul className="tabs">
        {/* 내일정 */}
        <li>
          <NavLink
            to="/myplanlist"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            내 일정
          </NavLink>
        </li>
        {/* 내정보 */}
        <li>
          <NavLink
            to="/myinfo"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            내 정보
          </NavLink>
        </li>
      </ul>
    </TabMenuDiv>
  );
};

export default MypageTab;
