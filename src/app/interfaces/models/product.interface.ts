import { IDateStamps } from "./base.interface";
import { IUser } from "..";

export interface IProduct extends IDateStamps {
  _id: string;
  name: string;
  user: IUser | string;
  description: string;
  skus: IProductSKU[];
  images: string[];
  thumbnail: string;
  tags: string[];
  category: string;
  published: boolean;
  deleted: boolean;
  ratings: number;
}

export interface ICategory extends IDateStamps {
  _id: string;
  name: string;
  deleted: boolean;
}

export interface IProductSKU extends IDateStamps {
  _id: string;
  name: string;
  attributes: string[];
  product: IProduct | string;
  price: number;
  thumbnail: string;
  quantity: number;
  deleted: boolean;
}
