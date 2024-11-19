import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriaListComponent} from "./categoria-list/categoria-list.component";
import {CategoriaFormComponent} from "./categoria-form/categoria-form.component";
import {CategoriaResolverGuard} from "./guards/categoria-resolver-guard.service";

const categoriaRoutes: Routes = [

    {path: '', component: CategoriaListComponent},
    {
        path: 'cadastro',
        component: CategoriaFormComponent,
        data: [{title: 'Nova Categoria'}]
    },
    {
        path: 'cadastro/:id',
        component: CategoriaFormComponent,
        data: [{title: 'Cadastro de Categoria'}],
        resolve: {
            categoria: CategoriaResolverGuard
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(categoriaRoutes)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule {
}
