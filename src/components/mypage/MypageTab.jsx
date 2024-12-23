import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const TabMenuDiv = styled.div`
  ul.tabs {
    margin: 0 auto;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
  }
  li {
    width: 50%;
  }
  a {
    display: block;
    width: 100%;
    text-align: center;
    padding: 13px;
    background-color: #eee;
    color: #777;
    font-weight: 500;
    font-size: 18px;
  }
  li.active a {
    background-color: #5469d4;
    color: #fff;
  }
`;
const MypageTab = () => {
  return (
    <TabMenuDiv>
      <ul className="tabs">
        <li>
          <Link to={"/myplanlist"}>내 일정</Link>
        </li>
        <li className="active">
          <Link to={"/myinfo"}>내 정보</Link>
        </li>
      </ul>
    </TabMenuDiv>
  );
};
export default MypageTab;
