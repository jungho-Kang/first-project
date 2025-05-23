import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_SESSION_KEY, USER_SESSION_KEY } from "../constants/login";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const initUser = {
    userId: "",
    nickName: "",
    email: "a@a.net",
    name: "오이",
  };

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(initUser);
  const navigate = useNavigate();

  // 로그인
  const handleClickLogin = userInfo => {
    setIsLogin(true);
    setUser(userInfo);
    sessionStorage.setItem(LOGIN_SESSION_KEY, JSON.stringify(true));
    sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(userInfo));
  };

  // 로그아웃
  const handleClickLogout = () => {
    setIsLogin(false);
    setUser(initUser);

    navigate("/");
    sessionStorage.removeItem(LOGIN_SESSION_KEY);
    sessionStorage.removeItem(USER_SESSION_KEY);
  };

  // 페이지 로드 시 sessionStorage에서 값 읽어오기
  useEffect(() => {
    const login = sessionStorage.getItem(LOGIN_SESSION_KEY);
    const userInfo = sessionStorage.getItem(USER_SESSION_KEY);

    if (login === "true" && userInfo) {
      setIsLogin(true);
      setUser(JSON.parse(userInfo));
    } else {
      setIsLogin(false);
      setUser(initUser);

      sessionStorage.setItem(LOGIN_SESSION_KEY, JSON.stringify(false));
      sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(initUser));
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
        handleClickLogin,
        handleClickLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
