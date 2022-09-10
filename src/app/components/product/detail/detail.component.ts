import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser, IProduct, IProductSKU, ICartProduct } from "src/app/interfaces";
import { ApiService } from "src/app/services";
import { CartQuery } from "src/app/states/cart/cart.query";
import { CartService } from "src/app/states/cart/cart.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  selectedSKUIndex = 0;
  topProducts?: IProduct[];
  product?: IProduct;
  user?: IUser;
  purchaseCount: number = 1;
  isCartItemExists: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cartService: CartService,
    private cartQuery: CartQuery,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params?.id) {
        this.getProduct(params.id);
      }
    });
  }

  get selectedSKU(): IProductSKU | undefined {
    return this.product?.skus?.[this.selectedSKUIndex];
  }

  selectSKU(index: number) {
    this.selectedSKUIndex = index;
    this.checkCartItem();
  }

  checkCartItem() {
    let found = this.cartQuery.products.find(({ sku }) => {
      return sku._id === this.selectedSKU?._id;
    });
    if (found) {
      this.purchaseCount = found?.quantity;
      this.isCartItemExists = true;
    } else {
      this.purchaseCount = 1;
      this.isCartItemExists = false;
    }
  }

  getProduct(id: string) {
    this.api.get<IProduct>("products/" + id).then((res) => {
      if (res.status === "success" && res?.data?.length) {
        this.product = res.data[0];
        this.getUser(this.product?.user as string);
        this.getUserProducts(this.product?.user as string);
        this.checkCartItem();
      }
    });
  }

  getUser(id: string) {
    this.api.get<IUser>("users/" + id).then((res) => {
      if (res.status === "success" && res?.data?.length) {
        this.user = res.data[0];
      }
    });
  }

  getUserProducts(id: string) {
    this.api.get<IProduct>("products/search?user=" + id).then((res) => {
      if (res.status === "success" && res?.data?.length) {
        this.topProducts = res.data;
      }
    });
  }

  addToCart(sku: IProductSKU | undefined) {
    this.cartService.addToCart({ sku, quantity: this.purchaseCount } as ICartProduct);
    this.isCartItemExists = true;
  }

  updateCartItemQty(sku: IProductSKU | undefined) {
    this.cartService.updateCartItemQty({ sku, quantity: this.purchaseCount } as ICartProduct);
  }

  handleCount(count: number) {
    this.purchaseCount = count;
  }

  checkout(sku: IProductSKU | undefined) {
    if (this.isCartItemExists) {
      this.cartService.updateCartItemQty({ sku, quantity: this.purchaseCount } as ICartProduct);
    } else {
      this.cartService.addToCart({ sku, quantity: this.purchaseCount } as ICartProduct);
    }
    this.router.navigate(["/checkout"]);
  }
}
