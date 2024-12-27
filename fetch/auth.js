import axios from "axios";
import { API_URL } from "../src/constants/login";

// 로그인 API
export const postLoginMember = async data => {
  console.log("postLoginMember : ", data);
  try {
    const res = await axios.post(`${API_URL}/user/signin`, { ...data });
    return res;
  } catch (error) {
    console.log("Login Error: ", error);
    return error;
  }
};

// 패스워드 찾기
//  인증번호 발송 API
export const postEmailCode = async email => {
  try {
    //http://192.168.0.15:8080/emailCheck
    // http://localhost:5173/emailCheck
    // {"email":"by5028@naver.com"}
    // {"email":" "}
    console.log("postEmailCode : ", email);
    const res = await axios.post(`${API_URL}/emailCheck`, { email });
    console.log(res);
    return res;
  } catch (error) {
    console.log("Sending Email Error: ", error);
    return error;
  }
};

// 인증번호 받기
export const patchAuthCode = async data => {
  try {
    const res = aw;
  } catch (error) {}
};
