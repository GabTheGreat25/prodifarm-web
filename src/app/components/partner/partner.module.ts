import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UtilitiesModule } from "../utilities/utilities.module";
import { NgModule } from "@angular/core";
import { PartnerComponent } from "./partner.component";
import { CardModule } from "../utilities/card/card.module";

const routes: Routes = [
  { path: "farmer", loadChildren: () => import("./farmer-partner/farmer-partner.module").then((m) => m.FarmerPartnerModule) },
  { path: "rider", loadChildren: () => import("./rider-partner/rider-partner.module").then((m) => m.RiderPartnerModule) },
  { path: "", component: PartnerComponent },
];

@NgModule({
  declarations: [PartnerComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, CardModule],
})
export class PartnerModule {}
