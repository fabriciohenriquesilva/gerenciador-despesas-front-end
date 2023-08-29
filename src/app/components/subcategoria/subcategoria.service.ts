import {Injectable} from '@angular/core';
import {RestService} from "../../core/services/rest.service";
import {Subcategoria} from "./subcategoria";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService extends RestService<Subcategoria> {

  constructor(protected override _http: HttpClient) {
    super(_http, "http://localhost:8080/api/subcategorias");
  }

}
