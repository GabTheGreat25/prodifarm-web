import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OutletsComponent } from "./outlets.component";
import { RouterModule, Routes } from "@angular/router";
import { MapModule } from "../map/map.module";

const routes: Routes = [
  { path: "", redirectTo: "/stores/map", pathMatch: "full" },
  { path: "map", component: OutletsComponent },
];

@NgModule({
  declarations: [OutletsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MapModule],
})
export class OutletsModule {}
