import { createContext, useEffect, useState } from "react";
import { IJwtDecoded, IUserContext, IUserProvidersProps } from "./@types";
import { api } from "../services/api";
import { ILogin } from "../interfaces/login/login.interfaces";
import { IUserRegister } from "../interfaces/user/user.interfaces";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvidersProps) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userLogin = async (body: ILogin) => {
    try {
      const response = await api.post("/login", body);
      const { token } = response.data;

      const tokenDecoded: IJwtDecoded | any = jwt_decode(token);
      localStorage.setItem("@motorShop:token", JSON.stringify(response.data.token));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (body: IUserRegister) => {
    try {
      const response = await api.post("/users", body);
    } catch (error) {
      console.log(error);
    }
  };

  const searchUser = async (id: string) => {
    const token = JSON.parse(localStorage.getItem("@motorShop:token") || "null");
    
    try {
      const response = await api.get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      const user = localStorage.setItem(`@motorShop:userData_${id}`, JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("@motorShop:token");
    navigate("/");
    setUser(null);
  };

  return <UserContext.Provider value={{ userLogin, registerUser, logoutUser, searchUser, user }}>{children}</UserContext.Provider>;
};
