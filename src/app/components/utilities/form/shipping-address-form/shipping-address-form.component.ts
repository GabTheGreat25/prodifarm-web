import { Component, forwardRef, OnDestroy } from "@angular/core";
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormControl,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validators,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { ShippingAddressForm } from "src/app/interfaces";
import { Subscription } from "rxjs";
import { ValidationService } from "src/app/services";

@Component({
  selector: "app-shipping-address-form",
  templateUrl: "./shipping-address-form.component.html",
  styleUrls: ["./shipping-address-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ShippingAddressFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ShippingAddressFormComponent),
      multi: true,
    },
  ],
})
export class ShippingAddressFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      address: ["", [Validators.required]],
      city: ["", [Validators.required]],
      province: ["", [Validators.required]],
      zip: ["", [Validators.required, Validators.min(400), Validators.max(10000)]],
      makeDefault: [],
      asBilling: [],
    });
    this.subscriptions.push(
      this.form.valueChanges.subscribe((value) => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map((m) => m.unsubscribe());
  }

  get value(): ShippingAddressForm {
    return this.form.value;
  }

  get address(): AbstractControl {
    return this.form.controls["address"];
  }

  get city(): AbstractControl {
    return this.form.controls["city"];
  }

  get province(): AbstractControl {
    return this.form.controls["province"];
  }

  get zip(): AbstractControl {
    return this.form.controls["zip"];
  }
  get makeDefault(): AbstractControl {
    return this.form.controls["makeDefault"];
  }
  get asBilling(): AbstractControl {
    return this.form.controls["asBilling"];
  }

  get addressInvalid(): boolean {
    return this.address.invalid && this.address.touched;
  }

  get cityProvinceInvalid(): boolean {
    return (this.city.invalid && this.city.touched) || (this.province.invalid && this.province.touched);
  }

  get cityProvinceErrors(): ValidationErrors | null {
    return this.city.errors || this.province.errors;
  }

  get zipInvalid(): boolean {
    return this.zip.invalid && this.zip.touched;
  }

  get zipInvalidError(): boolean {
    return this.zip.errors?.min || this.zip.errors?.max;
  }

  set value(value: ShippingAddressForm) {
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
    return this.form.valid ? null : { shipping: { valid: false } };
  }
}
