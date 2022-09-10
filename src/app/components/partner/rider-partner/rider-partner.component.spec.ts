import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RiderPartnerComponent } from "./rider-partner.component";

describe("RiderPartnerComponent", () => {
  let component: RiderPartnerComponent;
  let fixture: ComponentFixture<RiderPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiderPartnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
