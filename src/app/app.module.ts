/* COMPONENTS */
import { AppComponent } from "./app.component";

/* MODULES */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { UtilitiesModule } from "./components/utilities/utilities.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "./components/utilities/card/card.module";
import { ProductModule } from "./components/product/product.module";
import { ProductListModule } from "./components/product/product-list/product-list.module";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store";
import { environment as env } from "../environments/environment";
import { AuthInterceptor } from "./interceptors";
import { AuthInterceptorProvider } from "./interceptors/auth/auth.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UtilitiesModule,
    ProductModule,
    CardModule,
    ProductListModule,
    env.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    HttpClientJsonpModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
