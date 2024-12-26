import axios from "axios";
import { API_URL } from "../src/constants/login";

// 로그인 API
export const postLoginMemberUser = async data => {
  console.log("postLoginMember : ", data);
  try {
    const res = await axios.post(`${API_URL}user/signin`, { ...data });
    return res;
  } catch (error) {
    console.log("Login Error: ", error);
    return error;
  }
};

// 패스워드 찾기
//  인증번호 발송 API
export const sendEmailCodeUser = async email => {
  try {
    const res = await axios.post(`${API_URL}/sendCode`, { email });
    return res;
  } catch (error) {
    console.log("Sending Email Error: ", error);
    return error;
  }
};
