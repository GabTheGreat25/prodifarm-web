import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Global } from "src/app/global";
import { IApiResponse } from "src/app/interfaces";
import { ApiService, HelperService } from "src/app/services";
import { environment as env } from "../../../environments/environment";

interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  disableTabs = ["Download APP"];
  images = `${env.ASSETS_URL}images/`;
  icon = `${env.ASSETS_URL}images/icon.png`;
  onions = `${env.ASSETS_URL}images/onions.png`;
  tomatoes = `${env.ASSETS_URL}images/onions.png`;
  apple = `${env.ASSETS_URL}images/apple.png`;
  products: IProduct[] = [];
  categories: any[] = [];
  cartId: any;

  constructor(public global: Global, private route: ActivatedRoute, private api: ApiService, private helper: HelperService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getProductsByFilter(params.category);
    });
    this.getCategories();

    this.cartId = this.helper.getId();
    if (!this.cartId) this.helper.generateId();
  }

  getProductsByFilter(filter: string): void {
    const capitalizeFilter = filter.charAt(0).toUpperCase() + filter.slice(1);
    const uri = filter === "all" ? `categories` : `categories/search?name=${capitalizeFilter}`;
    this.api
      .get(uri)
      .then((res: IApiResponse<any>) => {
        if (filter === "all") return;
        const data = res.data ?? [];
        return data[0]._id;
      })
      .then((res) => {
        this.getProducts(res);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  }

  actionButton(value: string, index: number): void {
    if (value === "increment") this.products[index].quantity++;
    if (value === "decrement") this.products[index].quantity--;
  }

  openModal(template: TemplateRef<any>): void {}

  getCategories(): void {
    this.api
      .get(`categories`)
      .then((res: any) => {
        this.categories = res.data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  }

  getProducts(id: string): void {
    const uri = !id ? `products` : `products/search?category=${id}`;
    this.api
      .get(uri)
      .then((res: IApiResponse<any>) => {
        this.products = res.data ?? [];
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  }

  addToCart(product: string, quantity: number): void {
    const data = {
      products: [{ product, quantity }],
    };
    this.api
      .post(`carts/${this.cartId}`, data)
      .then((res: IApiResponse<any>) => {})
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  }
}
