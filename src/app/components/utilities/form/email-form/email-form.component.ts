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
} from "@angular/forms";
import { EmailForm } from "src/app/interfaces";
import { Subscription } from "rxjs";
import { ValidationService } from "src/app/services";
@Component({
  selector: "app-email-form",
  templateUrl: "./email-form.component.html",
  styleUrls: ["./email-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailFormComponent),
      multi: true,
    },
  ],
})
export class EmailFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.form = this.fb.group({
      email: ["", [Validators.required, this.validator.email]],
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

  get value(): EmailForm {
    return this.form.value;
  }

  get email(): AbstractControl {
    return this.form.controls["email"];
  }

  get emailInvalid(): boolean {
    return this.email.invalid && this.email.touched;
  }

  set value(value: any) {
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
    return this.form.valid ? null : { email: { valid: false } };
  }
}
