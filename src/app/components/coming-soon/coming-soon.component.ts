import { Component, OnInit } from "@angular/core";
import { environment as env } from "src/environments/environment";
@Component({
  selector: "app-coming-soon",
  templateUrl: "./coming-soon.component.html",
  styleUrls: ["./coming-soon.component.scss"],
})
export class ComingSoonComponent implements OnInit {
  promdiBg = `${env.ASSETS_URL}/images/svg/promdifarm-green-bg.svg`;
  image404 = `${env.ASSETS_URL}/images/svg/service-maintenance.svg`;
  constructor() {}

  ngOnInit(): void {}
}
