import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthQuery } from "src/app/states/auth/auth.query";
import { tap } from "rxjs/operators";
import { AuthStore } from "src/app/states/auth/auth.store";
import { ApiService } from "src/app/services";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authQuery: AuthQuery, private authStore: AuthStore, private api: ApiService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authQuery.authToken}`,
      },
    });
    // this.refreshToken(this.authQuery.authToken)
    return next.handle(request).pipe(
      tap({
        next: (res) => {
          if (res instanceof HttpResponse && (res.body.status.toLowerCase() === "unauthorized" || res.body.message === "jwt expired")) {
            console.log("FROM HTTP INTERCEPTOR");

            this.authStore.logout();
            this.router.navigate(["/login"]);
          }
        },
      })
    );
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
