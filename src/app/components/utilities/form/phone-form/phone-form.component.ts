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
import { ProfileForm } from "src/app/interfaces";
import { Subscription } from "rxjs";
import { ValidationService } from "src/app/services";
@Component({
  selector: "app-phone-form",
  templateUrl: "./phone-form.component.html",
  styleUrls: ["./phone-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneFormComponent),
      multi: true,
    },
  ],
})
export class PhoneFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.form = this.fb.group({
      phoneNumber: ["", [Validators.required, this.validator.mobile]],
      verifCode: ["", [Validators.required]],
    });
    this.subscriptions.push(
      this.form.valueChanges.subscribe((value) => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  get value(): ProfileForm {
    return this.form.value;
  }
  get phoneNumber(): AbstractControl {
    return this.form.controls["phoneNumber"];
  }
  get verifCode(): AbstractControl {
    return this.form.controls["verifCode"];
  }
  get codeInvalid(): boolean {
    return this.verifCode.invalid && this.verifCode.touched;
  }
  get codeErrors(): ValidationErrors | null {
    return this.verifCode.errors || this.verifCode.errors;
  }

  set value(value: ProfileForm) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
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
    return this.form.valid ? null : { profile: { valid: false } };
  }
}
