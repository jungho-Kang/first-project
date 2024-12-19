import styled from "@emotion/styled";
import { WrapDiv } from "../../components/common";

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1360px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 80px;
`;
export const ImgLi = styled.li`
  width: 400px;
  height: 320px;
  background-color: yellowgreen;
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
  width: 40px;
  height: 20px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #6666ff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
