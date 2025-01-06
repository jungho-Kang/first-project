import styled from "@emotion/styled";
import { useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  > div {
    width: 100%;
    display: flex;
    gap: 15px;
  }
  h2 {
    display: block;
    font-weight: 700;
    font-size: 32px;
  }
`;

const SelectedOption = styled.div`
  width: 90px;
  position: relative;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  text-indent: -20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
`;

const OptionsList = styled.div`
  position: absolute;
  top: 35px;
  left: 80px;
  width: 90px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #ddd;
  border-top: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 9;
`;

const OptionItem = styled.div`
  padding: 10px;
  text-indent: -20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const PlanDateDiv = styled.div`
  padding: 0.8em 0 0;
  color: #777;
`;

const PlanTop = ({
  resData,
  cityName,
  selectedOption,
  setSelectedOption,
  setIsOpen,
  isOpen,
  dayList,
  setDayList,
}) => {
  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setDayList(
      Array.from({ length: resData.planDate + 1 }, (_, i) => `${i + 1}일차`),
    );
  }, []);

  return (
    <Wrapper>
      <div>
        <h2>{cityName}</h2>
        <SelectedOption onClick={() => setIsOpen(prev => !prev)}>
          {selectedOption}
          <TiArrowSortedDown
            style={{ position: "absolute", right: "12px", color: "#bbb" }}
          />
        </SelectedOption>
        {isOpen && (
          <OptionsList>
            {dayList.map((item, index) => (
              <OptionItem key={index} onClick={() => handleOptionClick(item)}>
                {item}
              </OptionItem>
            ))}
          </OptionsList>
        )}
      </div>
      <PlanDateDiv>{`${resData.startDate} - ${resData.endDate}`}</PlanDateDiv>
    </Wrapper>
  );
};

export default PlanTop;
