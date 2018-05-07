import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  baseurl = 'http://apisandbox.servehttp.com';
  // baseurl = 'http://localhost:52841';

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<any[]> {
    const requrl = `${this.baseurl}/api/shows/getepisodes`;
    return this.http.get(requrl).pipe(catchError(this.handleError));
  }

  getEpisodeById(showId: string) {
    const requrl = `${this.baseurl}/api/shows/retrieveepisodebyid`;
    return this.http.post(requrl, { id: showId}).pipe(catchError(this.handleError));
  }

  getEpisodesByShow(showname: string) {
    const requrl = `${this.baseurl}/api/shows/retrieveepisodesbyshow`;
    return this.http.post(requrl, { showname: showname }).pipe(catchError(this.handleError));
  }

  getEpisodesByShowAndSeason(showname: string, season: number) {
    const requrl = `${this.baseurl}/api/shows/retrieveepisodesbyshowandseason`;
    return this.http.post(requrl, { showname: showname, season: season }).pipe(catchError(this.handleError));
  }

  getEpisodesByShowAndDates(showname: string, startdate: Date, enddate: Date) {
    const requrl = `${this.baseurl}/api/shows/retrieveepisodesbyshowanddates`;
    return this.http.post(requrl, { showname: showname, startdate: startdate, enddate: enddate }).pipe(catchError(this.handleError));
  }

  getEpisodeByShowSeasonAndEpisode(showname: string, season: number, episode: number) {
    const requrl = `${this.baseurl}/api/shows/retrieveepisodebyshowseasonandepisode`;
    return this.http.post(requrl, { showname: showname, season: season, episode: episode }).pipe(catchError(this.handleError));
  }

  addEpisode(showname: string, episodename: string, season: number, overall: number, episode: number, airdate: string, notes: string, watched: boolean) {
    const _episode = {
      showname: showname,
      season: season,
      episode: episode,
      overall: overall,
      episodename: episodename,
      airdate: airdate,
      watched: watched
    };

    const requrl = `${this.baseurl}/api/shows/addepisode`;
    return this.http.post(requrl, _episode).pipe(catchError(this.handleError));
  }

  deleteEpisode(id: string) {
    const requrl = `${this.baseurl}/api/shows/deleteepisode`;
    return this.http.post(requrl, { id: id }).pipe(catchError(this.handleError));
  }

  addNote(id: string, note: string) {
    const requrl = `${this.baseurl}/api/shows/addnote`;
    return this.http.post(requrl, { id: id, note: note }).pipe(catchError(this.handleError));
  }

  deleteNote(id: string, note: string) {
    const requrl = `${this.baseurl}/api/shows/deletenote`;
    return this.http.post(requrl, { id: id, note: note }).pipe(catchError(this.handleError));
  }

  setEpisodeWatchedFlag(id: string, watched: boolean) {
    const requrl = `${this.baseurl}/api/shows/setepisodewatchedflag`;
    return this.http.post(requrl, { id: id, watched: watched }).pipe(catchError(this.handleError));
  }

  resetData() {
    const requrl = `${this.baseurl}/api/shows/resetdata`;
    return this.http.get(requrl).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
