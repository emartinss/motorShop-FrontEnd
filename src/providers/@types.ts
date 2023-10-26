import { ReactNode } from "react";
import { ILogin } from "../interfaces/login/login.interfaces";
import { IUserRegister } from "../interfaces/user/user.interfaces";
import { IAds, IAdsByUser } from "../interfaces/ads/ads.interfaces";

export interface IUserProvidersProps {
  children: ReactNode;
}

export interface IUserContext {
  userLogin: (body: ILogin) => Promise<void>;
  registerUser: (body: IUserRegister) => Promise<void>;
  logoutUser: () => void;
  searchUser: (id: string) => Promise<void>
  user: any;
}

export interface IAdsProvidersProps {
  children: ReactNode;
}

export interface IAdsContext {
  getAds: () => Promise<void>;
  productDetail: (id: string) => Promise<void>;
  getUserAds: (id: string) => Promise<void>
  ads: IAds[];
  adsById: IAds;
  userAds: any
  setAdsById: React.Dispatch<React.SetStateAction<IAds>>;
  currentId: null;
  setCurrentId: React.Dispatch<React.SetStateAction<null>>;
}

export interface IJwtDecoded {
  email: string;
  name: string;
  advertiser: boolean;
  sub: string;
  iat: number;
  exp: number;
}
