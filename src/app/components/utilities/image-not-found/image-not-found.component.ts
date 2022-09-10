import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-image-not-found",
  templateUrl: "./image-not-found.component.html",
  styleUrls: ["./image-not-found.component.scss"],
})
export class ImageNotFoundComponent implements OnInit {
  @Input() src = "";

  constructor() {}

  ngOnInit(): void {}
}
