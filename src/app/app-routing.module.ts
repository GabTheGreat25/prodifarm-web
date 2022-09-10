import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuard } from "./guards";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./components/landing/landing.module").then((m) => m.LandingModule),
  },
  {
    path: "order",
    loadChildren: () => import("./components/order/order.module").then((m) => m.OrderModule),
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    loadChildren: () => import("./components/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "cart",
    loadChildren: () => import("./components/cart/cart.module").then((m) => m.CartModule),
    canActivate: [AuthGuard],
  },
  {
    path: "become-a-partner",
    loadChildren: () => import("./components/partner/partner.module").then((m) => m.PartnerModule),
  },
  {
    path: "checkout",
    loadChildren: () => import("./components/checkout/checkout.module").then((m) => m.CheckoutModule),
    canActivate: [AuthGuard],
  },
  {
    path: "about",
    loadChildren: () => import("./components/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "contact",
    loadChildren: () => import("./components/contact/contact.module").then((m) => m.ContactModule),
  },
  {
    path: "products",
    loadChildren: () => import("./components/product/product.module").then((m) => m.ProductModule),
  },
  {
    path: "404",
    loadChildren: () => import("./components/coming-soon/coming-soon.module").then((m) => m.ComingSoonModule),
  },
  {
    path: "signup",
    loadChildren: () => import("./components/signup/signup.module").then((m) => m.SignupModule),
  },
  {
    path: "otp",
    loadChildren: () => import("./components/otp/otp.module").then((m) => m.OtpModule),
  },
  {
    path: "email-verify",
    loadChildren: () => import("./components/email-verify/email-verify.module").then((m) => m.EmailVerifyModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import("./components/dashboard/dashboard.module").then((m) => m.DashboardModule),
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "stores",
    loadChildren: () => import("./components/outlets/outlets.module").then((m) => m.OutletsModule),
  },
  { path: "**", redirectTo: "404", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
