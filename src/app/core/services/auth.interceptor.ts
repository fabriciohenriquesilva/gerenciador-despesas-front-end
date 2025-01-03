import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

export function authInterceptor(
    req: HttpRequest<any>,
    next: HttpHandlerFn): Observable<HttpEvent<any>> {

    const idToken = sessionStorage.getItem("auth-token");
    console.log(idToken)

    if (idToken) {
        const cloned = req.clone({
            headers: req.headers.set("Authorization",
                "Bearer " + idToken)
        });

        return next(cloned);
    } else {
        return next(req);
    }
}
