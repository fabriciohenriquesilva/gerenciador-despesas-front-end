import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Page} from '../Page';
import {Subcategoria} from '../subcategoria/subcategoria';
import {Categoria} from '../categoria/categoria';
import {Despesa} from './despesa';
import {Pessoa} from '../pessoa/pessoa';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private readonly api: string = 'http://localhost:8080/api/despesas';

  constructor(private http: HttpClient) {
  }

  listar(page: number = 0): Observable<Page<Despesa>> {

    let params = new HttpParams();

    if (page > 0) {
      params = params.set('page', page);
    }

    return this.http.get<Page<Despesa>>(this.api, {params});
  }

  cadastrar(despesa: Despesa): Observable<Despesa> {
    // return this.http.post<Despesa>('http://httpbin.org/post', despesa);
    return this.http.post<Despesa>(this.api, despesa);
  }

  buscarPorId(id: number): Observable<Despesa> {
    return this.http.get<Despesa>(`${this.api}/${id}`);
  }

  editar(despesa: Despesa): Observable<Despesa> {
    // const url = `${this.api}/${despesa.id}`;
    return this.http.put<Despesa>(this.api, despesa);
  }

  buscarCategorias(): Observable<Page<Categoria>> {
    const url = "http://localhost:8080/api/categorias";
    return this.http.get<Page<Categoria>>(url);
  }

  buscarSubcategorias(categoriaId: number): Observable<Subcategoria[]> {

    let params = new HttpParams();
    params = params.set('categoria', categoriaId);

    const url = "http://localhost:8080/api/subcategorias";
    return this.http.get<Subcategoria[]>(url, {params});
  }

  buscarCredor(credorId: number): Observable<Pessoa> {
    const url = `http://localhost:8080/api/pessoas/${credorId}`;

    return this.http.get<Pessoa>(url);
  }

}
