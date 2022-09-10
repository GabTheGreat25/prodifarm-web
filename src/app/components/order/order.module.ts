import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { UtilitiesModule } from "../utilities/utilities.module";
import { OrderComponent } from "./order.component";

const routes: Routes = [
  {
    path: "",
    children: [{ path: ":category", component: OrderComponent }],
  },
];

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, FormsModule],
})
export class OrderModule {}
