import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TitleDiv, WrapDiv } from "../../components/common";
import { IMAGE_URL } from "../../constants/api";
import { API_URL } from "../../constants/login";
import { AboutTopDiv } from "../about/about";
import { ImgLi, ImgUl } from "./plan";

function CityPage() {
  const navigate = useNavigate();

  const [cityData, setCityData] = useState([]);

  const getCity = async () => {
    try {
      const res = await axios.get(`${API_URL}/city/selcity`);
      // console.log(res);
      setCityData(res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCity();
  }, []);

  // console.log(cityData);

  return (
    <>
      <AboutTopDiv>
        <h2 className="txt">다녀ALL 일정 계획</h2>
      </AboutTopDiv>
      <WrapDiv style={{ paddingBottom: 160 }}>
        <TitleDiv>
          <h3>지역 선택</h3>
          <p>다녀올 지역을 선택해주세요.</p>
        </TitleDiv>
        <ImgUl>
          {cityData.map(item => {
            const imgUrl = `${IMAGE_URL}/pic/city/${item.cityId}/${item.cityPic}`;
            if (item.cityId <= 3) {
              return (
                <ImgLi
                  key={item.cityId}
                  onClick={() => {
                    navigate(`/planning/schedule/${item.cityId}`);
                  }}
                >
                  <img src={imgUrl} alt="지역 이미지" />
                  <div className="city-name">{item.cityKorName}</div>
                </ImgLi>
              );
            }
          })}
        </ImgUl>
        <ImgUl>
          {cityData.map(item => {
            const imgUrl = `${IMAGE_URL}/pic/city/${item.cityId}/${item.cityPic}`;
            if (item.cityId > 3) {
              return (
                <ImgLi
                  key={item.cityId}
                  onClick={() => {
                    navigate(`/planning/schedule/${item.cityId}`);
                  }}
                >
                  <img src={imgUrl} alt="지역 이미지" />
                  <div className="city-name">{item.cityKorName}</div>
                </ImgLi>
              );
            }
          })}
        </ImgUl>
      </WrapDiv>
    </>
  );
}
export default CityPage;
