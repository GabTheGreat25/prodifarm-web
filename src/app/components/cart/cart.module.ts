import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { UtilitiesModule } from "../utilities/utilities.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "../utilities/card/card.module";
import { CartItemComponent } from "./cart-item/cart-item.component";

const routes: Routes = [{ path: "", component: CartComponent }];

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, ReactiveFormsModule, CardModule],
})
export class CartModule {}
