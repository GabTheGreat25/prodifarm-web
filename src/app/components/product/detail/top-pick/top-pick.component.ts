import { Component, OnInit, Input } from "@angular/core";
import { IProduct } from "src/app/interfaces";
import { ApiService } from "src/app/services";

@Component({
  selector: "app-top-pick",
  templateUrl: "./top-pick.component.html",
  styleUrls: ["./top-pick.component.scss"],
})
export class TopPickComponent implements OnInit {
  @Input() topProducts?: IProduct[];
  constructor(private api: ApiService) {}

  ngOnInit(): void {}
}
