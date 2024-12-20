import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { WrapDiv } from "../../../components/common";

const MyPageTopDiv = styled.div`
  width: 100%;

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    background-color: #5469d4;
    h2 {
      font-size: 38px;
      font-weight: 500;
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }
  }

  .user-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    .photo {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      border: 3px solid #fff;
      margin-top: -40px;
      background-color: #5469d4;
    }
    p {
      font-size: 20px;
      text-align: center;
      font-weight: 600;
    }
  }
`;
const MyPageWrapDiv = styled(WrapDiv)`
  padding: 50px 0 120px;
`;
const TabMenuDiv = styled.div`
  ul.tabs {
    margin: 0 auto;
    max-width: 1024px;
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
function IndexPage() {
  return (
    <div>
      <MyPageTopDiv>
        <div className="top">
          <h2 className="tit">회원정보</h2>
        </div>
        <div className="user-photo">
          <div className="photo"></div>
          <p className="nick">User52</p>
        </div>
      </MyPageTopDiv>

      <MyPageWrapDiv>
        <TabMenuDiv>
          <ul className="tabs">
            <li>
              <Link to={"/"}>내 일정</Link>
            </li>
            <li className="active">
              <Link to={"/"}>내 정보</Link>
            </li>
          </ul>
        </TabMenuDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default IndexPage;
