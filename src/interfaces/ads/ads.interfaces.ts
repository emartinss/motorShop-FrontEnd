import { IUser } from "../user/user.interfaces";

export interface IAds {
  id: number;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: number;
  color: string;
  fipe: number;
  price: number;
  description: string;
  image: { id: number; image_url: string }[];
  comment?: { id: number; comment: string; user: IUser }[];
  user: { name: string; id: number; description: string };
}

export interface IAdsByUser {
  announcements: {
    id: number;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: number;
    color: string;
    fipe: number;
    price: number;
    description: string;
    image: { id: number; image_url: string }[];
  }[];
}

export interface ICreateAds {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: number;
  color: string;
  fipe: number;
  price: number;
  description: string;
  image_url: string;
}

export interface IEditAds extends Partial<ICreateAds>{}
