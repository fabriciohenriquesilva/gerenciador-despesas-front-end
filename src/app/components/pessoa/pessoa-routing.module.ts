import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';

const pessoaRoutes: Routes = [
  {
    path: 'pessoas', component: ListarPessoasComponent, children: [
      { path: 'id', component: EditarPessoaComponent },
      { path: 'cadastro', component: CadastrarPessoaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
