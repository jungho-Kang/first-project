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
import ResetPw from "./pages/auth/ResetPwPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* 홈 */}
          <Route path="/" element={<Home />} />

          {/* 로그인, 회원가입, 패스워드 찾기 */}
          <Route path="auth">
            <Route index element={<AuthIndex />} />
            <Route path="findpw" element={<FindPw />} />
            <Route path="resetpw" element={<ResetPw />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* 회사소개 & 이용방법 */}
          <Route path="about" element={<AboutIndex />} />
          <Route path="guide" element={<Guide />} />

          {/* 일정계획 */}
          <Route path="planning">
            <Route index element={<City />}></Route>
            <Route path="schedule" element={<CalendarPicker />}></Route>
            <Route path="makeplanner" element={<MakePlanner />}></Route>
          </Route>

          {/* 여행로그 게시판 : 리스트, 디테일페이지, 글쓰기/수정 */}
          <Route path="board">
            <Route index element={<BoardIndex />} />
            <Route path="detail" element={<BoardDetail />} />
            <Route path="writepost" element={<WritePost />} />
          </Route>

          <Route path="myplanlist">
            {/* 마이페이지 - 내일정, 일정디테일 */}
            <Route index element={<MyPlanList />} />
            <Route path="detail" element={<MyPlanDetail />} />
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
    </Router>
  );
}

export default App;
