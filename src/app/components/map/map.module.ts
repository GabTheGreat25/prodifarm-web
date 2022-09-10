import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapComponent } from "./map.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, GoogleMapsModule, HttpClientModule, HttpClientJsonpModule],
  exports: [MapComponent],
})
export class MapModule {}
