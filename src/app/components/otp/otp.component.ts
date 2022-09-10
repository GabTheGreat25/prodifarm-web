import { Component, OnInit } from "@angular/core";
import { environment as env } from "src/environments/environment";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.component.html",
  styleUrls: ["./otp.component.scss"],
})
export class OtpComponent implements OnInit {
  promdiGreenBg = `${env.ASSETS_URL}images/svg/promdifarm-green-bg.svg`;
  oneTimepassword = `${env.ASSETS_URL}images/svg/otp-verification.svg`;

  constructor() {}

  ngOnInit(): void {}
}
