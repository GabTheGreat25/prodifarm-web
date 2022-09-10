import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TopPickComponent } from "./top-pick.component";

describe("TopPickComponent", () => {
  let component: TopPickComponent;
  let fixture: ComponentFixture<TopPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopPickComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
