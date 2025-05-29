import styled from "@emotion/styled";
import OfferItem from "./OfferItem";
import { useEffect } from "react";

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
  max-height: 680px;
  height: 100%;
  padding: 0 10px;
  overflow-y: auto;
`;

const RecommendItem = ({
  selectedCate,
  setSelectedCate,
  setSelectedItem,
  setIsClick,
  isClick,
  setPlaceData,
  setInitData,
  placeData,
  setItemLatLng,
}) => {
  useEffect(() => {
    console.log("!!!!!!!!!이거", placeData);
  }, [placeData]);
  return (
    <>
      <OfferFilterListUl>
        <li
          onClick={() => setSelectedCate("place")}
          style={{ opacity: selectedCate === "place" ? 1 : 0.5 }}
        >
          명소
        </li>
        <li
          onClick={() => setSelectedCate("hotel")}
          style={{ opacity: selectedCate === "hotel" ? 1 : 0.5 }}
        >
          숙소
        </li>
        <li
          onClick={() => setSelectedCate("restaurant")}
          style={{ opacity: selectedCate === "restaurant" ? 1 : 0.5 }}
        >
          음식점
        </li>
      </OfferFilterListUl>
      <OfferListDiv>
        <OfferItem
          setItemLatLng={setItemLatLng}
          isClick={isClick}
          setSelectedItem={setSelectedItem}
          selectedCate={selectedCate}
          setIsClick={setIsClick}
          setPlaceData={setPlaceData}
          setInitData={setInitData}
          placeData={placeData}
        />
      </OfferListDiv>
    </>
  );
};
export default RecommendItem;
