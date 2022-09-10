import { Component, OnInit } from "@angular/core";
import { IAddress } from "src/app/interfaces/models/address.interface";
import { ApiService } from "src/app/services";

@Component({
  selector: "app-outlets",
  templateUrl: "./outlets.component.html",
  styleUrls: ["./outlets.component.scss"],
})
export class OutletsComponent implements OnInit {
  outlets: IAddress[] = [];
  constructor(private api: ApiService) {
    this.api.get<IAddress>(`addresses/search?type=storages`).then((res) => {
      if (res.status === "success" && res.data) {
        this.outlets = res.data;
        console.log(this.outlets);
      } else {
        console.log(res);
      }
    });
  }

  ngOnInit(): void {}
}
