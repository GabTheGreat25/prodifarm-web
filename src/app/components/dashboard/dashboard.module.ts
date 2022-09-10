import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { UtilitiesModule } from "../utilities/utilities.module";
import { ProfileComponent } from "./profile/profile.component";
import { PurchaseComponent } from "./purchase/purchase.component";
import { AddressComponent } from "./address/address.component";
import { SetPasswordComponent } from "./set-password/set-password.component";
import { FormUtilsModule } from "../utilities/form/formUtils.module";
import { PurchaseItemComponent } from "./purchase/purchase-item/purchase-item.component";
import { FarmerProductsComponent } from "./farmer-products/farmer-products.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FarmerProductItemComponent } from "./farmer-products/farmer-product-item/farmer-product-item.component";
const routes: Routes = [
  { path: "", redirectTo: "/dashboard/(dashboard:profile)", pathMatch: "full" },
  { path: "profile", component: ProfileComponent, outlet: "dashboard" },
  { path: "purchase", component: PurchaseComponent, outlet: "dashboard" },
  { path: "address", component: AddressComponent, outlet: "dashboard" },
  { path: "set-password", component: SetPasswordComponent, outlet: "dashboard" },
  { path: "products", component: FarmerProductsComponent, outlet: "dashboard" },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    PurchaseComponent,
    PurchaseItemComponent,
    AddressComponent,
    SetPasswordComponent,
    FarmerProductsComponent,
    FarmerProductItemComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, FormUtilsModule, ReactiveFormsModule],
})
export class DashboardModule {}
