import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ListarDespesasComponent} from './listar-despesas/listar-despesas.component';
import {DespesaRoutingModule} from './despesa-routing.module';
import {DespesaService} from './despesa.service';
import {NavigationModule} from '../../shared/navigation/navigation.module';
import {CadastrarDepesaComponent} from './cadastrar-depesa/cadastrar-depesa.component';
import {DespesaComponent} from './despesa.component';
import {EditarDespesaComponent} from './editar-despesa/editar-despesa.component';
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListarDespesasComponent,
    CadastrarDepesaComponent,
    DespesaComponent,
    EditarDespesaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DespesaRoutingModule,
    NavigationModule,
    SharedModule
  ],
  providers: [
    DespesaService,
    CurrencyPipe
  ]
})
export class DespesaModule {
}
