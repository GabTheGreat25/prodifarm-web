import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services";
import { AuthQuery } from "src/app/states/auth/auth.query";
import { IUser } from "src/app/interfaces/models/user.interface";

@Component({
  selector: "app-account-form",
  templateUrl: "./account-form.component.html",
  styleUrls: ["./account-form.component.scss"],
})
export class AccountFormComponent implements OnInit {
  user!: IUser | null;
  constructor(private api: ApiService, private AuthQuery: AuthQuery) {
    this.AuthQuery.selectUser$.subscribe((value) => {
      this.user = value;
    });
  }

  ngOnInit(): void {}
}
