import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {UserTokenDto} from "./dto/user.token.dto";
import {UserLoginDto} from "./dto/user.login.dto";
import {take, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly endpoint: string = "http://localhost:8080/user";

    constructor(private http: HttpClient) { }

    // create();

    login(form: UserLoginDto): Observable<UserTokenDto> {
        return this.http.post<UserTokenDto>(this.endpoint + "/login", form)
            .pipe(
                tap(value => {
                    sessionStorage.setItem("auth-token", value.token);
                }),
                take(1)
            );
    }

    // getById();

}
