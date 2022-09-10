import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UtilitiesModule } from "../utilities.module";
import { ProfileFormComponent } from "./profile-form/profile-form.component";
import { AddressFormComponent } from "./address-form/address-form.component";
import { PasswordFormComponent } from "./password-form/password-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { EmailFormComponent } from "./email-form/email-form.component";
import { ShippingAddressFormComponent } from "./shipping-address-form/shipping-address-form.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { PaymentMethodFormComponent } from "./payment-method-form/payment-method-form.component";
import { PhoneFormComponent } from "./phone-form/phone-form.component";
import { ChangePasswordFormComponent } from "./change-password-form/change-password-form.component";
import { AccountFormComponent } from "./account-form/account-form.component";

@NgModule({
  declarations: [
    ProfileFormComponent,
    AddressFormComponent,
    PasswordFormComponent,
    LoginFormComponent,
    EmailFormComponent,
    ShippingAddressFormComponent,
    ContactFormComponent,
    PaymentMethodFormComponent,
    PhoneFormComponent,
    ChangePasswordFormComponent,
    AccountFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, UtilitiesModule],
  exports: [
    ProfileFormComponent,
    AddressFormComponent,
    PasswordFormComponent,
    LoginFormComponent,
    EmailFormComponent,
    ShippingAddressFormComponent,
    ContactFormComponent,
    PaymentMethodFormComponent,
    PhoneFormComponent,
    ChangePasswordFormComponent,
    AccountFormComponent,
  ],
})
export class FormUtilsModule {}
