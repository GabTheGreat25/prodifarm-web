import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Global } from "src/app/global";
import { IProduct } from "src/app/interfaces";
import { ApiService } from "src/app/services/api/api.service";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"],
})
export class ListPageComponent implements OnInit {
  title: string = "All Products";
  sortButtons = [
    {
      type: "popular",
    },
    {
      type: "new",
    },
    {
      type: "price",
    },
  ];
  currency = {
    peso: `&#8369`,
  };
  categories = [
    {
      name: "fresh-goods",
      text: "Fresh Goods",
    },
    {
      name: "vegetables",
      text: "Vegetables",
    },
    {
      name: "meat",
      text: "Meat",
    },
    {
      name: "fruits",
      text: "Fruits",
    },
    {
      name: "fish",
      text: "Fish",
    },
    {
      name: "others",
      text: "Others",
    },
  ];
  products: IProduct[] = [];

  ratingFilters = [5, 4, 3, 2, 1];

  sortState: string = "popular";

  constructor(private global: Global, private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params?.search && params?.search !== "") {
        this.title = `Search result for ${params.search}`;
        return this.searchProduct(params.search);
      }
      this.title = "All products";
      this.getProducts();
    });
  }

  sortProducts(type: string) {
    const methods = {
      popular: (a: any, b: any) => b.ratings - a.ratings,
      new: (a: any, b: any) => +new Date(b?.DateCreated) - +new Date(a?.DateCreated),
      price: (a: any, b: any) => a.price - b.price,
    };

    const sorted = this.products.sort(methods[type as "popular" | "new" | "price"]);
    this.products = sorted;
    this.sortState = type;
  }

  filterByRating(rating: number) {}

  searchProduct(value: string) {
    this.getProducts("products/search/" + value);
  }

  getProducts(url = "products") {
    this.api.get<IProduct>(url).then((res) => {
      if (res.status === "success" && res.data) {
        this.products = res.data;
        this.sortProducts(this.sortState);
      }
    });
  }
}
