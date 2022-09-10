import { Component, OnInit, Input, HostListener } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  _images: string[] = [];
  @Input() set images(value: string[]) {
    this._images = value;
    this._thumbnail = value[0];
  }
  _thumbnail!: string;
  @Input() set thumbnail(value: string) {
    this._thumbnail = value;
  }
  constructor() {}

  ngOnInit(): void {}

  viewImage(image: string) {
    this._thumbnail = image;
  }
}
