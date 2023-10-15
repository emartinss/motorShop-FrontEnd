import { ReactNode } from "react";
import { ILogin } from "../interfaces/login/login.interfaces";
import { IUserRegister } from "../interfaces/user/user.interfaces";

export interface IUserProvidersProps {
  children: ReactNode;
}

export interface IUserContext {
  userLogin: (body: ILogin) => Promise<void>;
  registerUser: (body: IUserRegister) => Promise<void>;
  logoutUser: () => void;
}
