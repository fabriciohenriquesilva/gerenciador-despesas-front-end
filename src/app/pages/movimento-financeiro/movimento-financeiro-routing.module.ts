import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovimentoFinanceiroCrudComponent} from "./movimento-financeiro-crud/movimento-financeiro-crud.component";
import {MovimentoFinanceiroResolverGuard} from "./guards/movimento-financeiro-resolver-guard.service";

const movimentoFinanceiroRoutes: Routes = [

    {path: '', component: MovimentoFinanceiroCrudComponent},
    {
        path: 'cadastro',
        component: MovimentoFinanceiroCrudComponent
    },
    {
        path: 'cadastro/:id',
        component: MovimentoFinanceiroCrudComponent,
        resolve: {
            movimentofinanceiro: MovimentoFinanceiroResolverGuard
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(movimentoFinanceiroRoutes)],
    exports: [RouterModule]
})
export class MovimentoFinanceiroRoutingModule {
}
