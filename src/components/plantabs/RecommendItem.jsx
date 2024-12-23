import styled from "@emotion/styled";
import OfferItem from "./OfferItem";

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

const OfferListDiv = styled.div`
  max-height: 620px;
  height: 100%;
  padding: 0 10px;
  overflow-y: auto;
`;

const RecommendItem = () => {
  return (
    <>
      <OfferFilterListUl>
        <li className="active">명소</li>
        <li>음식점</li>
        <li>숙소</li>
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
