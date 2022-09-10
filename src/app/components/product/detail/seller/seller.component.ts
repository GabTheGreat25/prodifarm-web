import { Component, OnInit, Input } from "@angular/core";
import { IUser } from "src/app/interfaces";
import { ApiService } from "src/app/services";

@Component({
  selector: "app-seller",
  templateUrl: "./seller.component.html",
  styleUrls: ["./seller.component.scss"],
})
export class SellerComponent implements OnInit {
  @Input() user?: IUser;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // console.log(this._farmer)
    // this.getFarmer();
  }

  // getFarmer() {
  //   this.api.get<IFarmer>("users/" + this._farmer).then((res) => {
  //     if (res.status === "success" && res?.data?.length) {
  //       this.farmerDetails = res.data[0];
  //     }
  //   });
  // }
}
