import { Component, Input, OnInit, HostListener } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Global } from "src/app/global";
import { AuthQuery } from "src/app/states/auth/auth.query";
import { AuthStore } from "src/app/states/auth/auth.store";
import { CartQuery } from "src/app/states/cart/cart.query";
import { environment as env } from "src/environments/environment";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  logo = `${env.ASSETS_URL}images/png/logo.png`;
  logoBlack = `${env.ASSETS_URL}images/png/logo-black.png`;
  avatar = `${env.ASSETS_URL}images/png/avatar.png`;
  _showSearchBar: boolean = true;
  @Input() set showSearchBar(value: boolean) {
    this._showSearchBar = value;
  }
  hasScrolled = false;
  showDrawer = false;
  isProductPage = false; // Just for TESTING. Use router conditional rendering for header links
  @Input() disableTabs: string[] = [];
  @Input() showSearch = false;
  inverse = false;
  @HostListener("window:scroll", ["$event"]) onWindowScroll(): any {
    this.showDrawer = false;
    const element = document.querySelector("nav") as HTMLElement;
    this.hasScrolled = window.pageYOffset > element.clientHeight;
    this.inverse = this.hasScrolled || this.showDrawer;
    element.classList[this.inverse ? "add" : "remove"]("navbar-inverse");
  }

  constructor(
    public global: Global,
    private authQuery: AuthQuery,
    private authStore: AuthStore,
    private cartQuery: CartQuery,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authStore.logout();
  }

  get isAuthenticated() {
    return this.authQuery.isAuthenticated;
  }

  get user() {
    return this.authQuery.user;
  }

  get cartItems() {
    return this.cartQuery.totalItems;
  }

  openDrawer(): void {
    const element = document.querySelector("nav") as HTMLElement;
    this.showDrawer = !this.showDrawer;
    this.inverse = this.hasScrolled || this.showDrawer;
    element.classList[this.inverse ? "add" : "remove"]("navbar-inverse");
  }

  onMouseLeave(): void {
    if (this.showDrawer) {
      this.openDrawer();
    }
  }

  search(search: string) {
    this.router.navigate(["/products"], { queryParams: { search } });
  }
}
