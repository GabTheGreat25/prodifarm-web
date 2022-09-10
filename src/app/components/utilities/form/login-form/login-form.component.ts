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
import { LoginForm } from "src/app/interfaces";
import { ValidationService } from "src/app/services";
@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LoginFormComponent),
      multi: true,
    },
  ],
})
export class LoginFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  visibility: boolean = false;
  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.form = this.fb.group({
      username: ["", [Validators.required, this.validator.username]],
      password: ["", [Validators.required, this.validator.password]],
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

  get value(): LoginForm {
    return this.form.value;
  }

  get username(): AbstractControl {
    return this.form.controls["username"];
  }

  get usernameInvalid(): boolean {
    return this.username.invalid && this.username.touched;
  }

  get password(): AbstractControl {
    return this.form.controls["password"];
  }

  get passwordInvalid(): boolean {
    return this.password.invalid && this.password.touched;
  }

  set value(value: any) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  toggleVisibility() {
    this.visibility = !this.visibility;
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
    return this.form.valid ? null : { login: { valid: false } };
  }
}
