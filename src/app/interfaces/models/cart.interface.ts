import { IProduct, IProductSKU, IUser } from "..";

export interface ICartProduct {
  quantity: number;
  sku: ICartSKU;
}

export interface ICartSKU extends IProductSKU {
  product: ICartSKUProduct;
}

export interface ICartSKUProduct extends IProduct {
  user: IUser;
}
