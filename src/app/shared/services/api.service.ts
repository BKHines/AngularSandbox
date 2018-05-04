import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const reqUrl = `${this.baseUrl}/users`;
    return this.http.get<any[]>(reqUrl).pipe(catchError(this.handleError));
  }

  getUser(id: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/users/${id}`;
    return this.http.get<any>(reqUrl).pipe(catchError(this.handleError));
  }

  getPosts(): Observable<any[]> {
    const reqUrl = `${this.baseUrl}/posts`;
    return this.http.get<any[]>(reqUrl).pipe(catchError(this.handleError));
  }

  getPost(id: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/posts/${id}`;
    return this.http.get<any>(reqUrl).pipe(catchError(this.handleError));
  }

  addPost(title: string, body: string, userId: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/posts`;
    return this.http.post<any>(reqUrl, { title: title, body: body, userId: userId }).pipe(catchError(this.handleError));
  }

  updatePost(id: number, title: string, body: string, userId: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/posts/${id}`;
    return this.http.put<any>(reqUrl, { id: id, title: title, body: body, userId: userId }).pipe(catchError(this.handleError));
  }

  deletePost(id: number): Observable<boolean> {
    const reqUrl = `${this.baseUrl}/posts/${id}`;
    return this.http.delete<boolean>(reqUrl).pipe(catchError(this.handleError));
  }

  getPostComments(id: number): Observable<any[]> {
    const reqUrl = `${this.baseUrl}/posts/${id}/comments`;
    return this.http.get<any[]>(reqUrl).pipe(catchError(this.handleError));
  }

  getComment(id: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/comments/${id}`;
    return this.http.get<any>(reqUrl).pipe(catchError(this.handleError));
  }

  addComment(name: string, body: string, email: string, postId: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/comments`;
    return this.http.post<any>(reqUrl, { name: name, body: body, email: email, postId: postId }).pipe(catchError(this.handleError));
  }

  updateComment(id: number, name: string, body: string, email: string, postId: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/comments/${id}`;
    return this.http.put<any>(reqUrl, { id: id, name: name, body: body, email: email, postId: postId }).pipe(catchError(this.handleError));
  }

  deleteComment(id: number): Observable<boolean> {
    const reqUrl = `${this.baseUrl}/comments/${id}`;
    return this.http.delete<boolean>(reqUrl).pipe(catchError(this.handleError));
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
