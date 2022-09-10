import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { BillingComponent } from "./billing/billing.component";
import { FormCardComponent } from "./form-card/form-card.component";

@NgModule({
  declarations: [CardComponent, BillingComponent, FormCardComponent],
  imports: [CommonModule],
  exports: [CardComponent, BillingComponent, FormCardComponent],
})
export class CardModule {}
