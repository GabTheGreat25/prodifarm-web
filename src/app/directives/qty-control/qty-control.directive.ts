import { Directive, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[qtyControl]",
})
export class QtyControlDirective {
  @Input() qtyControlValue!: number;

  @HostListener("window:keydown", ["$event"]) guardInvalidQuantity(e: KeyboardEvent): void {
    const forbiddenKeys = ["e", "-", "+", " "];
    if (forbiddenKeys.includes(e.key)) e.preventDefault();
    if (e.key === "0" && this.qtyControlValue < 1) e.preventDefault();
  }
}
