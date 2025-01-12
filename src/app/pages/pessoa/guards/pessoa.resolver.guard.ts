import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {Pessoa} from "../pessoa";
import {PessoaService} from "../pessoa.service";

@Injectable({
    providedIn: 'root'
})
export class PessoaResolverGuard  {

    constructor(private _service: PessoaService) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Pessoa> | Promise<Pessoa> | Pessoa {
        if (route.params && route.params['id']) {
            return this._service.getById(route.params['id']);
        }

        return EMPTY;
    }
}
