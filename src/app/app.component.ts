import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  show = true;
  showSearchBar = true;
  hideHeaderRoutes = ["/404", "/become-a-partner", "/signup", "/otp", "/email-verify", "/login", "/contact"];
  hideSearchBarRoutes = [
    "/about",
    "/contact",
    "/become-a-partner",
    "/login",
    "/cart",
    "/checkout",
    "/otp",
    "/email-verify",
    "/login",
    "/dashboard",
  ];
  constructor(public router: Router) {
    this.checkCurrentRoute(router);
  }

  checkCurrentRoute(router: Router): void {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.show = !this.hideHeaderRoutes.find((r) => val.urlAfterRedirects.includes(r));
        this.showSearchBar = !this.hideSearchBarRoutes.find((r) => val.urlAfterRedirects.includes(r));
      }
    });
  }
}
