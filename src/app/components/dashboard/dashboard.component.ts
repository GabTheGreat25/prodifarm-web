import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "src/app/interfaces";
import { AuthQuery } from "src/app/states/auth/auth.query";
import { AuthStore } from "src/app/states/auth/auth.store";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  user?: IUser | null;

  constructor(private authStore: AuthStore, private authQuery: AuthQuery, private router: Router) {}

  ngOnInit(): void {
    this.authQuery.selectUser$.subscribe((authUser) => {
      this.user = authUser;
      // console.log(this.user)
    });
  }

  logout() {
    this.authStore.logout();
    this.router.navigate(["/"]);
  }
}
