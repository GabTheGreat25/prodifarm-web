import { Component, forwardRef, OnDestroy } from "@angular/core";
import {
  ControlValueAccessor,
  Validators,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { Subscription } from "rxjs";
import { AddressForm } from "src/app/interfaces";
import { ValidationService } from "src/app/services";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true,
    },
  ],
})
export class AddressFormComponent implements ControlValueAccessor, OnDestroy {
  addressTypes: string[] = ["home", "office"];
  countries: string[] = ["Philippines"];
  form: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      type: [],
      unit: [""],
      street: ["", [Validators.required]],
      barangay: ["", [Validators.required]],
      district: ["", [Validators.required]],
      city: ["", [Validators.required]],
      province: ["", [Validators.required]],
      country: [],
      zip: ["", [Validators.required, Validators.min(400), Validators.max(10000)]],
    });
    this.subscriptions.push(
      this.form.valueChanges.subscribe((value) => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  get value(): AddressForm {
    return this.form.value;
  }

  get type(): AbstractControl {
    return this.form.controls["type"];
  }

  get name(): AbstractControl {
    return this.form.controls["name"];
  }

  get street(): AbstractControl {
    return this.form.controls["street"];
  }

  get barangay(): AbstractControl {
    return this.form.controls["barangay"];
  }

  get district(): AbstractControl {
    return this.form.controls["district"];
  }

  get barangayDistrictInvalid(): boolean {
    return (this.barangay.invalid && this.barangay.touched) || (this.district.invalid && this.district.touched);
  }

  get barangayDistrictErrors(): ValidationErrors | null {
    return this.barangay.errors || this.district.errors;
  }

  get cityProvinceInvalid(): boolean {
    return (this.city.invalid && this.city.touched) || (this.province.invalid && this.province.touched);
  }

  get cityProvinceErrors(): ValidationErrors | null {
    return this.city.errors || this.province.errors;
  }

  get city(): AbstractControl {
    return this.form.controls["city"];
  }

  get province(): AbstractControl {
    return this.form.controls["province"];
  }

  get country(): AbstractControl {
    return this.form.controls["country"];
  }

  get zip(): AbstractControl {
    return this.form.controls["zip"];
  }

  set value(value: AddressForm) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  onSelectChange(e: any) {
    this.type.setValue(e.target.value, { onlySelf: true });
    this.value = { ...this.value, type: this.type.value };
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { address: { valid: false } };
  }
}
