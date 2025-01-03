import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TitleDiv, WrapDiv } from "../../components/common";
import { API_URL } from "../../constants/login";
import { ImgLi, ImgUl } from "./plan";

function CityPage({ setCityName }) {
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

  console.log(cityData);

  return (
    <WrapDiv>
      <TitleDiv>일정 계획</TitleDiv>
      <ImgUl>
        {cityData.map(item => {
          const imgUrl = `http://112.222.157.156:5212/pic/city/${item.cityId}/${item.cityPic}`;
          if (item.cityId <= 3) {
            return (
              <ImgLi
                key={item.cityId}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/planning/schedule/${item.cityId}`);
                  setCityName(item.cityKorName);
                }}
              >
                <img
                  src={imgUrl}
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  alt="지역 이미지"
                />
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    textAlign: "center",
                    color: "#412B6D",
                    fontWeight: 700,
                  }}
                >
                  {item.cityKorName}
                </div>
              </ImgLi>
            );
          }
        })}
      </ImgUl>
      <ImgUl>
        {cityData.map(item => {
          const imgUrl = `http://112.222.157.156:5212/pic/city/${item.cityId}/${item.cityPic}`;
          if (item.cityId > 3) {
            return (
              <ImgLi
                key={item.cityId}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/planning/schedule/${item.cityId}`);
                  setCityName(item.cityKorName);
                }}
              >
                <img
                  src={imgUrl}
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  alt="지역 이미지"
                />
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    textAlign: "center",
                    color: "#412B6D",
                    fontWeight: 700,
                  }}
                >
                  {item.cityKorName}
                </div>
              </ImgLi>
            );
          }
        })}
      </ImgUl>
    </WrapDiv>
  );
}
export default CityPage;
