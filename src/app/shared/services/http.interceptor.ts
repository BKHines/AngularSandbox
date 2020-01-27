import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'InsertTokenHere';
        const fullurl = this.getFullUrl(req.url, /show|squarenames/i.test(req.headers.get('type')));
        req = req.clone({url: fullurl, headers: req.headers.set('Authorization', `Bearer ${token}`), params: req.params });

        // send to server log
        console.log(req);

        return next.handle(req).pipe(
            map((evt: HttpEvent<any>) => {
                if (evt instanceof HttpResponse) {
                    console.log(evt);
                }
                return evt;
            }), catchError((error: HttpErrorResponse) => {
                return this.handleError(error);
            })
        );
    }

    private getFullUrl(reqUrl: string, isapisandbox: boolean): string {
        const _baseApiUrl = isapisandbox ? environment.baseSandboxUrl : environment.baseJsonUrl;
        return _baseApiUrl + reqUrl;
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
