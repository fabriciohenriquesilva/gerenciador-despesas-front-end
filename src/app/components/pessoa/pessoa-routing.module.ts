import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoaListComponent} from "./pessoa-list/pessoa-list.component";
import {PessoaFormComponent} from "./pessoa-form/pessoa-form.component";
import {PessoaResolverGuard} from "./guards/pessoa.resolver.guard";

const pessoaRoutes: Routes = [
    {path: '', component: PessoaListComponent},
    {
        path: 'cadastro',
        component: PessoaFormComponent,
        data: [{action: 'Cadastrar', title: 'Cadastro de Pessoa'}]
    },
    {
        path: 'cadastro/:id',
        component: PessoaFormComponent,
        data: [{action: 'Salvar', title: 'Edição de Pessoa'}],
        resolve: {
            pessoa: PessoaResolverGuard
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(pessoaRoutes)],
    exports: [RouterModule]
})
export class PessoaRoutingModule {
}
