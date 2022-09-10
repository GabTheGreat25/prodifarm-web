import { Injectable } from "@angular/core";
import { Query, toBoolean } from "@datorama/akita";
import { AuthStore, AuthState } from "./auth.store";

@Injectable({ providedIn: "root" })
export class AuthQuery extends Query<AuthState> {
  allState$ = this.select();
  // isLoggedIn$ = this.select(state => toBoolean(state.token))
  selectUser$ = this.select((state) => state.user);

  constructor(protected store: AuthStore) {
    super(store);
  }

  get isAuthenticated() {
    return !!this.getValue().token;
  }

  get authToken() {
    return this.getValue().token;
  }

  get user() {
    return this.getValue().user;
  }
}
