import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment as env } from "src/environments/environment";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "src/app/services";

@Component({
  selector: "app-farmer-partner",
  templateUrl: "./farmer-partner.component.html",
  styleUrls: ["./farmer-partner.component.scss"],
})
export class FarmerPartnerComponent implements OnInit {
  promdiGreenBg = `${env.ASSETS_URL}images/svg/promdifarm-green-bg.svg`;
  promdiIcon = `${env.ASSETS_URL}images/svg/promdifarm-icon.svg`;

  form = this.fb.group({
    profile: [],
    password: [],
  });
  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {}

  signUp(form: FormGroup) {
    const { profile, password } = form.value;
    let requestData = { ...profile, ...password };
    this.api.post(`users/farmer`, requestData).then((res) => {
      if (res.error) console.error(res.message);
      if (res.data && res.status == "success") {
        this.router.navigate(["/login"]);
      }
    });
  }
}
