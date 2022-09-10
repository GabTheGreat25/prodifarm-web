import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { ICartProduct } from "src/app/interfaces";
import { CartStore, CartState } from "./cart.store";

@Injectable({ providedIn: "root" })
export class CartQuery extends Query<CartState> {
  selectAll$ = this.select();
  products$ = this.select("products");
  constructor(protected store: CartStore) {
    super(store);
  }

  get _id(): string {
    return this.getValue()._id;
  }

  get customer(): string {
    return this.getValue().customer;
  }

  get products(): ICartProduct[] {
    return this.getValue().products;
  }

  get totalItems() {
    return this.products.reduce((acc, product) => acc + product.quantity, 0);
  }
}
