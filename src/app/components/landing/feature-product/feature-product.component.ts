import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-feature-product",
  templateUrl: "./feature-product.component.html",
  styleUrls: ["./feature-product.component.scss"],
})
export class FeatureProductComponent implements OnInit {
  @Input() featuring: string = "";
  @Input() class: string = "";
  constructor() {}

  ngOnInit(): void {}
}
