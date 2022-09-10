import { Component, Input, OnInit } from "@angular/core";
import { ICartProduct } from "src/app/interfaces";
import { CartService } from "src/app/states/cart/cart.service";

@Component({
  selector: "app-order-item",
  templateUrl: "./order-item.component.html",
  styleUrls: ["./order-item.component.scss"],
})
export class OrderItemComponent implements OnInit {
  _orderItem?: ICartProduct;
  @Input() set orderItem(value: ICartProduct) {
    this._orderItem = value;
  }
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  get orderPrice(): number {
    return (this._orderItem?.sku?.price ?? 0) * (this._orderItem?.quantity ?? 0);
  }

  deleteItem(id: string) {
    this.cartService.removeProduct(id);
  }
}
