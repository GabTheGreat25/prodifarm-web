import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "../../utilities/card/card.module";
import { UtilitiesModule } from "../../utilities/utilities.module";
import { RatingComponent } from "../rating/rating.component";
import { ProductListComponent } from "./product-list.component";

@NgModule({
  declarations: [ProductListComponent, RatingComponent],
  imports: [CommonModule, CardModule, UtilitiesModule],
  exports: [ProductListComponent, RatingComponent],
})
export class ProductListModule {}
