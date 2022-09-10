import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UtilitiesModule } from "../utilities/utilities.module";
import { ListPageComponent } from "./list-page/list-page.component";
import { RouterModule, Routes } from "@angular/router";
import { ProductListModule } from "./product-list/product-list.module";
import { DetailComponent } from "./detail/detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SellerComponent } from "./detail/seller/seller.component";
import { GalleryComponent } from "./detail/gallery/gallery.component";
import { TopPickComponent } from "./detail/top-pick/top-pick.component";

const routes: Routes = [
  { path: "", component: ListPageComponent },
  { path: ":id", component: DetailComponent },
];

@NgModule({
  declarations: [ListPageComponent, DetailComponent, SellerComponent, GalleryComponent, TopPickComponent],
  imports: [CommonModule, ProductListModule, UtilitiesModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [],
})
export class ProductModule {}
