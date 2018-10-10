import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { ShowsInfo } from "./models";
// import { ShowsInfoResult } from "./mock-shows-info";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  private showsInfoUrl =
    "https://snerks.github.io/recommended-shows-ts01/recommended-shows.json"; // URL to web api

  constructor(private http: HttpClient) {}

  // getShowsInfo(): ShowsInfo {
  //   return ShowsInfoResult;
  // }

  getShowsInfo(): Observable<ShowsInfo> {
    // return this.http.get<ShowsInfo>(this.showsInfoUrl).pipe(
    //   tap(heroes => this.log("fetched heroes")),
    //   catchError(this.handleError("getHeroes", []))
    // );

    return this.http.get<ShowsInfo>(this.showsInfoUrl);
  }
}
