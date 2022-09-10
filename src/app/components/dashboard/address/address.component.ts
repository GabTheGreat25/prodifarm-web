import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services";
import { AuthQuery } from "src/app/states/auth/auth.query";
import { IUser } from "src/app/interfaces/models/user.interface";
@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  user!: IUser | null;
  isDisplay: boolean = true;
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }
  constructor(private api: ApiService, private AuthQuery: AuthQuery) {
    this.AuthQuery.selectUser$.subscribe((value) => {
      this.user = value;
    });
  }

  ngOnInit(): void {}
}
