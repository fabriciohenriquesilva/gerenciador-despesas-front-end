import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../Page';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly api: string = 'http://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) { }

  listar(page: number = 0): Observable<Page<Pessoa>> {

    let params = new HttpParams();

    if(page > 0){
      params = params.set('page', page);
    }

    return this.http.get<Page<Pessoa>>(this.api, { params } );
  }

  cadastrar(pessoa: Pessoa): Observable<Pessoa> {
    // return this.http.post<Pessoa>('http://httpbin.org/post', pessoa);
    return this.http.post<Pessoa>(this.api, pessoa);
  }

  buscarPorId(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.api}/${id}`);
  }

  editar(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.api}/${pessoa.id}`;
    return this.http.put<Pessoa>(url, pessoa);
  }
}
