import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "src/app/interfaces";
import { AuthQuery } from "src/app/states/auth/auth.query";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() mxAuto: boolean = false;
  @Input() padding: string = "2rem";
  @Input() product!: IProduct;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(e: any) {
    if (e.currentTarget.parentNode.parentNode.classList.contains("products-container")) {
      this.router.navigate(["/products", this.product._id]);
    }
  }
}
