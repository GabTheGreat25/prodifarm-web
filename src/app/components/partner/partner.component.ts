import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { environment as env } from "src/environments/environment";

@Component({
  selector: "app-partner",
  templateUrl: "./partner.component.html",
  styleUrls: ["./partner.component.scss"],
})
export class PartnerComponent implements OnInit {
  promdifarmBG = `${env.ASSETS_URL}images/svg/promdifarm-green-bg.svg`;
  rider = `${env.ASSETS_URL}images/svg/become-a-rider.svg`;
  farmer = `${env.ASSETS_URL}images/svg/become-a-farmer.svg`;
  cards = [
    {
      image: this.rider,
      title: "Become our rider partner",
      content: "Partner with us to ride your own livelihood and more. Let's get started on this journey together.",
      btn: { name: "Register as Rider", url: "rider" },
    },
    {
      image: this.farmer,
      title: "Become our farmer partner",
      content: "Partner with us to set your own price, grow your own living and more. Let us prosper to the greatest opportunity.",
      btn: { name: "Register as Farmer", url: "farmer" },
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goto(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });
  }
}
