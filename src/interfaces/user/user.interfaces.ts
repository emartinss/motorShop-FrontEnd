import { IAddress } from "../address/address.interface";

export interface IUserRegister {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
  cpf: string;
  phone: string;
  date_of_birth: string;
  description: string | null;
  is_advertiser: boolean;
  address: IAddress;
}

export interface IUser {
  email: string;
  name: string;
  password: string;
  cpf: string;
  phone: string;
  date_of_birth: string;
  description: string | null;
  is_advertiser: boolean;
}
