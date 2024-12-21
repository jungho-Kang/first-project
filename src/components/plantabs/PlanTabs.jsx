import { useState } from "react";
import styled from "@emotion/styled";

const PlanTabs = () => {
  const [activeTab, setActiveTab] = useState("추천항목");
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const PlanTabsUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 15px 10px 0;
    border-bottom: 1px solid #eee;

    li {
      width: 50%;
      height: 45px;
      line-height: 45px;
      text-align: center;
      cursor: pointer;
      color: #777;
      font-size: 18px;
    }

    .active {
      font-weight: 500;
      color: #3825e4;
    }
  `;

  const TabUnderline = styled.li`
    position: absolute !important;
    bottom: -2px;
    left: ${props => (props.activeTab === "추천항목" ? "0" : "50%")};
    width: 50%;
    height: 5px !important;
    border-radius: 3px;
    background-color: #3825e4;
  `;
  const OfferFilterListUl = styled.div`
    margin: 15px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    li {
      padding: 8px 20px;
      border-radius: 50px;
      background-color: #00b3b3;
      color: #fff;
      font-size: 14px;
      opacity: 0.5;
      cursor: pointer;
    }
    li.active {
      opacity: 1;
    }
  `;

  return (
    <div>
      <PlanTabsUl>
        <li
          className={activeTab === "추천항목" ? "active" : ""}
          onClick={() => handleTabClick("추천항목")}
        >
          추천항목
        </li>
        <li
          className={activeTab === "일정등록" ? "active" : ""}
          onClick={() => handleTabClick("일정등록")}
        >
          일정등록
        </li>
        <TabUnderline activeTab={activeTab} />
      </PlanTabsUl>
      <OfferFilterListUl>
        <li className="active">명소</li>
        <li>음식점</li>
        <li>숙소</li>
      </OfferFilterListUl>
    </div>
  );
};

export default PlanTabs;
