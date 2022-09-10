import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageNotFoundComponent } from "./image-not-found.component";

describe("ImageNotFoundComponent", () => {
  let component: ImageNotFoundComponent;
  let fixture: ComponentFixture<ImageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageNotFoundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
