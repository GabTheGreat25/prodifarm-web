import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services";
@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  @Output() handleSubmit: EventEmitter<string> = new EventEmitter();
  searchForm: FormGroup = new FormGroup({
    search: new FormControl("", Validators.required),
  });

  get search(): AbstractControl | null {
    return this.searchForm.get("search");
  }

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {}

  flushForm() {}

  onSubmit() {
    const { search = "" } = this.searchForm.value;
    this.handleSubmit.emit(search);
  }
}
