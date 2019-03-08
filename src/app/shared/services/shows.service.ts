import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<any[]> {
    const requrl = `/api/shows/getepisodes`;
    return this.http.get<any[]>(requrl, { headers: new HttpHeaders().set('type', 'show') });
  }

  getEpisodeById(showId: string) {
    const requrl = `/api/shows/retrieveepisodebyid`;
    return this.http.post(requrl, { id: showId}, { headers: new HttpHeaders().set('type', 'show') });
  }

  getEpisodesByShow(showname: string) {
    const requrl = `/api/shows/retrieveepisodesbyshow`;
    return this.http.post(requrl, { showname: showname }, { headers: new HttpHeaders().set('type', 'show') });
  }

  getEpisodesByShowAndSeason(showname: string, season: number) {
    const requrl = `/api/shows/retrieveepisodesbyshowandseason`;
    return this.http.post(requrl, { showname: showname, season: season }, { headers: new HttpHeaders().set('type', 'show') });
  }

  getEpisodesByShowAndDates(showname: string, startdate: Date, enddate: Date) {
    const requrl = `/api/shows/retrieveepisodesbyshowanddates`;
    return this.http.post(requrl, { showname: showname, startdate: startdate, enddate: enddate }, { headers: new HttpHeaders().set('type', 'show') });
  }

  getEpisodeByShowSeasonAndEpisode(showname: string, season: number, episode: number) {
    const requrl = `/api/shows/retrieveepisodebyshowseasonandepisode`;
    return this.http.post(requrl, { showname: showname, season: season, episode: episode }, { headers: new HttpHeaders().set('type', 'show') });
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

    const requrl = `/api/shows/addepisode`;
    return this.http.post(requrl, _episode, { headers: new HttpHeaders().set('type', 'show') });
  }

  deleteEpisode(id: string) {
    const requrl = `/api/shows/deleteepisode`;
    return this.http.post(requrl, { id: id }, { headers: new HttpHeaders().set('type', 'show') });
  }

  addNote(id: string, note: string) {
    const requrl = `/api/shows/addnote`;
    return this.http.post(requrl, { id: id, note: note }, { headers: new HttpHeaders().set('type', 'show') });
  }

  deleteNote(id: string, note: string) {
    const requrl = `/api/shows/deletenote`;
    return this.http.post(requrl, { id: id, note: note }, { headers: new HttpHeaders().set('type', 'show') });
  }

  setEpisodeWatchedFlag(id: string, watched: boolean) {
    const requrl = `/api/shows/setepisodewatchedflag`;
    return this.http.post(requrl, { id: id, watched: watched }, { headers: new HttpHeaders().set('type', 'show') });
  }

  resetData() {
    const requrl = `/api/shows/resetdata`;
    return this.http.get(requrl, { headers: new HttpHeaders().set('type', 'show') });
  }
}
