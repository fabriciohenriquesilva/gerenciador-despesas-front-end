import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RestService} from "../../core/services/rest.service";
import {MovimentoFinanceiro} from "./models/movimento-financeiro";

@Injectable({
    providedIn: 'root'
})
export class MovimentoFinanceiroService extends RestService<MovimentoFinanceiro> {

    constructor(protected override _http: HttpClient) {
        super(_http, "http://localhost:8080/movimentofinanceiro");
    }

}
