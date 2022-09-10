import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Global } from "src/app/global";
import { IUser } from "src/app/interfaces";
import { ApiService, HelperService, ValidationService } from "src/app/services";
import { AuthStore, AuthState } from "src/app/states/auth/auth.store";
import { environment as env } from "../../../environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  disableTabs = ["Log In"];
  promdiBackground = `${env.ASSETS_URL}images/svg/promdifarm-green-bg.svg`;
  promdiIcon = `${env.ASSETS_URL}images/svg/promdifarm-icon.svg`;
  isLoading = false;
  error = "";
  data = { email: "", fullName: "", phoneNumber: "", agreeTerms: false };
  form = this.fb.group({
    login: [],
  });
  visibility: boolean = false;
  constructor(private api: ApiService, private router: Router, private fb: FormBuilder, private authStore: AuthStore) {}

  ngOnInit(): void {}

  login(form: FormGroup): void {
    this.isLoading = true;
    const { username, password } = form.value.login;
    let requestData = {};
    requestData = username.includes("@") ? { email: username, password } : { phoneNumber: username, password };
    this.api.post<IUser, {}>(`users/login`, requestData).then((res) => {
      if (res.error) {
        this.authStore.setError(res.message);
      }
      if (res.data?.length && res.status === "success") {
        this.authStore.login({ user: res.data[0], token: res.meta?.token } as AuthState);
        if (res.data[0]?.type.toLowerCase() === "farmer") this.router.navigate(["/dashboard"]);
        if (res.data[0]?.type.toLowerCase() === "customer") this.router.navigate(["/"]);
      }
    });
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

  setLogin(): void {
    const data = localStorage.getItem("pf-login");
    if (data) {
      const { fullName, email, phoneNumber, agreeTerms } = JSON.parse(data);
      this.data = { fullName, email, phoneNumber, agreeTerms };
    }
  }

  onSubmit(): void {
    this.router.navigate(["404"]);
  }

  toggleVisibility() {
    this.visibility = !this.visibility;
  }
}
