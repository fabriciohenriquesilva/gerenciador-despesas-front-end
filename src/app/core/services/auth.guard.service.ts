import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private jwtService: JwtHelperService) {}

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const authToken = sessionStorage.getItem('auth-token');

        if (authToken) {

            if (this.jwtService.isTokenExpired(authToken)) {
                sessionStorage.removeItem('auth-token');
                this.router.navigate(['/auth/login']).then();
                return false;
            }

            return true;
        } else {
            this.router.navigate(['/auth/login']).then();
            return false;
        }
    }
}
