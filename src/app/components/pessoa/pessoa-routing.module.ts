import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { PessoaComponent } from './pessoa.component';

const pessoaRoutes: Routes = [
  {
    path: 'pessoas', component: PessoaComponent, children: [
      { path: '', component: ListarPessoasComponent },
      { path: 'cadastro', component: CadastrarPessoaComponent },
      { path: ':id', component: EditarPessoaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
