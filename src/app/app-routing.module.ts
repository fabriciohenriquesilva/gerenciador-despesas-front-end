import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCredoresComponent } from './components/credor/listar-credores/listar-credores.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
  },
  {
    path: 'pessoas/listarPessoas',
    component: ListarCredoresComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
