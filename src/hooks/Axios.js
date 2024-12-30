import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../constants/login";

export function useAxios(_url, _payload = null, _method = "GET") {
  const [data, setData] = useState(null); // API 회신 데이터 저장
  const [error, setError] = useState(null); // API 호출 오류 저장
  const [loading, setLoading] = useState(false); // API 진행 상태 관리

  const fetchAPI = async () => {
    try {
      let res;
      let method = _method.toUpperCase(); // 대문자로 _method 통일함.

      // axios 인스턴스 생성
      const apiClient = axios.create({
        baseURL: API_URL, // baseURL : "/api"(http://192.168.0.15:8080")
      });

      switch (method) {
        case "GET":
          res = await apiClient.get(_url);
          break;

        case "POST":
          res = await apiClient.post(_url, _payload);
          break;

        case "PUT":
          res = await apiClient.put(_url, _payload);
          break;

        case "PATCH":
          res = await apiClient.patch(_url, _payload); // PATCH 요청 추가
          break;

        case "DELETE":
          res = await apiClient.delete(_url);
          break;
        default:
          throw new Error(`${_method} 잘못 보내셨네요.`);
      }

      setData(res.data); // 응답 데이터 저장
    } catch (error) {
      console.log("API 요청중 오류가 발생했습니다 : ", error.message);
      setError(error); // 오류 상태 저장
    } finally {
      setLoading(false); // API 요청 완료 후 로딩 상태 false
    }
  };

  useEffect(() => {
    setLoading(true); // API 요청 시작 시 로딩상태 true
  }, [_url, _payload, _method]); //URL, payload, method가 변경될 때마다 실행

  return { data, error, loading, fetchAPI }; // 상태 반환
}
