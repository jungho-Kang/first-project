import styled from "@emotion/styled";
import { useState } from "react";
import { FaCheck, FaPlus, FaStar } from "react-icons/fa";
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

const OfferItem = ({ setSelectedItem }) => {
  const [btnClick, setBtnClick] = useState(false);

  const handleClickLogin = () => {
    setBtnClick(prev => !prev);
    if (btnClick) {
      setSelectedItem({});
    }
  };

  return (
    <OfferItemA>
      <div className="img-box">
        <img src="" alt="" />
      </div>
      <div className="text-box">
        <h3>항목이름</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolorum!
          adipisicing elit. Ab, dolorum!
        </span>
        <div className="rating">
          <span>
            <em>
              <FaStar />
            </em>
            4.5
          </span>
        </div>
      </div>
      <button
        type="button"
        className="btn-box"

        onClick={() => handleClick()}
        style={{
          backgroundColor: btnClick ? "#5469d4" : "#f5f4f4",
          color: btnClick ? "#fff" : "#333",
        }}
      >
        {btnClick ? <FaCheck /> : <FaPlus />}
      </button>
    </OfferItemA>
  );
};

export default OfferItem;
