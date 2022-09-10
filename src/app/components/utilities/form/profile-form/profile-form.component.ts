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
  selector: "app-profile-form",
  templateUrl: "./profile-form.component.html",
  styleUrls: ["./profile-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ProfileFormComponent),
      multi: true,
    },
  ],
})
export class ProfileFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.form = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required, this.validator.mobile]],
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
  get firstName(): AbstractControl {
    return this.form.controls["firstName"];
  }
  get lastName(): AbstractControl {
    return this.form.controls["lastName"];
  }
  get phoneNumber(): AbstractControl {
    return this.form.controls["phoneNumber"];
  }
  get nameInvalid(): boolean {
    return (this.firstName.invalid && this.firstName.touched) || (this.lastName.invalid && this.lastName.touched);
  }
  get nameErrors(): ValidationErrors | null {
    return this.firstName.errors || this.lastName.errors;
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
