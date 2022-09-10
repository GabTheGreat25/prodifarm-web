import { Component, Input, OnInit } from "@angular/core";
import { IProductSKU } from "src/app/interfaces";

@Component({
  selector: "app-purchase-item",
  templateUrl: "./purchase-item.component.html",
  styleUrls: ["./purchase-item.component.scss"],
})
export class PurchaseItemComponent implements OnInit {
  _order?: IProductSKU;
  @Input() set order(value: IProductSKU) {
    this._order = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
