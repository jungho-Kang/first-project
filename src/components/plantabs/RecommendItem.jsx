import styled from "@emotion/styled";
import OfferItem from "./OfferItem";
import { useState } from "react";

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
    cursor: pointer;
  }
`;

const OfferListDiv = styled.div`
  max-height: 620px;
  height: 100%;
  padding: 0 10px;
  overflow-y: auto;
`;

const RecommendItem = () => {
  const [selectedCate, setSelectedCate] = useState("명소");
  return (
    <>
      <OfferFilterListUl>
        <li
          onClick={() => setSelectedCate("명소")}
          style={{ opacity: selectedCate === "명소" ? 1 : 0.5 }}
        >
          명소
        </li>
        <li
          onClick={() => setSelectedCate("음식점")}
          style={{ opacity: selectedCate === "음식점" ? 1 : 0.5 }}
        >
          음식점
        </li>
        <li
          onClick={() => setSelectedCate("숙소")}
          style={{ opacity: selectedCate === "숙소" ? 1 : 0.5 }}
        >
          숙소
        </li>
      </OfferFilterListUl>
      <OfferListDiv>
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
      </OfferListDiv>
    </>
  );
};
export default RecommendItem;
