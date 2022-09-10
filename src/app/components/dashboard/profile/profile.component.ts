import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services";
import { AuthQuery } from "src/app/states/auth/auth.query";
import { IUser } from "src/app/interfaces/models/user.interface";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user!: IUser | null;
  constructor(private api: ApiService, private AuthQuery: AuthQuery) {
    this.AuthQuery.selectUser$.subscribe((value) => {
      this.user = value;
    });
  }

  ngOnInit(): void {}
}
