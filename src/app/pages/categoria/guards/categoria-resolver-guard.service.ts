import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {Categoria} from "../categoria";
import {CategoriaService} from "../categoria.service";

@Injectable({
    providedIn: 'root'
})
export class CategoriaResolverGuard  {

    constructor(private _service: CategoriaService) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Categoria> | Promise<Categoria> | Categoria {
        if (route.params && route.params['id']) {
            return this._service.loadById(route.params['id']);
        }

        return EMPTY;
    }
}
