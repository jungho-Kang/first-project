## 다녀ALL 프로젝트 ✈️🌍

### 1. 프로젝트 소개 📚

- **프로젝트 명**: 다녀ALL
  - **의미**:
    - "다녀올" 여행 계획을 세우자는 의미 📝
    - "다녀ON" 게시판을 통해 사용자가 여행지를 공유하고 경험을 나누자는 의미 💬
- **목표**: 여행 계획 작성 및 공유, 사용자 맞춤 여행 추천 기능 제공 🎯

### 2. 프로젝트 참여자 👥

#### Front-End (FE) 💻

- **팀장**: 이수현
- **팀원**: 강정호, 오은애

#### Back-End (BE) ⚙️

- **팀장**: 심보윤
- **팀원**: 김일지, 백한별, 이어진, 김우준

### 3. FE 역할 분담 🛠️

- **이수현**:
  - 회원가입, 로그인, 비밀번호 찾기 🔑, 마이페이지(나의 일정리스트, 상세리스트, 프로필 수정 등) 📅, 메인페이지, 사이트 소개, 이용 가이드, 404 페이지
- **강정호**:
  - 여행일정관리(생성, 수정, 삭제) 🗓️, 캘린더 라이브러리 사용 📆, 신규 장소 등록 🏙️, 추천 항목에 따른 지도 표시 및 일정 추가 🗺️, 게시판 관리(보기, 작성, 수정, 삭제) 📝

### 4. 개발 기간 ⏳

- **기간**: 2024.12.16 ~ 2025.01.08

### 5. 기술 스택 🔧

- React, styled-components, Swiper, Axios, Context, React Calendar, Kakao Map API, React Datepicker, npm

### 6. 설치 및 실행 방법 🖥️

1. **프로젝트 클론**  
   `git clone https://github.com/suhyun5252/first-project.git .`
2. **디렉토리로 이동**  
   `cd danyeoall`
3. **의존성 설치**  
   `npm install`
4. **서버 실행**  
   `npm run dev`  
   브라우저에서 `http://localhost:3000`으로 접속하여 애플리케이션을 확인할 수 있습니다.

### 7. 협업 자료 📝

- **회의록**: Notion
- **레이아웃**: Figma
- **발표 자료**: Canva

### 8. 프로젝트 구조 📂

```
danyeoall
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ images
│     ├─ 404
│     ├─ about
│     └─ icon
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ components
│  │  ├─ auth
│  │  │  ├─ Agreement.jsx
│  │  │  ├─ AgreementDetail.jsx
│  │  │  ├─ CodeCheck.jsx
│  │  │  ├─ FindPw.jsx
│  │  │  ├─ ResetPw.jsx
│  │  │  └─ SignupForm.jsx
│  │  ├─ common.js
│  │  ├─ footer
│  │  │  ├─ Footer.jsx
│  │  │  └─ footerStyle.js
│  │  ├─ header
│  │  │  ├─ Header.jsx
│  │  │  └─ headerStyle.js
│  │  ├─ Layout.jsx
│  │  ├─ list-result
│  │  │  ├─ PlanListInput.jsx
│  │  │  └─ PlanListResult.jsx
│  │  ├─ Logo.jsx
│  │  ├─ main
│  │  │  └─ SwiperItem.jsx
│  │  ├─ mypage
│  │  │  ├─ mypage.js
│  │  │  ├─ MypageTab.jsx
│  │  │  ├─ MypageTop.jsx
│  │  │  └─ MyplanlistItem.jsx
│  │  ├─ myplan
│  │  │  ├─ mydetailplan.js
│  │  │  └─ MyPlanTable.jsx
│  │  ├─ plantabs
│  │  │  ├─ AddPlace.jsx
│  │  │  ├─ FocusMap.jsx
│  │  │  ├─ OfferItem.jsx
│  │  │  ├─ PlanTop.jsx
│  │  │  ├─ RecommendItem.jsx
│  │  │  ├─ SchedulePush.jsx
│  │  │  └─ TravelMap.jsx
│  │  ├─ popup
│  │  │  ├─ ConfirmPopup.jsx
│  │  │  └─ popup.js
│  │  └─ ui
│  │     ├─ button
│  │     │  ├─ BasicBtn.jsx
│  │     │  └─ button.js
│  │     └─ logo
│  │        ├─ LayerLogo.jsx
│  │        └─ logo.js
│  ├─ constants
│  │  └─ login.js
│  ├─ contexts
│  │  ├─ LoginContext.jsx
│  │  └─ PopupContext.jsx
│  ├─ fetch
│  │  └─ auth.js
│  ├─ hooks
│  │  └─ Axios.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ about
│     │  ├─ about.js
│     │  ├─ GuidePage.jsx
│     │  └─ IndexPage.jsx
│     ├─ auth
│     │  ├─ FindPwPage.jsx
│     │  ├─ IndexPage.jsx
│     │  ├─ login.js
│     │  └─ SignupPage.jsx
│     ├─ index.js
│     ├─ IndexPage.jsx
│     ├─ mypage
│     │  ├─ my-info
│     │  │  ├─ DeleteMemberPage.jsx
│     │  │  ├─ EditProfilePage.jsx
│     │  │  ├─ IndexPage.jsx
│     │  │  ├─ myinfo.js
│     │  │  └─ UpdatePwPage.jsx
│     │  └─ plan-list
│     │     ├─ myplan.js
│     │     ├─ MyPlanDetailPage.jsx
│     │     └─ MyPlanListPage.jsx
│     ├─ NotFoundPage.jsx
│     ├─ planning
│     │  ├─ CalendarPickerPage.jsx
│     │  ├─ CityPage.jsx
│     │  ├─ MakePlannerPage.jsx
│     │  ├─ plan.js
│     │  └─ react-datepicker.css
│     └─ travel-board
│        ├─ board.js
│        ├─ DetailPage.jsx
│        ├─ IndexPage.jsx
│        ├─ WritePostPage.jsx
│        └─ WritePutPage.jsx
└─ vite.config.js
```

### 9. 연락처 📧

- **이수현**: o52o.suhyun@gmail.com
- **강정호**: rkdwjdgh08@naver.com

---

감사합니다! 😊
