import styled from "@emotion/styled";
import axios from "axios";
import { useEffect } from "react";
import { FaCheck, FaPlus, FaStar } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { cityIdState } from "../../atoms/planAtom";
import { IMAGE_URL } from "../../constants/api";
import { API_URL } from "../../constants/login";
const OfferItemA = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eee;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  .img-box {
    width: 100px;
    height: 100px;
    background-color: #eee;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text-box {
    width: calc(100% - 200px);
    h3 {
      font-weight: 600;
      font-size: 16px;
    }
    > span {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 7px 0;
      font-size: 13px;
      font-weight: 300;
      line-height: 1.25em;
      color: rgba(0, 0, 0, 0.5);
    }
    .rating {
      display: flex;
      gap: 10px;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.5);
      span em {
        margin-right: 3px;
        display: inline-block;
        transform: translateY(1.2px);
        color: #facc15;
      }
    }
  }
  .btn-box {
    border: none;
    border-radius: 5px;
    margin-right: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      background-color: #5469d4 !important;
      color: #fff !important;
    }
  }
`;

const OfferItem = ({
  setSelectedItem,
  selectedCate,
  setIsClick,
  isClick,
  setPlaceData,
  setInitData,
  placeData,
  setItemLatLng,
}) => {
  // cityId
  const cityId = useRecoilValue(cityIdState);
  const getPlace = async () => {
    try {
      // http://192.168.0.144:5212/api/city/selsight?cityId=1&category=place
      const res = await axios.get(
        `${API_URL}/city/selsight?cityId=${cityId}&category=${selectedCate}`,
      );
      res.data.resultData.map(item => ({ ...item, btnClick: false }));
      setPlaceData(res.data.resultData);

      setInitData(res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickAdd = itemId => {
    const tempData = placeData.map(item =>
      item.placeId === itemId ? { ...item, btnClick: !item.btnClick } : item,
    );
    setPlaceData(tempData);
    setIsClick(prev => !prev);
  };

  useEffect(() => {
    getPlace();
  }, [selectedCate, cityId]);

  return (
    <>
      {placeData.map(item => {
        const imgUrl = `${IMAGE_URL}/pic/city/${cityId}/${selectedCate}/${item.placePic}`;
        return (
          <OfferItemA key={item.placeId}>
            <div className="img-box">
              <img
                src={imgUrl}
                alt="신규 장소"
                onError={e => {
                  e.target.src = "/images/empty.png"; // 이미지 로드 실패시 대체 이미지
                }}
              />
            </div>
            <div className="text-box">
              <h3>{item.placeName}</h3>
              <span>{item.placeAddress}</span>
              <div className="rating">
                <span>
                  <em>
                    <FaStar />
                  </em>
                  {item.placeStar}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="btn-box"
              onClick={() => {
                handleClickAdd(item.placeId);
                setSelectedItem({
                  addressName: item.placeAddress,
                  placeName: item.placeName,
                });
                setItemLatLng({
                  lat: item.lat,
                  lng: item.lng,
                });
              }}
              style={{
                backgroundColor:
                  item.btnClick && isClick ? "#5469d4" : "#f5f4f4",
                color: item.btnClick && isClick ? "#fff" : "#333",
              }}
            >
              {item.btnClick && isClick ? <FaCheck /> : <FaPlus />}
            </button>
          </OfferItemA>
        );
      })}
    </>
  );
};

export default OfferItem;
