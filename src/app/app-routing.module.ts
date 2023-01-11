import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoaComponent } from './components/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarCredoresComponent } from './components/pessoa/listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas/listarPessoas',
    pathMatch: 'full'
  },
  {
    path: 'pessoas/listarPessoas',
    component: ListarCredoresComponent
  },
  {
    path: 'pessoas/cadastro',
    component: CadastrarPessoaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
