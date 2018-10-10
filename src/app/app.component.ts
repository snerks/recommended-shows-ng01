import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

import { ShowService } from "./show.service";
import { ShowsInfo, Show } from "./models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // title = "recommended-shows-ng01";

  showsInfo: ShowsInfo;

  artistsSearchTerm?: string;

  showPastEvents: boolean;

  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.getShowsInfo();
  }

  getShowsInfo(): void {
    this.showService
      .getShowsInfo()
      .subscribe(showsInfo => (this.showsInfo = showsInfo));
  }

  get visibleShows(): Show[] {
    const { shows } = this.showsInfo;

    if (this.showPastEvents) {
      return shows;
    }

    const inDateRangeShows = shows.filter(this.visibleShowFilter);

    return inDateRangeShows;
  }

  visibleShowFilter = (show: Show) => {
    const currentDateTime = new Date();

    let willShowEvent = false;

    if (this.showPastEvents) {
      willShowEvent = true;
    } else {
      const eventDate = new Date(show.date);
      const eventDateEndOfDay = moment(eventDate).endOf("day");

      const isPastEvent = eventDateEndOfDay.isBefore(currentDateTime);

      willShowEvent = !isPastEvent;
    }

    return willShowEvent;
  };

  get artistFilterShows(): Show[] {
    const results = this.visibleShows.filter(show => {
      if (!this.artistsSearchTerm) {
        return true;
      }

      const showText = show.artists.reduce(
        (previousArtistsResult, currentArtist, currentArtistIndex) => {
          const currentArtistText = currentArtist.name;

          return currentArtistIndex === 0
            ? currentArtistText
            : previousArtistsResult + " " + currentArtistText;
        },
        ""
      );

      return (
        showText.toLowerCase().indexOf(this.artistsSearchTerm.toLowerCase()) >
        -1
      );
    });

    return results;
  }
}
