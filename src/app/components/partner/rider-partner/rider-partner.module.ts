import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RiderPartnerComponent } from "./rider-partner.component";
import { UtilitiesModule } from "../../utilities/utilities.module";

const routes: Routes = [{ path: "", component: RiderPartnerComponent }];

@NgModule({
  declarations: [RiderPartnerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class RiderPartnerModule {}
