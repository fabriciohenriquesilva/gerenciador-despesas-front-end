import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {Subcategoria} from "../subcategoria";
import {SubcategoriaService} from "../subcategoria.service";

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaResolverGuard implements Resolve<Subcategoria> {

  constructor(private _service: SubcategoriaService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Subcategoria> | Promise<Subcategoria> | Subcategoria {
    if (route.params && route.params['id']) {
      return this._service.loadById(route.params['id']);
    }

    return EMPTY;
  }
}
