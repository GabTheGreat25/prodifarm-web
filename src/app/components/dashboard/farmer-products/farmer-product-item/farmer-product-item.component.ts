import { Component, OnInit, Input } from "@angular/core";
import { ICategory, IProduct, IProductSKU } from "src/app/interfaces";

@Component({
  selector: "app-farmer-product-item",
  templateUrl: "./farmer-product-item.component.html",
  styleUrls: ["./farmer-product-item.component.scss"],
})
export class FarmerProductItemComponent implements OnInit {
  _sku!: IProductSKU;
  @Input() set sku(value: IProductSKU) {
    this._sku = value;
  }
  _category!: ICategory;
  @Input() set category(value: ICategory) {
    this._category = value;
  }
  constructor() {}

  ngOnInit(): void {}

  isIProduct(product: any, props: any): product is IProduct | string {
    return product[props] !== undefined ? product[props] : (product as string);
  }
}
