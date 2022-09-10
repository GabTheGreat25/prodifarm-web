import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { IAddress, ICoordinates } from "src/app/interfaces";
import { environment as env } from "src/environments/environment";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { Observable } from "rxjs";
import { MapService } from "src/app/services/map.service";
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  _promdiOutlets: IAddress[] = [];
  @Input() set promdiOutlets(value: any) {
    this._promdiOutlets = value;
  }
  _clickable: boolean = true;
  @Input() set clickable(value: any) {
    this._promdiOutlets = value;
  }

  initialCenter = env.DEFAULT_COORDS;
  selectedLocation!: ICoordinates;
  mapLoaded?: Observable<boolean>;
  options: google.maps.MapOptions = {
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  outletInfo = {
    title: "",
  };
  constructor(private mapService: MapService) {
    this.mapLoaded = this.mapService.loadMap();
  }

  ngOnInit(): void {
    this.mapService.locate().then((value) => {
      this.selectedLocation = value;
    });
  }

  get outletMarkerOptions() {
    return this.mapService.outletMarkerOptions;
  }

  getCoordinates({ loc: { coordinates } }: IAddress): ICoordinates {
    const [lng, lat] = coordinates;
    return { lat, lng };
  }

  setMarker(e: google.maps.MapMouseEvent) {
    if (this.clickable) {
      this.selectedLocation = e?.latLng?.toJSON() ?? env.DEFAULT_COORDS;
    }
  }

  showMapInfo(marker: MapMarker, promdiOutlet: IAddress) {
    this.outletInfo = {
      title: this.formatCompoundCode(promdiOutlet.compoundCode) ?? promdiOutlet.name,
    };
    this.info.open(marker);
  }

  formatCompoundCode(compoundCode: string) {
    if (!compoundCode) return null;
    return compoundCode
      .split(" ")
      .filter((code) => !code.includes("+"))
      .join(" ");
  }
}
