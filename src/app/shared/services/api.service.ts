import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const reqUrl = `/users`;
    return this.http.get<any[]>(reqUrl);
  }

  getUser(id: number): Observable<any> {
    const reqUrl = `/users/${id}`;
    return this.http.get<any>(reqUrl);
  }

  getPosts(): Observable<any[]> {
    const reqUrl = `/posts`;
    return this.http.get<any[]>(reqUrl);
  }

  getPost(id: number): Observable<any> {
    const reqUrl = `/posts/${id}`;
    return this.http.get<any>(reqUrl);
  }

  addPost(title: string, body: string, userId: number): Observable<any> {
    const reqUrl = `/posts`;
    return this.http.post<any>(reqUrl, { title: title, body: body, userId: userId });
  }

  updatePost(id: number, title: string, body: string, userId: number): Observable<any> {
    const reqUrl = `/posts/${id}`;
    return this.http.put<any>(reqUrl, { id: id, title: title, body: body, userId: userId });
  }

  deletePost(id: number): Observable<boolean> {
    const reqUrl = `/posts/${id}`;
    return this.http.delete<boolean>(reqUrl);
  }

  getPostComments(id: number): Observable<any[]> {
    const reqUrl = `/posts/${id}/comments`;
    return this.http.get<any[]>(reqUrl);
  }

  getComment(id: number): Observable<any> {
    const reqUrl = `/comments/${id}`;
    return this.http.get<any>(reqUrl);
  }

  addComment(name: string, body: string, email: string, postId: number): Observable<any> {
    const reqUrl = `/comments`;
    return this.http.post<any>(reqUrl, { name: name, body: body, email: email, postId: postId });
  }

  updateComment(id: number, name: string, body: string, email: string, postId: number): Observable<any> {
    const reqUrl = `/comments/${id}`;
    return this.http.put<any>(reqUrl, { id: id, name: name, body: body, email: email, postId: postId });
  }

  deleteComment(id: number): Observable<boolean> {
    const reqUrl = `/comments/${id}`;
    return this.http.delete<boolean>(reqUrl);
  }
}
