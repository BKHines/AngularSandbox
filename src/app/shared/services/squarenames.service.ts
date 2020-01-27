import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IName {
  name: string;
  square: number;
  email: string;
  message: string;
  numbersdelivered: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SquarenamesService {

  constructor(private http: HttpClient) { }

  getSquareNames(): Observable<IName[]> {
    const reqUrl = `/api/Squares`;
    return this.http.get<IName[]>(reqUrl, { headers: new HttpHeaders().set('type', 'squarenames') });
  }

  saveNewSquareNames(newnames: IName[]): Observable<void> {
    const reqUrl = `/api/Squares`;
    return this.http.post<void>(reqUrl, newnames, { headers: new HttpHeaders().set('type', 'squarenames') });
  }
}
