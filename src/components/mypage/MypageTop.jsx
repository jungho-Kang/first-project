import styled from "@emotion/styled";
const MypageTop = () => {
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
  return (
    <MyPageTopDiv>
      <div className="top">
        <h2 className="tit">회원탈퇴</h2>
      </div>
      <div className="user-photo">
        <div className="photo"></div>
        <p className="nick">User52</p>
      </div>
    </MyPageTopDiv>
  );
};
export default MypageTop;
