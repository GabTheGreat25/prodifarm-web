import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICartProduct, ICartSKU } from "src/app/interfaces";
import { FormControl } from "@angular/forms";
import { CartService } from "src/app/states/cart/cart.service";
@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"],
})
export class CartItemComponent implements OnInit {
  _cartItem!: ICartProduct;
  @Input() set cartItem(value: ICartProduct) {
    this._cartItem = value;
  }
  _selectAll: boolean = false;
  @Input() set selectAll(value: boolean) {
    this._selectAll = value;
    this.selected.setValue(value);
    this.toggleSelect();
  }

  selected = new FormControl(false);
  @Output() selectionChange = new EventEmitter<{ _id: string; selected: boolean }>();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  toggleSelect() {
    this.selectionChange.emit({ _id: this._cartItem?.sku?._id, selected: this.selected.value });
  }

  deleteItem(cartItem: ICartProduct) {
    this.cartService.removeProduct(cartItem.sku._id);
  }

  get product(): ICartSKU {
    return this._cartItem.sku;
  }

  get totalPrice(): number {
    return this._cartItem.sku.price * this._cartItem.quantity;
  }

  handleCartCount(count: number) {
    this.cartService.changeCartQtyUI({ ...this._cartItem, quantity: count });
  }
}
