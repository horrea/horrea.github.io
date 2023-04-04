import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Consumer } from '@rex/core';
import { Observable, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

export declare type HttpTimeoutCallback = Consumer<HttpRequest<any>>;

export class HttpTimeoutInterceptor implements HttpInterceptor {

    private subscriptions: Map<HttpRequest<any>, Subscription> = new Map();

    constructor(private callback: HttpTimeoutCallback,
        private timeout: number) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {
                if (event.type === HttpEventType.Sent) {
                    console.log('>> Subscribing to track request timeout : ', req.url);
                    const subscription = timer(this.timeout)
                        .pipe(tap(() => this.callback(req)))
                        .subscribe();
                    this.subscriptions.set(req, subscription);
                } else if (event instanceof HttpResponse && this.subscriptions.has(req)) {
                    console.log('<< UnSubscribing request timeout tracking : ', req.url);
                    this.subscriptions.get(req)?.unsubscribe();
                    this.subscriptions.delete(req);
                }
            })
        );
    }

}