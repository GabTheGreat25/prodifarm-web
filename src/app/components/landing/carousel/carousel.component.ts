import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment as env } from "src/environments/environment";
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  slideCount = 1;
  images = 3;
  interval: number | undefined;
  slides = [
    {
      class: "bg-cover bg-no-repeat item1 slide-item translate-x-0 z-20 slide bg-bottom",
      title: {
        name: "Looking for fresh goods?",
        color: "title-black",
      },
      sub: "Vegetables, fruits and more delivered at your doorsteps",
      button: {
        color: "carouselButton",
        url: "/products",
        name: "Shop Now",
      },
      img: `${env.ASSETS_URL}images/png/banner-new.png`,
    },
    {
      class: "bg-cover bg-no-repeat item2 slide-item translate-x-full slide bg-bottom",
      title: {
        name: "Join us!",
        color: "title-black",
      },
      sub: "Do you want to be part of the Promdi’s Culture and to be our Partner? We welcome you to be our partner",
      button: {
        color: "carouselButton",
        url: "/become-a-partner",
        name: "Become a partner",
      },
      img: `${env.ASSETS_URL}images/png/banner-new-2.png`,
    },
    {
      class: "bg-cover bg-no-repeat bg-right-bottom item3 slide-item -translate-x-full slide slide_item_last",
      title: {
        name: "Maging Promdi Farmer!",
        color: "title-black",
      },
      sub: "Gusto mo bang maging ka-Promdi? Welcome po ang lahat ng magsasaka na magbenta ng kanilang ani.",
      button: {
        color: "carouselButton",
        url: "/become-a-partner/farmer",
        name: "Register now",
      },
      img: `${env.ASSETS_URL}images/png/bg-farmer.png`,
    },
  ];

  constructor(private router: Router) {}
  ngAfterViewInit(): void {
    document.addEventListener("readystatechange", (event) => {
      if (document.readyState === "complete") {
        setTimeout(() => {
          this.interval = window.setInterval(() => {
            this.nextSlide();
          }, 5000);
        }, 5000);
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  goto(path: string): void {
    this.router.navigate([path]);
  }

  private removeClass(el: Element | null, classNames: string[]): void {
    classNames.map((name) => el?.classList.remove(name));
  }

  private addClass(el: Element | null, classNames: string[]): void {
    classNames.map((name) => el?.classList.add(name));
  }

  private setElement(selector: string, options: { add: string[]; remove: string[] }): void {
    const el = document.querySelector(selector);
    this.removeClass(el, options.remove);
    this.addClass(el, options.add);
  }

  nextSlide(isNext: boolean = true): void {
    this.setElement(`.slide.translate-x-0.item${this.slideCount}`, {
      remove: ["translate-x-0", "z-20"],
      add: [isNext ? "-translate-x-full" : "translate-x-full", "z-10"],
    });

    this.setElement(`.slide.item${this.slideCount === this.images ? 1 : this.slideCount + 1}`, {
      remove: ["translate-x-full", isNext ? "z-0" : "z-10"],
      add: isNext ? ["translate-x-0", "z-20"] : ["-translate-x-full", "z-0"],
    });

    this.setElement(`.slide.item${this.slideCount - 1 === 0 ? this.images : this.slideCount - 1}`, {
      remove: ["-translate-x-full", isNext ? "z-10" : "z-0"],
      add: isNext ? ["translate-x-full", "z-0"] : ["translate-x-0", "z-20"],
    });

    const isEnd = isNext ? this.slideCount === this.images : this.slideCount === 1;
    const lasItem = isNext ? 1 : this.images;
    this.slideCount = isEnd ? lasItem : this.slideCount + (isNext ? 1 : -1);
  }
}
