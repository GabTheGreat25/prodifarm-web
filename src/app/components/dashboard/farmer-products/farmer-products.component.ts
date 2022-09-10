import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ICategory, IProductSKU, IProduct } from "src/app/interfaces";
import { ApiService } from "src/app/services";

@Component({
  selector: "app-farmer-products",
  templateUrl: "./farmer-products.component.html",
  styleUrls: ["./farmer-products.component.scss"],
})
export class FarmerProductsComponent implements OnInit {
  sortState: string = "all";
  sortButtons = [
    {
      name: "all",
      type: "all",
    },
    {
      name: "sold out",
      type: "sold-out",
    },
    {
      name: "cancelled",
      type: "cancelled",
    },
    {
      name: "draft",
      type: "draft",
    },
    {
      name: "publish",
      type: "publish",
    },
  ];

  searchFilter = this.fb.group({
    productName: [],
    category: [],
  });

  categories: ICategory[] = [];
  skus: IProductSKU[] = [];
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.api.get<ICategory>(`categories`).then((res) => {
      if (res.status === "success" && res.data) {
        this.categories = res.data;
      }
    });
    this.api.get<IProductSKU>(`skus?populate=product`).then((res) => {
      if (res.status === "success" && res.data) {
        this.skus = res.data;
        console.log(this.skus);
      }
    });
  }

  ngOnInit(): void {}

  sortProducts(type: string) {
    this.sortState = type;
  }

  getProductCategory(sku: IProductSKU) {
    return this.categories.filter(({ _id }) => (<IProduct>sku.product)?.category == _id)[0];
  }
}
