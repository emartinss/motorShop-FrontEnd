import { IAddress } from "../address/address.interface";

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  cpf: string;
  phone: string;
  date_of_birth: string;
  description: string | null;
  is_advertiser: boolean;
  address: IAddress;
}
