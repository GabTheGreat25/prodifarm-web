import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-validation-message",
  templateUrl: "./validation-message.component.html",
  styleUrls: ["./validation-message.component.scss"],
})
export class ValidationMessageComponent implements OnInit {
  @Input() validator: string = "";
  alerts = [
    {
      message: `This field is required. Enter registered phone number or mobile in our app.`,
      validator: `username-required`,
    },
    {
      message: `This field is required.`,
      validator: `required`,
    },
    {
      message:
        "Password must be have at least 8 characters long and must contain at least 1 Uppercase letter, 1 number, and 1 symbol other than underscore(_).",
      validator: "password",
    },
    {
      message: "Invalid Email Address",
      validator: "email",
    },
    {
      message: "Invalid mobile number. Enter 11 digit mobile number and don't use dashes and parenthesis",
      validator: "mobile",
    },
    {
      message: "Name fields required",
      validator: "name-required",
    },
    {
      message: "Barangay & District fields required",
      validator: "barangayDistrict-required",
    },
    {
      message: "City and Province fields required",
      validator: "cityProvince-required",
    },
    {
      message: "Invalid Philippine zip code",
      validator: "zip",
    },
    {
      message: "Passwords do not match",
      validator: "password-not-match",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
