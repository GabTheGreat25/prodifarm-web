import { Component, OnInit } from "@angular/core";
import { environment as env } from "src/environments/environment";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "src/app/services";
import { Router } from "@angular/router";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  promdiBg = `${env.ASSETS_URL}images/svg/promdifarm-green-bg.svg`;
  promdiIcon = `${env.ASSETS_URL}images/svg/promdifarm-icon.svg`;
  form = this.fb.group({
    profile: [],
    email: [],
    password: [],
  });
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  signup(form: FormGroup) {
    const { profile, email, password } = form.value;
    let requestData = { ...profile, ...password, ...email };
    this.api.post(`users/customer`, requestData).then((res) => {
      if (res.error) console.error(res.message);
      if (res.data && res.status == "success") {
        this.router.navigate(["/login"]);
      }
    });
  }
}
