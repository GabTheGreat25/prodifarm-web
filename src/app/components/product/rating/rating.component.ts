import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  range = (start: number = 0, end: number = 5) => new Array(end - start).fill(0).map((_, i) => i + start);
  constructor() {}

  ngOnInit(): void {}
}
