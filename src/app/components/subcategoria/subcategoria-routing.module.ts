import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubcategoriaListComponent} from "./subcategoria-list/subcategoria-list.component";
import {SubcategoriaFormComponent} from "./subcategoria-form/subcategoria-form.component";
import {SubcategoriaResolverGuard} from "./guards/subcategoria-resolver-guard.service";

const subcategoriaRoutes: Routes = [

  { path: '', component: SubcategoriaListComponent },
  {
    path: 'cadastro',
    component: SubcategoriaFormComponent,
    data: [{action: 'Cadastrar', title: 'Cadastro de Subcategoria'}]
  },
  {
    path: 'cadastro/:id',
    component: SubcategoriaFormComponent,
    data: [{action: 'Salvar Alterações', title: 'Edição de Subcategoria'}],
    resolve: {
      subcategoria: SubcategoriaResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(subcategoriaRoutes)],
  exports: [RouterModule]
})
export class SubcategoriaRoutingModule { }
