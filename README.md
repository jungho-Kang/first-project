# 다녀ALL

## 프로젝트 참여자(협업)

```
프론트 엔드
- 팀장 : 이수현
- 팀원 : 강정호, 오은애

백엔드
- 팀장 : 심보윤
- 팀원 : 김일지, 백한별, 이어진, 김우준
```

## 기획

### 1. 아이데이션 (주제선정)

- [Notion](https://buttercup-lyric-4ee.notion.site/1576cf890caa807e865deba39a032df0?v=1576cf890caa8194abf0000c14b5b68b&pvs=4)

### 2. 린캔버스로 아이템의 장단점을 분석해보자.

==================================================

### 3. 요구사항문서(PRD)를 작성해보자.

### 4. IA (Sitemap) / ERD

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
│     │  ├─ fa_cloud.svg
│     │  ├─ fa_paper-plane.svg
│     │  └─ icomoon-free_cloud.svg
│     ├─ about
│     │  ├─ about01.jpg
│     │  ├─ about02.jpg
│     │  ├─ about03.jpg
│     │  └─ about04.jpg
│     ├─ auth_bg.jpg
│     ├─ auth_bg.png
│     ├─ board-logo.png
│     ├─ icon
│     │  ├─ blog.png
│     │  ├─ facebook.png
│     │  ├─ insta.png
│     │  ├─ on_icon.svg
│     │  └─ youtube.png
│     ├─ icon-plane.svg
│     ├─ korail.png
│     ├─ link-img_01.jpg
│     ├─ link-img_02.jpg
│     ├─ link-img_03.jpg
│     ├─ logo.png
│     ├─ visual.jpg
│     └─ visual.png
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

### 5. UI Flow

    - [UI Flow](https://excalidraw.com/#json=R-xz98PFD4aLXaKeB2zPm,fsby0LEExu766KaxGUIPjQ)

### 6. UI UX

    - [피그마 주소](https://www.figma.com/design/L57TThYRiljYfnrPiq9HEL/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=1-6&p=f&t=mFne0RXla5MS88TH-0)
    - 글꼴, 주색상, 보조색상 등...

### 7. 일정관리

### 8. 테스트

### 9. MVP

### 10. 향후 진행할 작업에 대한 내용

### 11. 시연 및 발표

    - [발표 자료](https://www.canva.com/design/DAGbHithVhQ/1s9tg3SOvaOuf8lpAN7tJA/edit)

### 12. 팀 자체 피드백 발표

### 13. 멘토 피드백
