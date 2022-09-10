import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about.component";
import { UtilitiesModule } from "../utilities/utilities.module";
import { RouterModule } from "@angular/router";
import { CardModule } from "../utilities/card/card.module";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: "", component: AboutComponent }]), UtilitiesModule, CardModule],
})
export class AboutModule {}
