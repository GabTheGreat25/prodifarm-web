import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ImageNotFoundComponent } from "./image-not-found/image-not-found.component";
import { LazyBgImgDirective } from "src/app/directives/lazy-img/lazy-img.directive";
import { IconComponent } from "./icon/icon.component";
import { SearchBarComponent } from "./header/search-bar/search-bar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QuantityControlComponent } from "./quantity-control/quantity-control.component";
import { CopyPasteDirective } from "src/app/directives/copy-paste/copy-paste.directive";
import { QtyControlDirective } from "src/app/directives/qty-control/qty-control.directive";
import { ValidationMessageComponent } from "./validation-message/validation-message.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ImageNotFoundComponent,
    LazyBgImgDirective,
    IconComponent,
    SearchBarComponent,
    QuantityControlComponent,
    CopyPasteDirective,
    QtyControlDirective,
    ValidationMessageComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ImageNotFoundComponent,
    LazyBgImgDirective,
    IconComponent,
    SearchBarComponent,
    QuantityControlComponent,
    CopyPasteDirective,
    QtyControlDirective,
    ValidationMessageComponent,
  ],
})
export class UtilitiesModule {}
