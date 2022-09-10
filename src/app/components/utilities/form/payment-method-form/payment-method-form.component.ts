import { Component, forwardRef, OnDestroy } from "@angular/core";
import {
  ControlValueAccessor,
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  AbstractControl,
} from "@angular/forms";
import { Subscription } from "rxjs";
import { ValidationService } from "src/app/services";

interface PaymentMethodForm {
  paymentMethod: string;
}

@Component({
  selector: "payment-method-form",
  templateUrl: "./payment-method-form.component.html",
  styleUrls: ["./payment-method-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaymentMethodFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PaymentMethodFormComponent),
      multi: true,
    },
  ],
})
export class PaymentMethodFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  visibility: boolean = false;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      paymentMethod: ["", Validators.required],
    });
    this.subscriptions.push(
      this.form.valueChanges.subscribe((value) => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map((s) => s.unsubscribe());
  }

  get value(): PaymentMethodForm {
    return this.form.value;
  }

  get paymentMethod(): AbstractControl {
    return this.form.controls["paymentMethod"];
  }
  get paymentMethodInvalid(): boolean {
    return this.paymentMethod.invalid && this.paymentMethod.untouched;
  }

  set value(value: PaymentMethodForm) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: any): void {
    if (value) this.value = value;
    if (value === null) this.form.reset();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { paymentMethod: { valid: false } };
  }
}
