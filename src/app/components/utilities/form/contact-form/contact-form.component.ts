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
import { ContactForm } from "src/app/interfaces";
import { Subscription } from "rxjs";
import { ValidationService } from "src/app/services";
@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ContactFormComponent),
      multi: true,
    },
  ],
})
export class ContactFormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(private fb: FormBuilder, private validator: ValidationService) {
    this.form = this.fb.group({
      fullName: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required, this.validator.mobile]],
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

  get value(): ContactForm {
    return this.form.value;
  }

  get fullName(): AbstractControl {
    return this.form.controls["fullName"];
  }

  get phoneNumber(): AbstractControl {
    return this.form.controls["phoneNumber"];
  }

  get fullNameInvalid(): boolean {
    return this.fullName.invalid && this.fullName.touched;
  }

  get phoneNumberInvalid(): boolean {
    return this.phoneNumber.invalid && this.phoneNumber.touched;
  }

  set value(value: ContactForm) {
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
    return this.form.valid ? null : { contact: { valid: false } };
  }
}
