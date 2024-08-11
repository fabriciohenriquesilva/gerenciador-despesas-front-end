import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: "despesas",
        loadChildren: () => import("./components/despesa/despesa-routing.module")
            .then(m => m.DespesaRoutingModule)
    },
    {
        path: "categorias",
        loadChildren: () => import("./components/categoria/categoria-routing.module")
            .then(m => m.CategoriaRoutingModule)
    },
    {
        path: "subcategorias",
        loadChildren: () => import("./components/subcategoria/subcategoria-routing.module")
            .then(m => m.SubcategoriaRoutingModule)
    },
    {
        path: "pessoas",
        loadChildren: () => import("./components/pessoa/pessoa-routing.module")
            .then(m => m.PessoaRoutingModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
