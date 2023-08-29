import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubcategoriaListComponent} from "./subcategoria-list/subcategoria-list.component";
import {SubcategoriaFormComponent} from "./subcategoria-form/subcategoria-form.component";
import {SubcategoriaResolverGuard} from "./guards/subcategoria-resolver-guard.service";

const subcategoriaRoutes: Routes = [

  { path: '', component: SubcategoriaListComponent },
  { path: 'cadastro', component: SubcategoriaFormComponent },
  {
    path: 'cadastro/:id',
    component: SubcategoriaFormComponent,
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
