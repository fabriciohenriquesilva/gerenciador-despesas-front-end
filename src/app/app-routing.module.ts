import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoaComponent } from './components/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './components/pessoa/editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './components/pessoa/listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listarPessoas',
    pathMatch: 'full'
  },
  {
    path: 'pessoas/listarPessoas',
    component: ListarPessoasComponent
  },
  {
    path: 'pessoas/cadastro',
    component: CadastrarPessoaComponent
  },
  {
    path: 'pessoas/:id',
    component: EditarPessoaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
