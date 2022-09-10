import { IDateStamps } from "./base.interface";

export interface IAddress extends IDateStamps {
  name: string;
  type: "users" | "orders" | "storages";
  loc: ILoc;
  compoundCode: string;
  globalCode: string;
  deleted: boolean;
}

export interface ILoc {
  type: "Point";
  coordinates: number[];
}

export interface ICoordinates {
  lat: number;
  lng: number;
}
