import { IDateStamps } from "./base.interface";

export interface IUser extends IDateStamps {
  _id: string;
  addresses: string;
  avatar: string;
  deleted: boolean;
  blocked: boolean;
  roles: string[];
  type: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
