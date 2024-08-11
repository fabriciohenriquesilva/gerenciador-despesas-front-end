import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DespesaListComponent} from "./despesa-list/despesa-list.component";
import {DespesaFormComponent} from "./despesa-form/despesa-form.component";
import {DespesaResolverGuard} from "./guards/despesa.resolver.guard";

const despesaRoutes: Routes = [

    {path: '', component: DespesaListComponent},
    {
        path: 'cadastro',
        component: DespesaFormComponent,
        data: [{action: 'Cadastrar', title: 'Cadastro de Despesa'}]
    },
    {
        path: 'cadastro/:id',
        component: DespesaFormComponent,
        data: [{action: 'Salvar', title: 'Edição de Pessoa'}],
        resolve: {
            despesa: DespesaResolverGuard
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(despesaRoutes)],
    exports: [RouterModule]
})
export class DespesaRoutingModule {
}
