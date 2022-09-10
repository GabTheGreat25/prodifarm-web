import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FarmerProductItemComponent } from "./farmer-product-item.component";

describe("FarmerProductItemComponent", () => {
  let component: FarmerProductItemComponent;
  let fixture: ComponentFixture<FarmerProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerProductItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
