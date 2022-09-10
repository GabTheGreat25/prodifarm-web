import { Component, OnInit } from "@angular/core";
import { environment as env } from "src/environments/environment";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  promdiLogo = `${env.ASSETS_URL}images/png/logo.png`;
  resources = [
    { label: "Help Center", link: "/" },
    { label: "FAQ", link: "/" },
    { label: "Blog", link: "/" },
  ];
  contacts = [
    { label: "+63955 201 4564", link: "tel:+639552014565", svg: "phone" },
    { label: "promdifarmph@gmail.com", link: "mailto:promdifarmph@gmail.com", svg: "email" },
  ];
  informations = [
    { label: "About PromdiFarm", link: "/" },
    { label: "Partner with us", link: "/" },
    { label: "Privacy Policy", link: "/" },
    { label: "Terms & Conditions", link: "/" },
  ];
  socials = [
    { label: "facebook", link: "https://www.facebook.com/", svg: "facebook" },
    { label: "twitter", link: "https://www.twitter.com/home", svg: "twitter" },
    { label: "instagram", link: "https://www.instagram.com/", svg: "instagram" },
  ];

  constructor() {}

  ngOnInit(): void {}

  scrollTop(): void {
    window.scrollTo(0, 0);
  }
}
