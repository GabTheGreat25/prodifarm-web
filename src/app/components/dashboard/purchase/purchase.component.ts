import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services";
import { IProductSKU } from "src/app/interfaces/models/product.interface";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-purchase",
  templateUrl: "./purchase.component.html",
  styleUrls: ["./purchase.component.scss"],
})
export class PurchaseComponent implements OnInit {
  orders: IProductSKU[] = [];
  sortState: string = "all";
  sortButtons = [
    {
      name: "all",
      type: "all",
    },
    {
      name: "to ship",
      type: "to-ship",
    },
    {
      name: "to receive",
      type: "to-receive",
    },
    {
      name: "completed",
      type: "completed",
    },
    {
      name: "cancelled",
      type: "cancelled",
    },
  ];

  constructor(private api: ApiService, private http: HttpClient) {}

  ngOnInit(): void {
    this.api.get<IProductSKU>("skus").then((res) => {
      if (res.status === "success" && res.data) {
        this.orders = res.data;
      }
    });
  }

  sortProducts(type: string) {
    this.sortState = type;
  }

  search(search: string) {
    console.log(search);
  }
}
