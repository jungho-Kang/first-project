import { useState } from "react";
import styled from "@emotion/styled";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";

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
  left: 84px;
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
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const PlanDateDiv = styled.div`
  padding: 0.8em 0;
  color: #777;
`;
const LinkbtnAreaDiv = styled.div`
  height: 34px;
  line-height: 34px;

  a {
    border: 1px solid #eee;
    min-width: 120px;
    text-align: center;
    border-radius: 4px;
    background-color: #efefef;
    transition: all 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const PlanTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("1일차");

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <div>
        <h2>서울</h2>
        <SelectedOption onClick={() => setIsOpen(prev => !prev)}>
          {selectedOption}
          <TiArrowSortedDown
            style={{ position: "absolute", right: "12px", color: "#bbb" }}
          />
        </SelectedOption>
        {isOpen && (
          <OptionsList>
            <OptionItem onClick={() => handleOptionClick("1일차")}>
              1일차
            </OptionItem>
            <OptionItem onClick={() => handleOptionClick("2일차")}>
              2일차
            </OptionItem>
            <OptionItem onClick={() => handleOptionClick("3일차")}>
              3일차
            </OptionItem>
            <OptionItem onClick={() => handleOptionClick("4일차")}>
              4일차
            </OptionItem>
            <OptionItem onClick={() => handleOptionClick("5일차")}>
              5일차
            </OptionItem>
          </OptionsList>
        )}
      </div>
      <PlanDateDiv>2024.12.20 - 2024.12.25</PlanDateDiv>
      <LinkbtnAreaDiv>
        <Link to={"/"}>교통</Link>
        <Link to={"/"}>숙소</Link>
      </LinkbtnAreaDiv>
    </Wrapper>
  );
};

export default PlanTop;
