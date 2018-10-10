import { Component, OnInit } from "@angular/core";
import { ShowService } from "./show.service";
import { ShowsInfo } from "./models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "recommended-shows-ng01";

  showsInfo: ShowsInfo;

  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.getShowsInfo();
  }

  getShowsInfo(): void {
    this.showService
      .getShowsInfo()
      .subscribe(showsInfo => (this.showsInfo = showsInfo));
  }
}
