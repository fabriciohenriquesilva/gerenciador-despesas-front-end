import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {
  //   path: "despesa",
  // },
  // {
  //   path: "categoria"
  // },
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
