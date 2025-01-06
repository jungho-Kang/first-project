import axios from "axios";
import { API_URL } from "../constants/login";

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
    console.log("postEmailCode : ", email);
    const res = await axios.post(`${API_URL}/emailCheck`, { email });
    console.log(res);
    return res;
  } catch (error) {
    console.log("Sending Email Error: ", error);
    return error;
  }
};
