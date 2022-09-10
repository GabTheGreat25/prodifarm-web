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
import { PasswordForm } from "src/app/interfaces";
import { ValidationService } from "src/app/services";

@Component({
  selector: "app-change-password-form",
  templateUrl: "./change-password-form.component.html",
  styleUrls: ["./change-password-form.component.scss"],
})
export class ChangePasswordFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  visibility: boolean = false;
  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.form = this.fb.group(
      {
        oldPassword: ["", [Validators.required, this.validator.password]],
        password: ["", [Validators.required, this.validator.password]],
        confirmPassword: [""],
      },
      { validators: this.validator.matchPassword }
    );
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

  get value(): PasswordForm {
    return this.form.value;
  }

  get oldPassword(): AbstractControl {
    return this.form.controls["oldPassword"];
  }
  get oldPasswordInvalid(): boolean {
    return this.oldPassword.invalid && this.oldPassword.touched;
  }

  get password(): AbstractControl {
    return this.form.controls["password"];
  }
  get passwordInvalid(): boolean {
    return this.password.invalid && this.password.touched;
  }

  get confirmPassword(): AbstractControl {
    return this.form.controls["confirmPassword"];
  }

  get confirmPasswordInvalid(): boolean {
    return this.confirmPassword.invalid && this.confirmPassword.touched;
  }

  set value(value: PasswordForm) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched;
  }

  toggleVisibility() {
    this.visibility = !this.visibility;
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
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
    return this.form.valid ? null : { pasword: { valid: false } };
  }
}
