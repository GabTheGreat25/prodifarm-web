import { Component, OnInit, OnDestroy } from "@angular/core";
import { ICartProduct, IProduct } from "src/app/interfaces";
import { FormControl } from "@angular/forms";
import { CartQuery } from "src/app/states/cart/cart.query";
import { CartService } from "src/app/states/cart/cart.service";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit, OnDestroy {
  cartProduct$ = this.cartQuery.products$;
  cartItems: ICartProduct[] = [];
  products: IProduct[] = [];
  shippingFee: number = 3.99;
  totalItems: number = 0;
  subtotal: number = 0;
  total: number = 0;
  selectedIDs: string[] = [];
  selectAll = new FormControl(false);
  constructor(private cartQuery: CartQuery, private cartService: CartService) {
    this.cartProduct$.subscribe((value) => {
      this.cartItems = value;
      this.calculateBilling(this.cartItems);
    });
  }

  ngOnInit(): void {
    this.cartService.getCart(this.cartQuery._id);
  }

  ngOnDestroy(): void {
    this.cartService.updateCart();
  }

  batchDelete() {
    if (this.selectedIDs.length > 0) {
      this.cartService.removeProducts(this.selectedIDs);
    }
  }

  calculateBilling(cartItems: ICartProduct[]) {
    if (!cartItems.length) {
      this.subtotal = 0;
      this.total = 0;
      this.shippingFee = 0;
      return;
    }
    this.totalItems = cartItems.reduce((acc: number, cartItem: ICartProduct): number => acc + cartItem.quantity, 0);
    this.subtotal = cartItems.reduce((acc: number, cartItem: ICartProduct): number => acc + cartItem.sku.price * cartItem.quantity, 0);
    this.total = this.subtotal + this.shippingFee;
  }

  handleSelectionChange(selection: { _id: string; selected: boolean }) {
    if (selection?.selected) {
      if (!this.selectedIDs.includes(selection._id)) this.selectedIDs.push(selection._id);
    } else {
      this.selectedIDs = this.selectedIDs.filter((id) => id !== selection._id);
    }
  }
}
