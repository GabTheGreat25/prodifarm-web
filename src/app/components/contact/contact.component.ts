import { Component, OnInit } from "@angular/core";
import { ApiService, HelperService, ValidationService } from "src/app/services";
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { environment as env } from "../../../environments/environment";
import { Router } from "@angular/router";
import { Global } from "src/app/global";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  disableTabs = ["Sign-Up"];
  promdiBackground = `${env.ASSETS_URL}images/svg/promdifarm-green-bg.svg`;
  promdiIcon = `${env.ASSETS_URL}images/svg/promdifarm-icon.svg`;
  isLoading = false;
  error = "";
  data = { first_name: "", last_name: "", email: "", message: "" };
  form = this.fb.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    email: ["", [Validators.required, this.validator.email]],
    message: ["", Validators.required],
  });

  constructor(
    private api: ApiService,
    private helper: HelperService,
    private router: Router,
    private global: Global,
    private fb: FormBuilder,
    private validator: ValidationService
  ) {}

  get first_name(): AbstractControl {
    return this.form.controls["first_name"];
  }

  get last_name(): AbstractControl {
    return this.form.controls["last_name"];
  }

  get name_invalid(): boolean {
    return (this.first_name.invalid && this.first_name.touched) || (this.last_name.invalid && this.last_name.touched);
  }

  get name_required(): boolean {
    return this.first_name.errors?.required || this.last_name.errors?.required;
  }

  get email(): AbstractControl {
    return this.form.controls["email"];
  }

  get email_invalid(): boolean {
    return this.email.invalid && this.email.touched;
  }

  get message(): AbstractControl {
    return this.form.controls["message"];
  }

  get message_invalid(): boolean {
    return this.message.invalid && this.message.touched;
  }

  get message_required(): boolean {
    return this.message.errors?.required;
  }

  ngOnInit(): void {
    const id = this.helper.getId();
    if (!id) this.helper.generateId();
  }

  contact(form: FormGroup): void {
    this.isLoading = false;
  }

  validateAllFormFields(form: FormGroup): void {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
        control.markAsDirty();
      }
    });
  }

  setFeedback(): void {
    const data = localStorage.getItem("pf-feedback");
    if (data) {
      const value = JSON.parse(data);
      this.data = { first_name: value.first_name, last_name: value.last_name, email: value.email, message: value.message };
    }
  }

  onSubmit(): void {
    this.router.navigate(["404"]);
  }
}
