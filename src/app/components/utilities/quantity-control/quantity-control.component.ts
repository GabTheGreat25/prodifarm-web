import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-quantity-control",
  templateUrl: "./quantity-control.component.html",
  styleUrls: ["./quantity-control.component.scss"],
})
export class QuantityControlComponent implements OnInit {
  _limit: number = 1;
  @Input() set limit(value: number) {
    this._limit = value;
  }
  _count: number = 1;
  @Input() set count(value: number) {
    this._count = value;
  }
  @Output() qtyChange: EventEmitter<number> = new EventEmitter();
  quantity = new FormControl(this._count);
  constructor() {}

  ngOnInit(): void {
    this.quantity.setValue(this._count);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes._limit) {
      this.changeCount();
    }
  }

  increaseQty() {
    this._count++;
    this.qtyChange.emit(this._count);
  }

  decreaseQty() {
    this._count--;
    this.qtyChange.emit(this._count);
  }

  changeCount() {
    this._count = this.quantity.value;
    if (this._count > this._limit && this._limit) {
      this._count = this._limit;
      this.quantity.setValue(this._limit);
    }
    if (this._count < 1 || !this._count) {
      this._count = 1;
      this.quantity.setValue(1);
    }
    this.qtyChange.emit(this._count);
  }
}
