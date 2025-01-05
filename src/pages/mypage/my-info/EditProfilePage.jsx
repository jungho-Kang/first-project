import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../contexts/LoginContext";
import axios from "axios";

// comp
import MypageTab from "../../../components/mypage/MypageTab";
import MypageTop from "../../../components/mypage/MypageTop";
import BasicBtn from "../../../components/ui/button/BasicBtn";

// styled
import { ErrorP, InitMessageP, TextForm } from "../../../components/common";
import { BtnAreaDiv, FormDiv, FormInnerDiv, MyPageWrapDiv } from "./myinfo";

// yup
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  nickName: yup
    .string()
    .required("닉네임은 필수입니다.")
    .min(3, "닉네임은 최소 3자 이상이어야 합니다")
    .max(20, "닉네임은 최대 20자까지 입력할 수 있습니다"),
});
function EditProfilePage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginContext);
  const [editNickName, setEditNickName] = useState(user.nickName);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      nickname: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleChangeData = e => {
    setEditNickName(e.target.value);
  };

  const fetchApi = async data => {
    data.userId = user.userId;
    console.log("보낼 데이터", data);
    try {
      const res = await axios.patch("/api/user/nickname", data);
      console.log("닉네임 수정 성공시 받은 데이터", res.data);
      if (res.data.resultData) {
        console.log(res.data.resultMessage);
        setUser({ ...user, nickName: data.nickName });
        alert("닉네임이 정상적으로 수정되었습니다.");
        navigate("/myinfo");
        console.log(user);
      } else {
        console.log(res.data.resultMessage);
        alert("다른 닉네임으로 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("닉네임 수정 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };
  const onSubmit = _nickname => {
    console.log("수정된 보낼 닉네임", _nickname);
    fetchApi(_nickname);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MypageTop />

      <MyPageWrapDiv>
        <MypageTab />
        <FormDiv>
          <FormInnerDiv>
            <div className="tit-area">
              <h3>프로필 수정</h3>
            </div>

            {/* 이름 */}
            <TextForm style={{ padding: 0, marginBottom: 23 }}>
              <label htmlFor="">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  value={"홍길동"}
                  readOnly
                  style={{
                    backgroundColor: "#eee",
                    color: "#999",
                  }}
                />
              </label>
            </TextForm>

            {/* 닉네임 */}
            <TextForm style={{ padding: 0, marginBottom: 12 }}>
              <label htmlFor="">
                <p>NickName</p>
                <input
                  type="text"
                  name="nickName"
                  {...register("nickName")}
                  value={editNickName}
                  onChange={e => {
                    handleChangeData(e);
                  }}
                />
                {errors?.nickName ? (
                  <ErrorP>{errors.nickName?.message}</ErrorP>
                ) : (
                  <InitMessageP>3글자 이상 입력해주세요.</InitMessageP>
                )}
              </label>
            </TextForm>
            {/* 이메일 */}
            <TextForm style={{ padding: 0 }}>
              <label htmlFor="">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  value={"aa@gmail.com"}
                  readOnly
                  style={{ backgroundColor: "#eee", color: "#999" }}
                />
              </label>
            </TextForm>

            <BtnAreaDiv>
              <BasicBtn
                btnname={"뒤로가기"}
                type="button"
                style={{
                  // marginTop: "25px",
                  backgroundColor: "#eee",
                  color: "#555",
                }}
                onClick={() => {
                  navigate("/myinfo");
                }}
              />
              <BasicBtn
                type="button"
                btnname={"회원탈퇴"}
                style={{
                  // marginTop: "25px",
                  backgroundColor: "#FF5757",
                  color: "#fff",
                }}
                onClick={() => {
                  navigate("/myinfo/deletemember");
                }}
              />
            </BtnAreaDiv>
            <BasicBtn
              type="submit"
              btnname={"저장"}
              style={{ marginTop: "25px" }}
            />
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </form>
  );
}

export default EditProfilePage;
