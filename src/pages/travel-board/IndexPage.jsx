import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { TitleDiv, WrapDiv } from "../../components/common";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActionButton,
  ButtonDiv,
  FlexDiv,
  PostCity,
  PostDate,
  PostImg,
  PostLi,
  PostTitle,
  PostUl,
} from "../planning/plan";

function IndexPage() {
  const [boardList, setBoardList] = useState([]);

  const getBoard = async () => {
    try {
      const res = await axios.get(`/api/feed`);
      console.log(res.data.resultData);
      setBoardList(res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  // boardList를 4개씩 묶어서 반환하는 함수
  const fourArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size)); // 배열을 size만큼 잘라서 result에 넣음
    }
    return result;
  };

  useEffect(() => {
    getBoard();
    console.log("이거!!!!!!!", boardList);
  }, []);

  return (
    <WrapDiv>
      <TitleDiv style={{ fontFamily: "yg-jalnan", fontSize: 48 }}>
        다녀 ON
      </TitleDiv>
      {/* boardList를 4개씩 묶은 후 각 묶음을 PostUl로 렌더링 */}
      {fourArray(boardList, 4).map((four, index) => (
        <PostUl key={index}>
          {four.map(item => {
            const imgUrl = `http://112.222.157.156:5212/pic/city/${item?.cityId}/${item?.cityPic}`;
            return (
              <Link
                key={item.planMasterId}
                to={`/board/detail/${item.planMasterId}`}
              >
                <PostLi style={{ padding: 20 }}>
                  <PostImg>
                    <img src={imgUrl} alt="안떠" />
                  </PostImg>
                  <FlexDiv>
                    <PostTitle>{item.title}</PostTitle>
                    <PostCity style={{ backgroundColor: `#${item.color}` }}>
                      {item.cityName}
                    </PostCity>
                  </FlexDiv>
                  <FlexDiv>
                    <PostDate>{item.createdAt}</PostDate>
                    <FlexDiv>
                      <GoHeartFill style={{ color: "#f00", marginRight: 5 }} />
                      <div>{item.likeCnt}</div>
                    </FlexDiv>
                  </FlexDiv>
                </PostLi>
              </Link>
            );
          })}
        </PostUl>
      ))}

      <ButtonDiv>
        <Link to={"/board/writepost"}>
          <ActionButton>글쓰기</ActionButton>
        </Link>
      </ButtonDiv>
    </WrapDiv>
  );
}

export default IndexPage;
