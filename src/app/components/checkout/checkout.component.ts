import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ICartProduct } from "src/app/interfaces";
import { CartQuery } from "src/app/states/cart/cart.query";
import { CartService } from "src/app/states/cart/cart.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  cartProducts: ICartProduct[] = [];
  form = this.fb.group({
    contact: [],
    shippingAdd: [],
    paymentMethod: [{ paymentMethod: "cod" }],
  });
  shippingFee: number = 3.99;
  totalItems: number = 0;
  subtotal: number = 0;
  total: number = 0;
  constructor(private cartService: CartService, private cartQuery: CartQuery, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cartService.getCart(this.cartQuery._id);
    this.cartQuery.products$.subscribe((value) => {
      this.cartProducts = value;
      this.calculateBilling(this.cartProducts);
    });
  }

  calculateBilling(cartProducts: ICartProduct[]) {
    if (!cartProducts.length) {
      this.subtotal = 0;
      this.total = 0;
      this.shippingFee = 0;
      return;
    }
    this.totalItems = cartProducts.reduce((acc: number, cartItem: ICartProduct): number => acc + cartItem.quantity, 0);
    this.subtotal = cartProducts.reduce((acc: number, cartItem: ICartProduct): number => acc + cartItem.sku.price * cartItem.quantity, 0);
    this.total = this.subtotal + this.shippingFee;
  }

  checkout(form: FormGroup) {
    const { contact, shippingAdd, paymentMethod } = form.value;
    const requestData = { ...contact, ...shippingAdd, ...paymentMethod };
    console.log(requestData);
  }
}
