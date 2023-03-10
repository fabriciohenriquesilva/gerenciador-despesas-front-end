import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarDepesaComponent } from './cadastrar-depesa/cadastrar-depesa.component';
import { DespesaComponent } from './despesa.component';
import { EditarDespesaComponent } from './editar-despesa/editar-despesa.component';
import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';

const despesaRoutes: Routes = [
  { path: 'despesas', component: DespesaComponent, children: [
    { path: '', component: ListarDespesasComponent },
    { path: 'cadastro', component: CadastrarDepesaComponent },
    { path: ':id', component: EditarDespesaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(despesaRoutes)],
  exports: [RouterModule]
})
export class DespesaRoutingModule { }
