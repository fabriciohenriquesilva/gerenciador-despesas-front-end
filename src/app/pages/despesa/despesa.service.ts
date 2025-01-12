import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Page} from '../../core/models/page';
import {Categoria} from '../categoria/categoria';
import {Despesa} from './despesa';
import {Pessoa} from '../pessoa/pessoa';
import {RestService} from "../../core/services/rest.service";

@Injectable({
    providedIn: 'root'
})
export class DespesaService extends RestService<Despesa> {

    private readonly api: string = 'http://localhost:8080/api/despesas';

    constructor(protected override _http: HttpClient) {
        super(_http, 'http://localhost:8080/api/despesas');
    }

    buscarCategorias(): Observable<Page<Categoria>> {
        const url = "http://localhost:8080/api/categorias";
        return this._http.get<Page<Categoria>>(url);
    }

    buscarCredor(credorId: number): Observable<Pessoa> {
        const url = `http://localhost:8080/api/pessoas/${credorId}`;

        return this._http.get<Pessoa>(url);
    }

}
