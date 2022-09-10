import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { UtilitiesModule } from "../utilities/utilities.module";
import { CardModule } from "../utilities/card/card.module";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [{ path: "", component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, ReactiveFormsModule, CardModule],
})
export class ContactModule {}
