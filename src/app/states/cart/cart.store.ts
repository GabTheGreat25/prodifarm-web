import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { ICartProduct } from "src/app/interfaces";

export interface CartState {
  _id: string;
  customer: string;
  products: ICartProduct[];
  deleted: boolean;
}

export function createInitialState(): CartState {
  return {
    _id: "",
    customer: "",
    products: [],
    deleted: false,
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "cart" })
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}
