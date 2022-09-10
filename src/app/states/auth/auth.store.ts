import { Injectable } from "@angular/core";
import { persistState, PersistStateSelectFn, Store, StoreConfig } from "@datorama/akita";
import { IUser } from "src/app/interfaces";
import { environment as env } from "src/environments/environment";
import { CartService } from "../cart/cart.service";
import { CartStore, createInitialState as resetCart } from "../cart/cart.store";
export interface AuthState {
  token: string;
  user: IUser | null;
}

export function createInitialState(): AuthState {
  return {
    token: "",
    user: null,
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "auth" })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }

  login(auth: AuthState) {
    this.update(auth);
  }

  logout() {
    this.update(createInitialState());
  }
}

export const tokenPersistStorage = persistState({
  key: env.TOKEN_NAME,
});
