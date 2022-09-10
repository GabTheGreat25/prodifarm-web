import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[copyPaste]",
})
export class CopyPasteDirective {
  @HostListener("paste", ["$event"]) blockPaste(e: KeyboardEvent): void {
    e.preventDefault();
  }

  @HostListener("copy", ["$event"]) blockCopy(e: KeyboardEvent): void {
    e.preventDefault();
  }

  @HostListener("cut", ["$event"]) blockCut(e: KeyboardEvent): void {
    e.preventDefault();
  }
}
