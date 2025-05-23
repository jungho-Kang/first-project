import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext";

// 공통 레이아웃
import Layout from "./components/Layout";

import ScrollToTop from "./components/ScrollToTop";
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
import MyPlanDetail from "./pages/mypage/plan-list/MyPlanDetailPage";
import MyPlanList from "./pages/mypage/plan-list/MyPlanListPage";
import CalendarPicker from "./pages/planning/CalendarPickerPage";
import City from "./pages/planning/CityPage";
import EditPlannerPage from "./pages/planning/EditPlannerPage";
import MakePlanner from "./pages/planning/MakePlannerPage";
import BoardDetail from "./pages/travel-board/DetailPage";
import BoardIndex from "./pages/travel-board/IndexPage";
import WritePost from "./pages/travel-board/WritePostPage";
import WritePutPage from "./pages/travel-board/WritePutPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoginProvider>
        <Layout>
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
              <Route index element={<City />} />
              <Route path="schedule/:id" element={<CalendarPicker />} />
              <Route path="makeplanner/:id" element={<MakePlanner />} />
            </Route>

            {/* 다녀ON 게시판 : 리스트, 디테일페이지, 글쓰기/수정 */}
            <Route path="board">
              <Route index element={<BoardIndex />} />
              <Route path="detail/:id" element={<BoardDetail />} />
              <Route path="writeput/:id" element={<WritePutPage />} />
            </Route>

            <Route path="myplanlist">
              {/* 마이페이지 - 내일정, 일정디테일 */}
              <Route index element={<MyPlanList />} />
              <Route path=":id" element={<MyPlanDetail />} />
              <Route path="writepost/:id" element={<WritePost />} />
              <Route path="editplanner/:id" element={<EditPlannerPage />} />
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
