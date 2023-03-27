import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Page } from '../Page';
import { Categoria } from './Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly api: string = 'http://localhost:8080/api/categorias'

  constructor(private http: HttpClient) { }

  listar(page: number = 0): Observable<Page<Categoria>> {
    let params = new HttpParams();

    if(page > 0) {
      params = params.set('page', page)
    }

    return this.http.get<Page<Categoria>>(this.api, { params });
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.api}/${id}`);
  }

  cadastrar(categoria: Categoria) {
    return this.http.post<Categoria>(this.api, categoria);
  }

  editar(categoria: Categoria) {
    return this.http.put<Categoria>(this.api, categoria);
  }

  excluir(id: number) {
    return this.http.delete<Categoria>(`${this.api}/${id}`);
  }

}
