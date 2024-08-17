import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: "despesas",
        loadChildren: () => import("./pages/despesa/despesa-routing.module")
            .then(m => m.DespesaRoutingModule)
    },
    {
        path: "categorias",
        loadChildren: () => import("./pages/categoria/categoria-routing.module")
            .then(m => m.CategoriaRoutingModule)
    },
    {
        path: "pessoas",
        loadChildren: () => import("./pages/pessoa/pessoa-routing.module")
            .then(m => m.PessoaRoutingModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
