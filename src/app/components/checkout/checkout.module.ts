import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CardModule } from "../utilities/card/card.module";
import { FormUtilsModule } from "../utilities/form/formUtils.module";
import { UtilitiesModule } from "../utilities/utilities.module";
import { CheckoutComponent } from "./checkout.component";
import { OrderItemComponent } from "./order-item/order-item.component";

const routes: Routes = [
  {
    path: "",
    component: CheckoutComponent,
  },
];

@NgModule({
  declarations: [CheckoutComponent, OrderItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, CardModule, FormUtilsModule, ReactiveFormsModule],
})
export class CheckoutModule {}
