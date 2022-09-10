import { Component, OnInit } from "@angular/core";
import { environment as env } from "src/environments/environment";

@Component({
  selector: "app-email-verify",
  templateUrl: "./email-verify.component.html",
  styleUrls: ["./email-verify.component.scss"],
})
export class EmailVerifyComponent implements OnInit {
  promdiGreenBg = `${env.ASSETS_URL}images/svg/promdifarm-green-bg.svg`;
  emailVerification = `${env.ASSETS_URL}images/svg/email-verification.svg`;

  constructor() {}

  ngOnInit(): void {}
}
