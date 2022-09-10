import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment as env } from "src/environments/environment";
@Component({
  selector: "app-browse-categories",
  templateUrl: "./browse-categories.component.html",
  styleUrls: ["./browse-categories.component.scss"],
})
export class BrowseCategoriesComponent implements OnInit {
  salad = `${env.ASSETS_URL}images/png/salad.png`;
  rice = `${env.ASSETS_URL}images/png/rice.png`;
  orange = `${env.ASSETS_URL}images/png/orange.png`;
  meat = `${env.ASSETS_URL}images/png/meat.png`;
  fish = `${env.ASSETS_URL}images/png/fish.png`;

  produce = [
    {
      category: "rice",
      text: "Choose your",
      boldText: "Local Rice",
      buttonText: "Shop Here",
      image: this.rice,
    },
    {
      category: "fruit",
      text: "Fruits and Herbs",
      boldText: "Organic",
      buttonText: "Shop Here",
      image: this.orange,
    },
  ];

  proteins = [
    {
      category: "meat",
      text: "High Quality",
      boldText: "Meat",
      buttonText: "Shop Here",
      image: this.meat,
    },
    {
      category: "fish",
      text: "Fresh Fish",
      boldText: "Daily",
      buttonText: "Shop Here",
      image: this.fish,
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goto(category: string) {
    const categories = {
      fresh: () => this.freshIngredients(),
      meat: () => this.meatProducts(),
      rice: () => this.localRice(),
      fruit: () => this.organicFruits(),
      fish: () => this.fishProducts(),
    };

    categories[category as "fresh" | "meat" | "rice" | "fruit" | "fish"]();
  }

  freshIngredients() {
    this.router.navigate(["/products"]);
  }

  localRice() {
    this.router.navigate(["/products"]);
  }

  organicFruits() {
    this.router.navigate(["/products"]);
  }

  meatProducts() {
    this.router.navigate(["/products"]);
  }

  fishProducts() {
    this.router.navigate(["/products"]);
  }
}
