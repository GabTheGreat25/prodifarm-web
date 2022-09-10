import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CardModule } from "../utilities/card/card.module";
import { FormUtilsModule } from "../utilities/form/formUtils.module";
import { UtilitiesModule } from "../utilities/utilities.module";
import { LoginComponent } from "./login.component";

const routes: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, ReactiveFormsModule, CardModule, FormUtilsModule],
})
export class LoginModule {}
