import { createContext, useEffect, useState } from "react";
import { LOGIN_SESSION_KEY } from "../constants/login";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleClickLogin = () => {
    setIsLogin(!isLogin);
    sessionStorage.setItem(LOGIN_SESSION_KEY, JSON.stringify(!isLogin));
  };

  useEffect(() => {
    const login = sessionStorage.getItem(LOGIN_SESSION_KEY);
    if (login) {
      setIsLogin(JSON.parse(login));
    } else {
      sessionStorage.setItem(LOGIN_SESSION_KEY, JSON.stringify(false));
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLogin, handleClickLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
