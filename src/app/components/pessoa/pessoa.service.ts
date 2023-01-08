import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../Page';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private api: string = 'http://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Page>(this.api);
  }
}
