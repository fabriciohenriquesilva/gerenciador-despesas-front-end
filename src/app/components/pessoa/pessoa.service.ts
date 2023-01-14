import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../Page';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly api: string = 'http://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) { }

  listar(page: number = 0) {

    let params = new HttpParams();

    if(page > 0){
      params = params.set('page', page);
    }

    return this.http.get<Page>(this.api, { params } );
  }

  cadastrar(pessoa: Pessoa) {
    // return this.http.post<Pessoa>('http://httpbin.org/post', pessoa);
    return this.http.post<Pessoa>(this.api, pessoa);
  }
}
