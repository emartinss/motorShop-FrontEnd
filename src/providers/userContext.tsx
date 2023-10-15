import { createContext, useEffect, useState } from "react";
import { IUserContext, IUserProvidersProps } from "./@types";
import { api } from "../services/api";
import { ILogin } from "../interfaces/login/login.interfaces";
import { IUserRegister } from "../interfaces/user/user.interfaces";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvidersProps) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userLogin = async (body: ILogin) => {
    try {
      const response = await api.post("/login", body);
      localStorage.setItem("@motorShop:token", JSON.stringify(response.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (body: IUserRegister) => {
    try {
      const response = await api.post("/users", body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("@motorShop:token");
    navigate("/");
    setUser(null);
  };

  return <userContext.Provider value={{ userLogin, registerUser, logoutUser }}>{children}</userContext.Provider>;
};
