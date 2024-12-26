import styled from "@emotion/styled";

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

const AddPlace = ({ searchWord, setSearchWord, searchPlace, list }) => {
  return (
    <ContentDiv>
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="검색하려는 장소를 입력해주세요"
          style={{
            width: 300,
            height: 50,
            paddingLeft: 15,
            borderRadius: 10,
            marginRight: 20,
          }}
          onChange={e => setSearchWord(e.target.value)}
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
          onClick={() => searchPlace(searchWord)}
        >
          검색
        </button>
      </div>
      <div style={{ overflowY: "auto", height: 500, cursor: "pointer" }}>
        {list.map(item => {
          return (
            <div
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
