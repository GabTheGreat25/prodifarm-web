import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UtilitiesModule } from "../utilities/utilities.module";
import { LandingComponent } from "./landing.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { BrowseCategoriesComponent } from "./browse-categories/browse-categories.component";
import { CardModule } from "../utilities/card/card.module";
import { FeatureProductComponent } from "./feature-product/feature-product.component";
import { ProductListModule } from "../product/product-list/product-list.module";

const routes: Routes = [{ path: "", component: LandingComponent }];

@NgModule({
  declarations: [LandingComponent, CarouselComponent, BrowseCategoriesComponent, FeatureProductComponent],
  imports: [CommonModule, UtilitiesModule, CardModule, ProductListModule, RouterModule.forChild(routes)],
})
export class LandingModule {}
