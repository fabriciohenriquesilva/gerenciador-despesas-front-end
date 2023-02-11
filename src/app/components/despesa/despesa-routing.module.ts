import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';

const despesaRoutes: Routes = [
  { path: 'despesas', component: ListarDespesasComponent, children: [
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(despesaRoutes)],
  exports: [RouterModule]
})
export class DespesaRoutingModule { }
