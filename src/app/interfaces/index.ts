export * from "./form/form.interface";
export * from "./models/product.interface";
export * from "./models/cart.interface";
export * from "./models/user.interface";
export * from "./models/address.interface";
export type HandlerFunction<T> = (value: any) => void;

export interface IAuthorizationHeaders {
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
}

export interface IApiResponse<T> {
  status: string | number;
  error: boolean;
  message: string;
  data?: T[];
  meta?: {
    version?: number;
    page?: number;
    total?: number;
    token?: string;
  };
}
