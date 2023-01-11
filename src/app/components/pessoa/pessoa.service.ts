import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../Page';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private api: string = 'http://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Page>(this.api);
  }

  cadastrar(pessoa: Pessoa) {
    // return this.http.post<Pessoa>('http://httpbin.org/post', pessoa);
    return this.http.post<Pessoa>(this.api, pessoa);
  }
}
