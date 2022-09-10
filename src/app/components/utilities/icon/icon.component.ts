import { Component, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { ICONS } from "src/app/constants/icons";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "src/environments/environment";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent implements OnInit {
  private src = "";

  @Input()
  set name(value: string) {
    if (!ICONS[value]) {
      console.error("ICON NOT FOUND!", "Is this icon registered in the library?", `<app-icon name="${value}"></app-icon>`);
      return;
    }

    this.src = `${env.ASSETS_URL}icons/svg/${ICONS[value]}`;
  }

  constructor(private el: ElementRef, private http: HttpClient, private renderer: Renderer2) {}

  ngOnInit(): void {
    const img = this.renderer.createElement("img");
    img.src = this.src;
    this.renderer.appendChild(this.el.nativeElement, img);
  }
}
