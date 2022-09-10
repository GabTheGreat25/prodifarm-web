import { Injectable } from "@angular/core";
import { ObjectID } from "bson";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor() {}

  generateId() {
    const newId = new ObjectID();
    localStorage.setItem("pf-id", newId.toString());
  }

  getId() {
    return localStorage.getItem("pf-id");
  }
}
