import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

import Home from "./pages/Index";
import NotFound from "./pages/NotFound";
import Guide from "./pages/about/Guide";
import AboutIndex from "./pages/about/Index";
import FindPw from "./pages/auth/FindPw";
import AuthIndex from "./pages/auth/Index";
import Signup from "./pages/auth/signup";
import DeleteMember from "./pages/mypage/my-info/DeleteMember";
import EditProfile from "./pages/mypage/my-info/EditProfile";
import MyInfoIndex from "./pages/mypage/my-info/Index";
import UpdatePw from "./pages/mypage/my-info/UpdatePw";
import BoardDetail from "./pages/travel-board/Detail";
import BoardIndex from "./pages/travel-board/Index";
import WritePost from "./pages/travel-board/WritePost";
import MyPlanList from "./pages/mypage/plan-list/MyPlanList";
import MyPlanDetail from "./pages/mypage/plan-list/MyPlanDetail";
import City from "./pages/planning/City";
import CalendarPicker from "./pages/planning/CalendarPicker";
import MakePlanner from "./pages/planning/MakePlanner";

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
