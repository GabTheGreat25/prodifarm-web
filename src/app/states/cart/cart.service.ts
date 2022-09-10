import { Injectable } from "@angular/core";
import { CartState, CartStore } from "./cart.store";
import { ICartProduct } from "src/app/interfaces";
import { CartQuery } from "./cart.query";
import { ApiService } from "src/app/services";

@Injectable({ providedIn: "root" })
export class CartService {
  constructor(private cartStore: CartStore, private cartQuery: CartQuery, private api: ApiService) {}

  updateCartItemQty(cartProduct: ICartProduct) {
    const requestData = { quantity: cartProduct.quantity };
    this.api.patch<CartState, {}>(`carts/${this.cartQuery._id}/skus/${cartProduct.sku._id}`, requestData).then((res) => {
      if (res.status === "success" && res.data) {
        this.cartStore.update(res.data[0]);
      }
    });
  }

  updateCart() {
    const requestData = { customer: this.cartQuery.customer, products: this.cartQuery.products };
    this.api.patch<CartState, Partial<CartState>>(`carts/${this.cartQuery._id}`, requestData).then((res) => {
      if (res.status === "success" && res.data) {
        this.cartStore.update(res.data[0]);
      }
    });
  }

  changeCartQtyUI(cartProduct: ICartProduct) {
    const { sku: newProduct } = cartProduct;
    this.cartStore.update((state) => ({
      products: state.products.map((p) => (p.sku._id === newProduct._id ? { ...p, ...cartProduct } : p)),
    }));
  }

  addToCart(cartProduct: ICartProduct) {
    let newProducts = this.cartQuery.products;
    let foundIndex = newProducts.findIndex(({ sku }) => sku._id === cartProduct.sku._id);
    if (foundIndex > -1) {
      const requestData = {
        customer: this.cartQuery.customer,
        products: this.cartQuery.products.map((p, idx) => (idx === foundIndex ? { ...p, quantity: p.quantity + cartProduct.quantity } : p)),
      };
      this.api.post("carts", requestData).then((res) => {
        if (res.status === "success" && res.data) {
          this.cartStore.update(res.data[0]);
        }
      });
      return;
    }
    const requestData = {
      customer: this.cartQuery.customer,
      products: [...this.cartQuery.products, cartProduct],
    };
    this.api.post("carts", requestData).then((res) => {
      if (res.status === "success" && res.data) {
        this.cartStore.update(res.data[0]);
      }
    });
  }

  removeProduct(id: string) {
    this.api.delete<CartState>(`carts/${this.cartQuery._id}/skus/${id}`).then((res) => {
      if (res.status === "success" && res.data) this.cartStore.update(res.data[0]);
    });
  }

  removeProducts(sku_ids: string[]) {
    const requestData = { skus: sku_ids };
    this.api.patch<CartState, {}>(`carts/${this.cartQuery._id}/skus`, requestData).then((res) => {
      if (res.status === "success" && res.data) {
        this.cartStore.update(res.data[0]);
      }
    });
  }

  getCart(cartID: string) {
    this.api.get<CartState>(`carts/${cartID}`).then((res) => {
      if (res.status === "success" && res.data) {
        this.cartStore.update(res.data[0]);
      }
    });
  }

  setCart(user_id: string) {
    if (!user_id) return;
    const requestData = { customer: user_id };
    this.api.post<CartState, Partial<CartState>>("carts", requestData).then((res) => {
      if (res.status === "success" && res.data) {
        this.cartStore.update(res.data[0]);
      }
    });
  }
}
