import {Injectable} from '@angular/core';
import {Pessoa} from './pessoa';
import {RestService} from "../../core/services/rest.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PessoaService extends RestService<Pessoa> {

    constructor(protected override _http: HttpClient) {
        super(_http, "http://localhost:8080/api/pessoas");
    }

}
