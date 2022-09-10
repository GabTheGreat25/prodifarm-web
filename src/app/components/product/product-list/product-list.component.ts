import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ICartProduct, IProduct } from "src/app/interfaces";
import { ApiService } from "src/app/services";
import { AuthQuery } from "src/app/states/auth/auth.query";
import { CartService } from "src/app/states/cart/cart.service";
import { environment as env } from "src/environments/environment";
@Component({
  selector: "app-product-list]",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  @Input() listTitle: string = "All Available Products";
  @Input() containerClass: string = "defaultContainer";
  @Input() products: IProduct[] = [];
  constructor() {}

  ngOnInit(): void {}
}
