import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Categoria} from './categoria';
import {RestService} from "../../core/services/rest.service";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService extends RestService<Categoria> {

    constructor(protected override _http: HttpClient) {
        super(_http, "http://localhost:8080/api/categorias");
    }

}
