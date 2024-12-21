import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { WrapDiv } from "../../../components/common";
import BasicBtn from "../../../components/button/BasicBtn";
import CustomInput from "../../../components/input/CustomInput";
import CustomInputBtn from "../../../components/input/CustomInputBtn";

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
  padding: 50px 0 160px;
  max-width: 1024px;
`;
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

const FormDiv = styled.div`
  /* border: 1px solid #eee; */
  display: flex;
  justify-content: center;
`;
const FormInnerDiv = styled.div`
  /* border: 1px solid; */
  max-width: 480px;
  width: 100%;
  h3 {
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    padding: 80px 0 40px;
  }
`;

const BtnAreaDiv = styled.div`
  display: flex;
  gap: 15px;
`;

function EditProfilePage() {
  const navigate = useNavigate();
  return (
    <div>
      <MyPageTopDiv>
        <div className="top">
          <h2 className="tit">회원정보 수정</h2>
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
              <Link to={"/myplanlist"}>내 일정</Link>
            </li>
            <li className="active">
              <Link to={"/myinfo"}>내 정보</Link>
            </li>
          </ul>
        </TabMenuDiv>
        <FormDiv>
          <FormInnerDiv>
            <h3>프로필 수정</h3>
            <CustomInput label={"name"} type={"text"} userName={"홍길동"} />
            <CustomInput label={"닉네임"} type={"text"} userName={"크롱오이"} />
            <CustomInput label={"ID"} type={"text"} userName={"tngus52"} />
            <CustomInput
              label={"Email"}
              type={"Email"}
              userName={"aa@gmail.com"}
            />
            <CustomInputBtn
              type={"password"}
              label={"비밀번호"}
              btntxt={"비밀번호변경"}
            />

            <BtnAreaDiv>
              <BasicBtn
                mt={"25px"}
                btnname={"뒤로가기"}
                Bg={"#EEEEEE"}
                color={"#555"}
                onClick={() => {
                  navigate("/myinfo");
                }}
              />
              <BasicBtn
                mt={"25px"}
                btnname={"회원탈퇴"}
                Bg={"#FF5757"}
                color={"#fff"}
                onClick={() => {
                  navigate("/myinfo/deletemember");
                }}
              />
            </BtnAreaDiv>
            <BasicBtn
              btnname={"저장"}
              mt={"25px"}
              onClick={() => {
                navigate("/myinfo");
              }}
            />
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default EditProfilePage;
