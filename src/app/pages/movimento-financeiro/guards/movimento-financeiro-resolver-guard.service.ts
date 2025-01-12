import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {MovimentoFinanceiroService} from "../movimento-financeiro.service";
import {MovimentoFinanceiro} from "../models/movimento-financeiro";

@Injectable({
    providedIn: 'root'
})
export class MovimentoFinanceiroResolverGuard {

    constructor(private mainService: MovimentoFinanceiroService) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<MovimentoFinanceiro> | Promise<MovimentoFinanceiro> | MovimentoFinanceiro {
        if (route.params && route.params['id']) {
            return this.mainService.getById(route.params['id']);
        }

        return EMPTY;
    }
}
