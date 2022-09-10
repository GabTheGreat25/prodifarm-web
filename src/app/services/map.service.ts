import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment as env } from "src/environments/environment";
import { ICoordinates } from "../interfaces";
@Injectable({
  providedIn: "root",
})
export class MapService {
  outletMarkerOptions!: google.maps.MarkerOptions;
  constructor(private http: HttpClient) {}

  loadMap() {
    return this.http.jsonp(`${env.GOOGLE_API_URL}${env.GOOGLE_API_KEY}`, "callback").pipe(
      map(() => {
        this.outletMarkerOptions = {
          icon: {
            url: `${env.ASSETS_URL}/icons/logo.png`,
            scaledSize: new google.maps.Size(30, 45),
          },
        };
        return true;
      }),
      catchError((err) => {
        console.log("ERROR", err);
        return of(false);
      })
    );
  }

  getLocation(options?: PositionOptions): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
  }

  async locate(): Promise<ICoordinates> {
    try {
      const position = await this.getLocation();
      return { lat: position.coords.latitude, lng: position.coords.longitude };
    } catch (err) {
      console.error(err);
      return env.DEFAULT_COORDS;
    }
  }
}
