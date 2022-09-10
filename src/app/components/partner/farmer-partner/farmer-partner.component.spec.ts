import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FarmerPartnerComponent } from "./farmer-partner.component";

describe("FarmerPartnerComponent", () => {
  let component: FarmerPartnerComponent;
  let fixture: ComponentFixture<FarmerPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerPartnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
