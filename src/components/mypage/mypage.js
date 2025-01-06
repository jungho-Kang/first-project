import styled from "@emotion/styled";
// 마이페이지 탑
export const MyPageTopDiv = styled.div`
  width: 100%;
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    background-color: #1270b0;
    h2 {
      font-size: 38px;
      font-weight: 500;
      color: #fff;
      text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
    }
  }

  .user-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    .photo {
      width: 85px;
      height: 85px;
      border-radius: 100%;
      border: 3px solid #eee;
      margin-top: -45px;
      background: #1270b0 url(/images/icon-plane.svg) no-repeat center center /
        75%;
    }
    p {
      font-size: 20px;
      text-align: center;
      font-weight: 600;
    }
  }
`;

// 마이페이지 탭
export const TabMenuDiv = styled.div`
  ul.tabs {
    margin: 0 auto;
    border-radius: 12px;
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
  li a.active {
    background-color: #1180ff;
    color: #fff;
  }
`;
