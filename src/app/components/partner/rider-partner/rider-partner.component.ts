import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-rider-partner",
  templateUrl: "./rider-partner.component.html",
  styleUrls: ["./rider-partner.component.scss"],
})
export class RiderPartnerComponent implements OnInit {
  vehicle: any = ["Motorcycle", "Bike", "Multi-cab"];

  form = new FormGroup({
    products: new FormControl("", Validators.required),
  });

  get controls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    this.router.navigate(["login"]);
  }

  onChange(e: any): void {}
}
