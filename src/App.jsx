import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/IndexPage";
import NotFound from "./pages/NotFoundPage";
import Guide from "./pages/about/GuidePage";
import AboutIndex from "./pages/about/IndexPage";
import FindPw from "./pages/auth/FindPwPage";
import AuthIndex from "./pages/auth/IndexPage";
import Signup from "./pages/auth/SignupPage";
import DeleteMember from "./pages/mypage/my-info/DeleteMemberPage";
import EditProfile from "./pages/mypage/my-info/EditProfilePage";
import MyInfoIndex from "./pages/mypage/my-info/IndexPage";
import UpdatePw from "./pages/mypage/my-info/UpdatePwPage";
import BoardDetail from "./pages/travel-board/DetailPage";
import BoardIndex from "./pages/travel-board/IndexPage";
import WritePost from "./pages/travel-board/WritePostPage";
import MyPlanList from "./pages/mypage/plan-list/MyPlanListPage";
import MyPlanDetail from "./pages/mypage/plan-list/MyPlanDetailPage";
import City from "./pages/planning/CityPage";
import CalendarPicker from "./pages/planning/CalendarPickerPage";
import MakePlanner from "./pages/planning/MakePlannerPage";

import { LoginProvider } from "./contexts/LoginContext";
import { useState } from "react";

function App() {
  // 일정 등록(날짜, 도시정보 등등)
  const [resData, setResData] = useState({});
  const [paramPath, setParamPath] = useState("");
  const [cityName, setCityName] = useState("");

  // 상세 일정 등록하기(위치, 주소, 금액 등등)
  const [resDetailData, setResDetailData] = useState({});

  // 플랜 마스터 아이디
  const [planMasterId, setPlanMasterId] = useState(0);

  // 인원수
  const [peopleCnt, setPeopleCnt] = useState(0);

  // 선택된 일차
  const [selectedOption, setSelectedOption] = useState("1일차");

  // 일차 정보 state
  const [isOpen, setIsOpen] = useState(false);
  const [dayList, setDayList] = useState([]);

  // 일차별 가격, 총 가격 정보
  const [datePrice, setDatePrice] = useState(0);
  const [allPrice, setAllPrice] = useState(0);

  return (
    <Router>
      <LoginProvider>
        <Layout paramPath={paramPath}>
          <Routes>
            {/* 홈 */}
            <Route path="/" element={<Home />} />

            {/* 로그인, 회원가입, 패스워드 찾기 */}
            <Route path="auth">
              <Route index element={<AuthIndex />} />
              <Route path="findpw" element={<FindPw />} />
              <Route path="signup" element={<Signup />} />
            </Route>

            {/* 회사소개 & 이용방법 */}
            <Route path="about" element={<AboutIndex />} />
            <Route path="guide" element={<Guide />} />

            {/* 일정계획 */}
            <Route path="planning">
              <Route index element={<City setCityName={setCityName} />}></Route>
              <Route
                path="schedule/:id"
                element={
                  <CalendarPicker
                    setResData={setResData}
                    setParamPath={setParamPath}
                    setResDetailData={setResDetailData}
                    resDetailData={resDetailData}
                    setPlanMasterId={setPlanMasterId}
                    setPeopleCnt={setPeopleCnt}
                  />
                }
              ></Route>
              <Route
                path="makeplanner/:id"
                element={
                  <MakePlanner
                    planMasterId={planMasterId}
                    resData={resData}
                    cityName={cityName}
                    resDetailData={resDetailData}
                    peopleCnt={peopleCnt}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    setDayList={setDayList}
                    dayList={dayList}
                    datePrice={datePrice}
                    setDatePrice={setDatePrice}
                  />
                }
              ></Route>
            </Route>

            {/* 다녀ON 게시판 : 리스트, 디테일페이지, 글쓰기/수정 */}
            <Route path="board">
              <Route index element={<BoardIndex />} />
              <Route path="detail/:id" element={<BoardDetail />} />
              <Route path="writepost" element={<WritePost />} />
            </Route>

            <Route path="myplanlist">
              {/* 마이페이지 - 내일정, 일정디테일 */}
              <Route index element={<MyPlanList />} />
              <Route
                path=":id"
                element={
                  <MyPlanDetail
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    dayList={dayList}
                    setDayList={setDayList}
                    datePrice={datePrice}
                    setDatePrice={setDatePrice}
                    allPrice={allPrice}
                    setAllPrice={setAllPrice}
                  />
                }
              />
            </Route>
            {/* 마이페이지 - 내프로필, 수정, 비번재설정, 탈퇴 */}
            <Route path="myinfo">
              <Route index element={<MyInfoIndex />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="updatepw" element={<UpdatePw />} />
              <Route path="deletemember" element={<DeleteMember />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </LoginProvider>
    </Router>
  );
}

export default App;
