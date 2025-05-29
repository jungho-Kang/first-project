import { useNavigate } from "react-router-dom";
// styled
import { SwiperItemDiv } from "../../pages";
// icon
import { IoHeart } from "react-icons/io5";
import { IMAGE_URL } from "../../constants/api";

const SwiperItem = ({ item }) => {
  const imgUrl = `${IMAGE_URL}/pic/city/${item?.cityId}/${item?.cityPic}`;
  const navigate = useNavigate();
  return (
    <SwiperItemDiv
      onClick={() => {
        navigate(`/board/detail/${item?.planMasterId}`);
      }}
    >
      <div className="thum">
        <img src={imgUrl} alt="지역이미지" />
      </div>
      <div className="txt-box">
        <div className="top">
          <div>
            <em style={{ backgroundColor: `#${item?.color}` }}>
              {item?.cityName}
            </em>
            <h4>{item?.title}</h4>
          </div>
          <div className="like">
            <IoHeart />
            <span>{item?.likeCnt}</span>
          </div>
        </div>
        <div className="date">{item?.createdAt}</div>
      </div>
    </SwiperItemDiv>
  );
};
export default SwiperItem;
