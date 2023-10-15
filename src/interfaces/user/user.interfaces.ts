import { IAddress } from "../address/address.interface";

export interface IUserRegister {
  email: string;
  password: string;
  confirm_password: string;
  cpf: string;
  phone: string;
  date_of_birth: string;
  description: string;
  is_advertiser: boolean;
  address:IAddress
}
