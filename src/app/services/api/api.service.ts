import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IAuthorizationHeaders, IApiResponse, HandlerFunction } from "src/app/interfaces";
import { AuthQuery } from "src/app/states/auth/auth.query";
import { environment as env } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private API_URL = env.API_URL;
  private TOKEN_NAME = env.TOKEN_NAME;
  isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router, private authQuery: AuthQuery) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error ? { ...error.error, statusText: error.statusText } : error);
  }

  get authorization(): IAuthorizationHeaders {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authQuery.authToken}`,
      },
    };
  }

  public post<T extends U, U>(uri: string, body: U): Promise<IApiResponse<T>> {
    return new Promise((resolve, reject) =>
      this.http
        .post(this.API_URL + uri, body)
        .pipe(catchError(this.handleError))
        .subscribe(this.dataResponseHandler<T>(resolve), this.errorResponseHandler<T>(reject))
    );
  }

  public get<T>(uri: string): Promise<IApiResponse<T>> {
    return new Promise((resolve, reject) =>
      this.http
        .get(this.API_URL + uri)
        .pipe(catchError(this.handleError))
        .subscribe(this.dataResponseHandler<T>(resolve), this.errorResponseHandler<T>(reject))
    );
  }

  public patch<T, U extends {}>(uri: string, body?: U): Promise<IApiResponse<T>> {
    return new Promise((resolve, reject) =>
      this.http
        .patch(this.API_URL + uri, body || {})
        .pipe(catchError(this.handleError))
        .subscribe(this.dataResponseHandler<T>(resolve), this.errorResponseHandler<T>(reject))
    );
  }

  public delete<T>(uri: string): Promise<IApiResponse<T>> {
    return new Promise((resolve, reject) =>
      this.http
        .delete(this.API_URL + uri)
        .pipe(catchError(this.handleError))
        .subscribe(this.dataResponseHandler<T>(resolve), this.errorResponseHandler<T>(reject))
    );
  }

  private dataResponseHandler<T>(resolve: (...args: any) => void): HandlerFunction<T> {
    return (data: IApiResponse<T>) => resolve(data);
  }

  private errorResponseHandler<T>(reject: (...args: any) => void): HandlerFunction<T> {
    return (error: IApiResponse<T>) => reject(error);
  }

  public async authValidate(): Promise<boolean> {
    const token = localStorage.getItem(this.TOKEN_NAME);
    if (token && !this.isLoggedIn) {
      await this.refreshToken(token);
    } else {
      this.refreshToken(token as string);
    }
    return this.isLoggedIn;
  }

  private async refreshToken(token: string): Promise<void> {
    try {
      const { meta } = await this.post("token/validate", { token });
      this.setToken(meta?.token);
      this.isLoggedIn = true;
    } catch (err) {
      const error = err as { message: string; statusText: string };
      if (error.message === "jwt expired" || error.statusText.toLowerCase() === "unauthorized") {
        this.logout();
      }

      this.isLoggedIn = false;
    }
  }

  public setToken(token?: string): void {
    if (token) {
      localStorage.setItem(this.TOKEN_NAME, token);
    } else {
      localStorage.removeItem(this.TOKEN_NAME);
    }
  }

  public logout(url: string = ""): Promise<boolean> {
    this.isLoggedIn = false;
    localStorage.removeItem(this.TOKEN_NAME);
    return this.router.navigate([url]);
  }
}
