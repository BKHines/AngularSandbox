import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const reqUrl = `${this.baseUrl}/users`;
    return this.http.get<any[]>(reqUrl).catch(this.handleError);
  }

  getUser(id: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/users/${id}`;
    return this.http.get<any>(reqUrl).catch(this.handleError);
  }

  getPosts(): Observable<any[]> {
    const reqUrl = `${this.baseUrl}/posts`;
    return this.http.get<any[]>(reqUrl).catch(this.handleError);
  }

  getPost(id: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/posts/${id}`;
    return this.http.get<any>(reqUrl).catch(this.handleError);
  }

  addPost(title: string, body: string, userId: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/posts`;
    return this.http.post<any>(reqUrl, { title: title, body: body, userId: userId }).catch(this.handleError);
  }

  updatePost(id: number, title: string, body: string, userId: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/posts/${id}`;
    return this.http.put<any>(reqUrl, { id: id, title: title, body: body, userId: userId }).catch(this.handleError);
  }

  deletePost(id: number): Observable<boolean> {
    const reqUrl = `${this.baseUrl}/posts/${id}`;
    return this.http.delete<boolean>(reqUrl).catch(this.handleError);
  }

  getPostComments(id: number): Observable<any[]> {
    const reqUrl = `${this.baseUrl}/posts/${id}/comments`;
    return this.http.get<any[]>(reqUrl).catch(this.handleError);
  }

  getComment(id: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/comments/${id}`;
    return this.http.get<any>(reqUrl).catch(this.handleError);
  }

  addComment(name: string, body: string, email: string, postId: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/comments`;
    return this.http.post<any>(reqUrl, { name: name, body: body, email: email, postId: postId }).catch(this.handleError);
  }

  updateComment(id: number, name: string, body: string, email: string, postId: number): Observable<any> {
    const reqUrl = `${this.baseUrl}/comments/${id}`;
    return this.http.put<any>(reqUrl, { id: id, name: name, body: body, email: email, postId: postId }).catch(this.handleError);
  }

  deleteComment(id: number): Observable<boolean> {
    const reqUrl = `${this.baseUrl}/comments/${id}`;
    return this.http.delete<boolean>(reqUrl).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return new ErrorObservable('An error occurred');
  }
}
