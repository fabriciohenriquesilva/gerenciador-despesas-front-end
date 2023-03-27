import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { CategoriaComponent } from './categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';


const categoriaRoutes: Routes = [
  { path: 'categorias', component: CategoriaComponent, children:[
    { path: '', component: ListarCategoriasComponent },
    { path: 'cadastro', component: CadastrarCategoriaComponent },
    { path: ':id', component: EditarCategoriaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(categoriaRoutes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
