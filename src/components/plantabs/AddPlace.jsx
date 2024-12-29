import styled from "@emotion/styled";
import { useState } from "react";

const ContentDiv = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 40px;
`;

const PlaceNameDiv = styled.div`
  color: #5469d4;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
`;

const AddPlace = ({
  setSearchWord,
  mapResultList,
  setIsClick,
  setSelectedItem,
}) => {
  const [word, setWord] = useState("");

  const handleItemClick = () => {
    setIsClick(true);
  };

  return (
    <ContentDiv>
      <div style={{ marginBottom: 20 }}>
        <input
          value={word}
          type="text"
          placeholder="검색하려는 장소를 입력해주세요"
          style={{
            width: 300,
            height: 50,
            paddingLeft: 15,
            borderRadius: 10,
            marginRight: 20,
          }}
          onChange={e => setWord(e.target.value)}
          // 엔터키 누르면 검색
          onKeyDown={e => {
            if (e.key === "Enter") {
              setWord(e.target.value);
              setSearchWord(e.target.value);
            }
          }}
        />
        <button
          style={{
            width: 100,
            height: 40,
            borderRadius: 5,
            backgroundColor: "#5469D4",
            color: "#fff",
            border: "none",
          }}
          onClick={() => setSearchWord(word)}
        >
          검색
        </button>
      </div>
      {/* 검색결과 출력 */}
      <div style={{ overflowY: "auto", height: 500, cursor: "pointer" }}>
        {mapResultList.map(item => {
          return (
            <div
              onClick={() => {
                handleItemClick();
                setSelectedItem({
                  addressName: item.address_name,
                  placeName: item.place_name,
                });
              }}
              key={`item-${item.address_name}-${item.x},${item.y}`}
              style={{ marginBottom: 10 }}
            >
              <PlaceNameDiv>{item.place_name}</PlaceNameDiv>
              <div style={{ marginBottom: 10 }}>{item.address_name}</div>
              <div
                style={{ border: "1px solid rgba(0,0,0,0.1)", width: 400 }}
              ></div>
            </div>
          );
        })}
      </div>
    </ContentDiv>
  );
};
export default AddPlace;
