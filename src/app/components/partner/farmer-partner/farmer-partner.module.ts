import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FarmerPartnerComponent } from "./farmer-partner.component";
import { UtilitiesModule } from "../../utilities/utilities.module";
import { FormUtilsModule } from "../../utilities/form/formUtils.module";
import { CardModule } from "../../utilities/card/card.module";

const routes: Routes = [{ path: "", component: FarmerPartnerComponent }];

@NgModule({
  declarations: [FarmerPartnerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), UtilitiesModule, FormUtilsModule, CardModule],
})
export class FarmerPartnerModule {}
