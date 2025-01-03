import styled from "@emotion/styled";
import { WrapDiv } from "../../components/common";

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-bottom: 80px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  .city-name {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.65);
    font-weight: 700;
    transition: all 0.3s;
    font-size: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const ImgLi = styled.li`
  width: calc(100% / 3);
  height: 320px;
  transition: all 0.3s;
  border-radius: 20px;
  position: relative;
  &:hover {
    transform: scale(1.01);
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  &:hover .city-name {
    color: yellow;
  }
`;

export const PostUl = styled(ImgUl)`
  max-width: 1440px;
  margin: 0;
  margin-bottom: 60px;
`;

export const PostLi = styled(ImgLi)`
  width: 300px;
  height: 400px;
  background-color: #fff;
`;
export const PostImg = styled.div`
  border-radius: 20px;
  background-color: #f01;
  width: 300px;
  height: 320px;
`;

export const PostTitle = styled.div`
  font-size: 24px;
  color: #000;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const PostDate = styled.div`
  font-size: 14px;
  color: #999;
`;

export const PostCity = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #6666ff;
  font-size: 14px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  max-width: 1440px;
  justify-content: flex-end;
`;

export const ActionButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: #b8d8e4;
  color: #fff;
  border: none;
`;

export const PickDateDiv = styled(WrapDiv)`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const LayoutDiv = styled.div`
  max-width: 100%;
  background-color: #fff;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;
