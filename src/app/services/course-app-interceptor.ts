import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { UserStoreService } from './user-store.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CourseAppInterceptor implements HttpInterceptor {
    constructor(private userStore: UserStoreService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('INTERCEPTING!!!');
        if (this.userStore.isLoggedIn()) {
            const authReq = req.clone({
                headers: req.headers.set(
                    'X-AUTH-HEADER',
                    this.userStore.token
                )
            });
            console.log('Making an authorized request');
            req = authReq;
        }
        return next.handle(req);
    }
}
