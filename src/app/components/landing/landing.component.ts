import { Component, OnInit } from "@angular/core";
import { Global } from "src/app/global";
import { ApiService, HelperService } from "src/app/services";
import { environment as env } from "../../../environments/environment";
import { IProduct } from "src/app/interfaces";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  google = `${env.ASSETS_URL}images/png/google-play-badge.png`;
  ios = `${env.ASSETS_URL}images/png/app-store-badge.png`;
  promdiGrayBg = `${env.ASSETS_URL}images/svg/promdifarm-gray-bg.svg`;
  registerBannerImg = `${env.ASSETS_URL}images/png/register-banner-image.png`;
  badges = [
    {
      icon: "farmer",
      text: "Products from Organic Farmers",
    },
    {
      icon: "fastDeliver",
      text: "24 hour fast and free delivery",
    },
    {
      icon: "gift",
      text: "Promotions of the week",
    },
    {
      icon: "sale",
      text: " Affordable prices. Same great quality",
    },
  ];
  registerSection = {
    image: this.registerBannerImg,
    top: "Register Now On",
    bottom: "Our Mobile App",
    devices: [
      {
        name: this.google,
        alt: "Google Play Store",
      },
      {
        name: this.ios,
        alt: "Apple App Store",
      },
    ],
  };

  topProducts: IProduct[] = [];
  newProducts: IProduct[] = [];

  constructor(public global: Global, private helper: HelperService, private api: ApiService) {}

  ngOnInit(): void {
    const id = this.helper.getId();
    if (!id) this.helper.generateId();

    this.getTopProducts();
    this.getNewProducts();
  }

  getTopProducts() {
    this.api.get<IProduct>("products/top").then((res) => {
      if (res.status === "success" && res?.data) this.topProducts = res.data;
    });
  }

  getNewProducts() {
    this.api.get<IProduct>("products/new").then((res) => {
      if (res.status === "success" && res?.data) this.newProducts = res.data;
    });
  }
}
