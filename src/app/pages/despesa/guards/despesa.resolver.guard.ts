import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {Despesa} from "../despesa";
import {DespesaService} from "../despesa.service";

@Injectable({
    providedIn: 'root'
})
export class DespesaResolverGuard implements Resolve<Despesa> {

    constructor(private _service: DespesaService) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Despesa> | Promise<Despesa> | Despesa {
        if (route.params && route.params['id']) {
            return this._service.loadById(route.params['id']);
        }

        return EMPTY;
    }
}
